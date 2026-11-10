import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
const root=resolve('dist');let count=0;const errors=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=join(dir,entry.name);if(entry.isDirectory())await walk(file);else if(file.endsWith('.html')&&!file.startsWith(join(root,'ads'))){
  count++;const html=await readFile(file,'utf8');
  const require=(condition,message)=>{if(!condition)errors.push(`${file}: ${message}`);};
  require((html.match(/<h1[\s>]/g)||[]).length===1,'Expected one H1');
  require(/<title>[^<]+<\/title>/.test(html),'Missing title');
  require(/name="description" content="[^"]+"/.test(html),'Missing meta description');
  require(/rel="canonical" href="https?:\/\//.test(html),'Missing absolute canonical');
  for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)){try{JSON.parse(match[1]);}catch{require(false,'Invalid JSON-LD');}}
  for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){
    const target=resolve(root,'.'+match[1]);
    try{const s=await stat(target);if(s.isDirectory())await stat(join(target,'index.html'));}catch{require(false,`Broken local target ${match[1]}`);}
  }
  for(const match of html.matchAll(/<img\b[^>]*>/g))require(/\balt="[^"]*"/.test(match[0]),'Image missing alt');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);require(ids.length===new Set(ids).size,'Duplicate IDs');
  for(const match of html.matchAll(/href="#([^"]+)"/g))require(ids.includes(match[1]),`Missing anchor ${match[1]}`);
}}}
await walk(root);
const index=JSON.parse(await readFile(join(root,'search-index.json'),'utf8'));
if(new Set(index.map(a=>a.path)).size!==index.length)errors.push('Duplicate search routes');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Passed: ${count} pages, internal links, anchors, image alt text, metadata, JSON-LD, and ${index.length} search records.`);

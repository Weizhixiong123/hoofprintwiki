import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve('dist');
const port=Number(process.env.PORT||4321);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'});return res.end();}
  try{
    const url=new URL(req.url,'http://localhost');
    const path=decodeURIComponent(url.pathname);
    let file=resolve(root,'.'+path);
    if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end('Forbidden');}
    try{if((await stat(file)).isDirectory()){
      if(!path.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'+url.search});return res.end();}
      file=resolve(file,'index.html');
    }}catch{}
    let data;
    try{data=await readFile(file);}catch{file=resolve(root,'404.html');data=await readFile(file);res.statusCode=404;}
    res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Cache-Control','no-cache');
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(400);res.end('Bad request');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parseHTML} from 'linkedom';
import {articles,sources} from '../src/content.mjs';
import {de} from '../src/content.de.mjs';
import {inline,bodyText,renderBody,relatedArticles} from '../src/article.mjs';
import {related} from '../src/related.mjs';

test('article blocks escape markup and only link supported URL schemes',()=>{
  const html=inline('<script>alert(1)</script> [local](/guides/mods/) [creator](https://example.com/?q=1&x=2) [bad](javascript:alert)', '/de');
  assert(!html.includes('<script>'));
  assert(html.includes('href="/de/guides/mods/"'));
  assert(html.includes('href="https://example.com/?q=1&amp;x=2"'));
  assert(!html.includes('href="javascript:'));
  assert(!inline('[bad](//example.com)').includes('<a'));
  assert.equal(renderBody('Old text <b>stays safe</b>'),'<p>Old text &lt;b&gt;stays safe&lt;/b&gt;</p>');
  assert.throws(()=>renderBody([{type:'html',text:'<script>'}]),/Unknown/);
});

test('tables have captions and header scopes, and reject inconsistent data',()=>{
  const block={type:'table',caption:'Costs & income',headers:['Task','Cost'],rows:[['Care','Read save']]};
  const {document}=parseHTML(renderBody([block]));
  assert.equal(document.querySelector('caption').textContent,'Costs & income');
  assert.equal(document.querySelectorAll('thead th[scope="col"]').length,2);
  assert.equal(document.querySelectorAll('tbody th[scope="row"]').length,1);
  assert.equal(document.querySelector('.article-table').getAttribute('tabindex'),'0');
  assert.throws(()=>renderBody([{...block,rows:[['Missing column']]}]),/inconsistent/);
});

test('screenshots keep provenance, dimensions and safe full-size links',async()=>{
  const credits=JSON.parse(await readFile('public/assets/credits.json','utf8'));
  for(const a of articles)for(const [,body]of a.sections){
    if(typeof body==='string')continue;
    for(const block of body){
      if(block.source){assert(sources[block.source]);assert(a.references.includes(block.source),`${a.path} is missing source ${block.source}`);}
      if(block.type==='image'){
        assert(credits.some(c=>'/assets/'+c.file===block.src),`Missing credit: ${block.src}`);
        const {document}=parseHTML(renderBody([block],{sources}));
        assert.equal(document.querySelector('img').getAttribute('width'),String(block.width));
        assert.equal(document.querySelector('img').getAttribute('loading'),'lazy');
        assert.equal(document.querySelector('a').getAttribute('href'),block.src);
      }
    }
  }
  assert.throws(()=>renderBody([{type:'image',src:'/assets/../secret.jpg',alt:'x',width:1,height:1}]),/Invalid/);
});

test('curated recommendations match player tasks in both languages',()=>{
  assert.equal(Object.keys(related).length,articles.length);
  const localized=articles.map(a=>({...a,...de.articles[a.path]}));
  for(const list of [articles,localized])for(const a of list){
    const choices=relatedArticles(a,list,related);
    assert.deepEqual(choices.map(item=>item.path),related[a.path],a.path);
  }
  const money=articles.find(a=>a.path==='/guides/money-making/');
  assert.equal(relatedArticles(money,articles,related)[0].path,'/guides/boarders/');
});

test('structured tables, steps and screenshot descriptions enter localized search indexes',async()=>{
  for(const prefix of ['', '/de']){
    const index=JSON.parse(await readFile(`dist${prefix}/search-index.json`,'utf8'));
    assert(!JSON.stringify(index).includes('[object Object]'));
    const buy=index.find(a=>a.path===prefix+'/guides/buy-sell-horses/');
    assert.match(buy.text,/Buy Horse/);
    assert(index.some(a=>a.path===prefix+'/community/discord/'&&a.text.includes('Discord')));
    assert(index.some(a=>a.path===prefix+'/guides/westmore-saddlery/'&&a.text.includes('JSON')));
  }
  assert.equal(bodyText([{type:'table',caption:'Fees',headers:['Type','Amount'],rows:[['Board','Check game']]}]),'Fees Type Amount Board Check game');
});

test('expanded pages render localized steps, tables and links without requiring JavaScript',async()=>{
  for(const path of ['/guides/beginners-guide/','/guides/buy-sell-horses/','/guides/breeding/','/guides/competitions/','/guides/money-making/']){
    for(const prefix of ['', '/de']){
      const {document}=parseHTML(await readFile(`dist${prefix}${path}index.html`,'utf8'));
      assert(document.querySelector('article .guide-steps'),prefix+path);
      assert(document.querySelector('article table caption'),prefix+path);
      assert(document.querySelector('article .body-screenshot'),prefix+path);
      assert(![...document.querySelectorAll('img')].some(image=>image.getAttribute('alt')==='undefined'),prefix+path);
      const localLinks=[...document.querySelectorAll('article .prose a')].map(a=>a.getAttribute('href')).filter(href=>href.startsWith('/')&&!href.startsWith('/assets/'));
      assert(localLinks.length>2,prefix+path);
      if(prefix)assert(localLinks.every(href=>href.startsWith('/de/')),prefix+path);
    }
  }
});

test('all articles have translations and complete source registries',()=>{
  for(const a of articles){
    assert(de.articles[a.path],`Missing German translation: ${a.path}`);
    assert(a.sections.length>2);
    for(const key of a.references)assert(sources[key],`Unknown source ${key}`);
  }
});

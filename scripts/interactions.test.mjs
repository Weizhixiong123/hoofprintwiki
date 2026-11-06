import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import vm from 'node:vm';

const script=await readFile('public/app.js','utf8');
const searchIndex=JSON.parse(await readFile('dist/search-index.json','utf8'));
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function setup(route='/'){
  const {document,window}=parseHTML(await readFile(`dist${route}index.html`,'utf8'));
  const dialog=document.querySelector('dialog');
  dialog.showModal=()=>{dialog.open=true;};dialog.close=()=>{dialog.open=false;};
  document.querySelector('#wiki-search').value='';
  if(document.querySelector('#directory-query'))document.querySelector('#directory-query').value='';
  const context={document,window,fetch:async()=>({ok:true,json:async()=>searchIndex})};
  vm.createContext(context);vm.runInContext(script,context);
  return {document,window,dialog,context};
}
test('search opens, matches full guide text, handles empty results, and closes',async()=>{
  const {document,window,dialog}=await setup();
  document.querySelector('.search-trigger').click();await tick();
  assert.equal(dialog.open,true);
  assert.equal(document.querySelectorAll('.search-result').length,11);
  const input=document.querySelector('#wiki-search');input.value='inherit';input.dispatchEvent(new window.Event('input'));await tick();
  assert(document.querySelectorAll('.search-result').length>0);
  assert([...document.querySelectorAll('.search-result')].some(a=>a.getAttribute('href')==='/guides/breeding/'));
  input.value='there-is-no-such-topic';input.dispatchEvent(new window.Event('input'));await tick();
  assert.equal(document.querySelectorAll('.search-result').length,0);
  assert.match(document.querySelector('.search-status').textContent,/No guides found/);
  document.querySelector('.close-search').click();assert.equal(dialog.open,false);
});
test('search network failure is explained and a subsequent query retries',async()=>{
  const {document,window,context}=await setup();
  context.fetch=async()=>{throw Error('offline');};
  document.querySelector('.search-trigger').click();await tick();
  assert.match(document.querySelector('.search-status').textContent,/could not load/);
  context.fetch=async()=>({ok:true,json:async()=>searchIndex});
  document.querySelector('#wiki-search').dispatchEvent(new window.Event('input'));await tick();
  assert.equal(document.querySelectorAll('.search-result').length,11);
});
test('directory combines category and text filters and recovers from no results',async()=>{
  const {document,window}=await setup('/guides/');
  document.querySelector('[data-filter="horses"]').click();
  let visible=()=>[...document.querySelectorAll('[data-guide]')].filter(e=>!e.hidden);
  assert.equal(visible().length,4);
  const input=document.querySelector('#directory-query');input.value='care';input.dispatchEvent(new window.Event('input'));
  assert.equal(visible().length,1);
  assert.equal(visible()[0].dataset.category,'horses');
  input.value='no-match';input.dispatchEvent(new window.Event('input'));
  assert.equal(visible().length,0);assert.equal(document.querySelector('.directory-empty').hidden,false);
  input.value='';input.dispatchEvent(new window.Event('input'));document.querySelector('[data-filter="all"]').click();
  assert.equal(visible().length,11);assert.equal(document.querySelector('.directory-empty').hidden,true);
});
test('navigation toggle and backdrop keep accessible expanded state in sync',async()=>{
  const {document}=await setup();const menu=document.querySelector('.menu-toggle');
  menu.click();assert.equal(menu.getAttribute('aria-expanded'),'true');assert(document.body.classList.contains('nav-open'));
  document.querySelector('.nav-backdrop').click();assert.equal(menu.getAttribute('aria-expanded'),'false');assert(!document.body.classList.contains('nav-open'));
});

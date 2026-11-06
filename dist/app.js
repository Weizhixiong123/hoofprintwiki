const dialog = document.querySelector('.search-dialog');
const input = document.querySelector('#wiki-search');
const results = document.querySelector('.search-results');
const status = document.querySelector('.search-status');
let index, loading;
const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
async function search() {
  status.textContent = 'Loading guides…';
  try {
    if (!index) {
      loading ||= fetch('/search-index.json').then(r => { if (!r.ok) throw Error('Search unavailable'); return r.json(); }).catch(e=>{loading=null;throw e;});
      index = await loading;
    }
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    const found = index.filter(a=>terms.every(t=>normalize(`${a.title} ${a.category} ${a.description} ${a.text}`).includes(t)));
    results.replaceChildren();
    for (const a of found) {
      const link = document.createElement('a'); link.href=a.path; link.className='search-result';
      const category = document.createElement('small'); category.textContent=a.category;
      const title = document.createElement('strong'); title.textContent=a.title;
      const description = document.createElement('span'); description.textContent=a.description;
      link.append(category,title,description); results.append(link);
    }
    status.textContent = found.length ? `${found.length} ${found.length===1?'guide':'guides'}${terms.length?' found':' to explore'}` : 'No guides found. Try a broader term such as “care” or “training”.';
  } catch { status.textContent='Search could not load. Try again or browse All guides from the navigation.'; }
}
let returnFocus;
function closeSearch(){ dialog.close();returnFocus?.focus(); }
for(const button of document.querySelectorAll('.search-trigger'))button.addEventListener('click',()=>{returnFocus=button;dialog.showModal();input.focus();search();});
document.querySelector('.close-search').addEventListener('click',closeSearch);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeSearch();});
dialog.addEventListener('cancel',()=>{returnFocus?.focus();});
input.addEventListener('input',search);
document.addEventListener('keydown',event=>{
  if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.activeElement.isContentEditable&&!dialog.open){event.preventDefault();document.querySelector('.search-trigger').click();}
});
const menu=document.querySelector('.menu-toggle');
const backdrop=document.querySelector('.nav-backdrop');
function setMenu(open){document.body.classList.toggle('nav-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');backdrop.hidden=!open;}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
backdrop.addEventListener('click',()=>setMenu(false));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus();}});
document.addEventListener('focusin',event=>{if(menu.getAttribute('aria-expanded')==='true'&&!document.querySelector('.sidebar').contains(event.target)&&event.target!==menu)setMenu(false);});
const query=document.querySelector('#directory-query');
if(query){
  let selected='all';
  const items=[...document.querySelectorAll('[data-guide]')];
  const buttons=[...document.querySelectorAll('[data-filter]')];
  function filter(){let count=0;const term=normalize(query.value.trim());for(const item of items){const visible=(selected==='all'||selected===item.dataset.category)&&normalize(item.dataset.title).includes(term);item.hidden=!visible;if(visible)count++;}document.querySelector('#directory-count').textContent=`${count} ${count===1?'guide':'guides'}`;document.querySelector('.directory-empty').hidden=count!==0;}
  query.addEventListener('input',filter);
  for(const button of buttons)button.addEventListener('click',()=>{selected=button.dataset.filter;for(const b of buttons)b.setAttribute('aria-pressed',String(b===button));filter();});
}
const observed=[...document.querySelectorAll('.prose section[id]')];
if('IntersectionObserver' in window&&observed.length){const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){for(const a of document.querySelectorAll('.toc nav a'))a.classList.toggle('current',a.hash===`#${entry.target.id}`);}},{rootMargin:'-100px 0px -60% 0px'});observed.forEach(s=>observer.observe(s));}

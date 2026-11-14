// Structured article blocks keep content safe while supporting old [heading, text] sections.
export const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const plainText = value => String(value).replace(/\[([^\]]+)\]\((?:\/(?!\/)|https:\/\/)[^)\s]*\)/g, '$1');
export function inline(text, prefix = '') {
  return escapeHtml(text).replace(/\[([^\]]+)\]\(((?:\/(?!\/)|https:\/\/)[^)\s]*)\)/g, (_, label, path) => path.startsWith('/') ? `<a href="${escapeHtml(prefix)}${path}">${label}</a>` : `<a href="${path}" target="_blank" rel="noopener noreferrer">${label}</a>`);
}

export function bodyText(body) {
  if (typeof body === 'string') return plainText(body);
  return body.map(block => {
    switch (block.type) {
      case 'paragraph': case 'note': return [block.title, block.text].filter(Boolean).join(' ');
      case 'steps': case 'list': return block.items.join(' ');
      case 'table': return [block.caption, ...block.headers, ...block.rows.flat()].join(' ');
      case 'image': return [block.alt, block.caption].join(' ');
      default: throw new Error(`Unknown article block: ${block.type}`);
    }
  }).map(plainText).join(' ');
}

export function articleText(article) {
  return [article.answer, ...article.sections.flatMap(([heading, body]) => [heading, bodyText(body)]), ...article.faq.flat()].map(plainText).join(' ');
}

export function renderBody(body, { prefix = '', sources = {}, language = 'en' } = {}) {
  if (typeof body === 'string') return `<p>${inline(body, prefix)}</p>`;
  const german = language === 'de';
  const source = key => {
    if (!key) return '';
    if (!sources[key]) throw new Error(`Unknown block source: ${key}`);
    return `<span class="block-source">${german ? 'Quelle' : 'Source'}: <a href="${escapeHtml(sources[key].url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(sources[key].title)}</a></span>`;
  };
  return body.map(block => {
    switch (block.type) {
      case 'paragraph': return `<p>${inline(block.text, prefix)}${source(block.source)}</p>`;
      case 'note': return `<aside class="article-note">${block.title ? `<strong>${escapeHtml(block.title)}</strong>` : ''}<p>${inline(block.text, prefix)}${source(block.source)}</p></aside>`;
      case 'steps': case 'list': {
        const tag = block.type === 'steps' ? 'ol' : 'ul';
        return `<${tag} class="${block.type === 'steps' ? 'guide-steps' : 'guide-list'}">${block.items.map(item => `<li>${inline(item, prefix)}</li>`).join('')}</${tag}>${source(block.source)}`;
      }
      case 'table': {
        if (!block.headers?.length || !block.rows?.length || block.rows.some(row => row.length !== block.headers.length)) throw new Error('Article table has inconsistent columns');
        return `<div class="article-table" role="region" aria-label="${escapeHtml(block.caption)}" tabindex="0"><table><caption>${escapeHtml(block.caption)}</caption><thead><tr>${block.headers.map(text => `<th scope="col">${inline(text, prefix)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map((text, index) => index ? `<td>${inline(text, prefix)}</td>` : `<th scope="row">${inline(text, prefix)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>${source(block.source)}`;
      }
      case 'image': {
        if (!/^\/assets\/[a-z0-9][a-z0-9._-]*\.(jpg|png|webp)$/.test(block.src) || !block.alt || !Number.isInteger(block.width) || !Number.isInteger(block.height) || block.width < 1 || block.height < 1) throw new Error('Invalid article screenshot');
        const label = german ? 'Screenshot in voller Größe öffnen' : 'Open full-size screenshot';
        return `<figure class="body-screenshot"><a href="${escapeHtml(block.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(label + ': ' + block.alt)}"><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" width="${block.width}" height="${block.height}" loading="lazy" decoding="async"></a><figcaption>${inline(block.caption, prefix)} <span class="screenshot-hint">${label} ↗</span>${source(block.source)}</figcaption></figure>`;
      }
      default: throw new Error(`Unknown article block: ${block.type}`);
    }
  }).join('');
}

export function relatedArticles(article, articles, editorial = {}) {
  const explicit = article.related || editorial[article.path] || [];
  const byPath = new Map(articles.map(item => [item.path, item]));
  if (new Set(explicit).size !== explicit.length) throw new Error(`Duplicate related path on ${article.path}`);
  for (const path of explicit) if (!byPath.has(path) || path === article.path) throw new Error(`Invalid related path ${path} on ${article.path}`);
  // The structured content also contains links before text is stripped for search.
  const contentLinks = [...JSON.stringify(article.sections).matchAll(/\]\((\/[^)\s]*)\)/g)].map(m => m[1]);
  const words = new Set(article.path.split(/[-/]/).filter(word => word.length > 3));
  const score = other => Number(other.category === article.category) * 2 + other.path.split(/[-/]/).filter(word => words.has(word)).length;
  const fallback = articles.filter(item => item.path !== article.path).sort((a, b) => score(b) - score(a) || a.path.localeCompare(b.path));
  return [...new Set([...explicit, ...contentLinks, ...fallback.map(item => item.path)])].filter(path => path !== article.path && byPath.has(path)).slice(0, 3).map(path => byPath.get(path));
}

# Hoofprint Bay Wiki

根据 [WIKI-PLAN.md](./WIKI-PLAN.md) 开发的英文非官方游戏 Wiki。Node.js 20+，无 npm 运行依赖；DOM 交互检查使用开发依赖 linkedom。

## 本地运行

```powershell
npm install
npm run dev
```

打开 http://127.0.0.1:4321 。修改文件后重新运行构建并刷新；未配置自动热更新。

```powershell
npm run build
npm run check
```

构建输出在 `dist/`，可部署至支持目录式静态路由的托管平台。`404.html` 应设置为自定义 404 页面，不要将未知路径回退至首页并返回 200。

## 内容维护

- `src/content.mjs`：结构化攻略内容、分类、来源。更新条目后重新构建。
- `scripts/build.mjs`：静态 HTML 模板、SEO 元数据、站点地图与搜索索引。
- `public/styles.css`：响应式界面。
- `public/app.js`：搜索、移动菜单、分类筛选。
- `public/assets/credits.json`：官方图片来源记录。

添加攻略时填写 path、title、category、icon、image、description、answer、sections、faq、unknown、references。链接、搜索索引和分类页随构建生成。

`sections` 兼容 `[标题, 字符串]`，也可以使用 `[标题, 内容块数组]`。内容块由 `src/article.mjs` 渲染，支持 `paragraph`、`steps`、`list`、`table`、`image`、`note`。文字中的 `[说明](/站内路径/)` 会自动添加当前语言前缀；HTTPS 外链会保留原地址。

- 表格填写 `caption`、`headers`、`rows`，每行列数必须一致；手机端在表格容器内横向滚动。
- 截图填写本地 `src`、`alt`、`caption`、实际 `width` 和 `height`，并将原始来源加入 `public/assets/credits.json`。点击截图可打开原图。
- 内容块可用 `source` 引用来源登记表的键，并在文章 `references` 中包含该来源。
- `src/related.mjs` 为每篇攻略指定三个相关推荐；新增页面时同时填写相关路径和德语译文。
- `seoTitle` 可覆盖默认 SEO 标题，德语条目应填写自己的对应标题。
- 搜索索引和阅读时间会读取步骤、表格、截图说明等内容块，不依赖浏览器执行后才出现正文。

本次选题证据、CSV 指标含义及验证限制见 [内容研究记录](docs/content-research-2026-11-14.md)。原始 CSV 保持为本地输入，不需要随站点部署。

## 多语言（英语 / 德语）

- 英文页面位于根路径，德语页面位于 `/de/`，路径与英文一一对应（如 `/de/guides/breeding/`）。
- `src/i18n.mjs`：界面文字（导航、页脚、首页、About 页）的英语和德语版本。
- `src/content.de.mjs`：德语分类和攻略正文，以英文 path 为键；icon、image、references 沿用英文条目。
- 只有在 `content.de.mjs` 中有译文的攻略才会生成德语页面，并互相加上 hreflang。新增英文攻略后，记得补上德语译文。
- 页头的 EN / DE 按钮会切换到另一语言的同一页面；对应页面不存在时，跳到该语言的首页。

来源核实日期集中记录在构建脚本。目前内容为官方资料概述，不代表特定游戏版本的实机测试。详细数值与操作条件仍须验证；页面的 Research note 已标明。

## SEO 与域名

默认 canonical 使用正式域名 https://hoofprint.wiki 。临时使用其他域名（如预览环境）时，构建前设置环境变量：

```powershell
$env:SITE_URL = 'https://your-domain.example'
npm run build
```

构建生成唯一 title/H1/canonical、Open Graph、WebPage/BreadcrumbList JSON-LD、robots.txt 和 sitemap.xml。上线后的索引状态、搜索量与排名需使用实际站长工具验证。

Google Fonts 为可选外部字体，无法加载时使用系统字体回退。搜索在浏览器中运行，需要 JavaScript；正文、导航和 FAQ 无需 JavaScript 即可访问。当前不包含用户账户、评论或在线内容编辑后台。

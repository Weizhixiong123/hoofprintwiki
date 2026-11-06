# Horses of Hoofprint Bay Wiki — 初期规划

研究日期：2026-11-06。当前目录仅有本规划文件，尚未创建网站。

## 定位与假设

- 目标读者：需要查玩法和解决具体问题的玩家。
- 暂定语言：英语，面向英文游戏名的搜索；中文可在后续独立规划。
- 正式域名：https://hoofprint.wiki
- 主关键词：Horses of Hoofprint Bay Wiki。
- 相关主题：beginner guide、horse care、breeding、training、stable upgrades、custom tack。
- 定位：独立玩家 Wiki，首页明确标注 unofficial。
- 交付策略：先验证核心玩法，再发布少量完整页面；避免批量生成空词条。
- 证据要求：官方来源支持概述；操作步骤、数值、解锁条件需版本对应的游戏验证。
- 下表为待验证选题，未使用搜索量工具，不能据此推断流量规模或竞争难度。

## 已确认的基础信息

游戏由 Thogli Studios（德国两人团队）开发，The Mane Quest 负责发行与推广。2D 手绘点击式马场经营游戏，灵感来自 2003 年的 My Horse Farm（Mein Pferdehof）。核心内容包括马匹护理、训练、繁育、比赛及马厩管理。

Steam 商店介绍了障碍赛、越野赛、森林/海滩/山地骑行、建筑升级、员工及外观修改。繁育涉及父母毛色、白色花纹与性格的传承，但具体算法及概率尚未核实。

发行方发售文章确认：2026-11-04 在 Steam 发售；正式版取消了 Demo 的前 25 个游戏日限制；游戏以完整产品推出，未承诺重大后续内容更新。免费 Demo 于 2026-02 上线。

Steam App ID（2026-11-06 经 Steam appdetails API 核实）：

- 3727090：正式版，type=game，2026-11-04 发售，付费，已非 coming soon。部分第三方页面显示的"未发售"为旧缓存。
- 4335510：Demo，type=demo，2026-02-16 上线，免费，fullgame 指向 3727090。
- 核实方法：`https://store.steampowered.com/api/appdetails?appids=<ID>`，查看 `type` / `fullgame` / `release_date` 字段。

待核实：

- 已有第三方 custom tack（自定义马具）安装教程，说明玩家存在模组需求；需确认官方是否支持。

来源：

- [Steam 商店](https://store.steampowered.com/app/3727090/Horses_of_Hoofprint_Bay/?l=english)
- [发行方游戏页](https://www.themanequest.com/horses-of-hoofprint-bay)
- [发行方发售说明与开发者问答](https://www.themanequest.com/blog/2026/11/4/game-release-amp-developer-qampa-horses-of-hoofprint-bay-is-out-now-insights-from-anna-glinsmann-and-theresa-thoma)
- [发行方 Demo 公告](https://www.themanequest.com/blog/2026/2/16/horses-of-hoofprint-bay-free-demo-available-now-on-steam)
- [开发商官网](https://thoglistudios.com/)
- [KeenGamer 预览](https://www.keengamer.com/articles/previews/horses-of-hoofprint-bay-preview-a-nostalgic-ride/)
- [Custom tack 教程（Patreon）](https://www.patreon.com/posts/168464274)

## 执行步骤

1. **确认事实**：~~核实发售状态与 App ID~~（已完成，2026-11-06）；确认 custom tack 的官方支持情况。
2. **实测记录**（最关键）：游玩前 3–5 个游戏周，按系统记录截图与数值（价格、解锁条件、训练效果、繁育结果），每条标注游戏版本与日期。笔记存放于 `research/`，不直接发布。
3. **搭建骨架**：选定静态站框架（建议 Astro 或 VitePress），部署到 Cloudflare Pages 或 Vercel；完成页面模板、导航、面包屑、sitemap、robots、404。
4. **发布 MVP**：首页 + 4 篇 P0 指南，每篇均基于实测。
5. **接入站长工具**：Google Search Console、Bing Webmaster Tools，提交 sitemap。
6. **按数据扩展**：依据真实搜索查询与玩家问题，依次补 P1、P2。
7. **版本维护**：游戏更新后，更新受影响页面的适用版本与核实日期。

## 网站结构

```
/                         首页
/guides/
  beginners-guide/        P0
  buy-sell-horses/        P0
  horse-care/             P0
  breeding/               P0
  training/               P1
  competitions/           P1
  staff/                  P2
  demo-vs-full-game/      P2
  custom-tack/            P2
/horses/
  colors-and-patterns/    P1
  personality-traits/     P1
/buildings/               P1
/locations/               后续
/faq/                     后续
/about/                   独立站声明、来源与核实方法
```

## 首批页面与关键词映射

| 优先级 | 页面 | 建议 URL | 内容边界 |
| --- | --- | --- | --- |
| P0 | Horses of Hoofprint Bay Wiki | / | 游戏简介、分类入口、热门指南、来源与更新日期 |
| P0 | Beginner Guide | /guides/beginners-guide/ | 按实测梳理开局、日常循环和早期目标 |
| P0 | How to Buy and Sell Horses | /guides/buy-sell-horses/ | 城镇交易入口、购买前检查，价格与条件待核实 |
| P0 | Horse Care Guide | /guides/horse-care/ | 清洁、马蹄护理、伤病；具体触发机制待核实 |
| P0 | Breeding Guide | /guides/breeding/ | 繁育流程、配对、后代；不编造遗传概率 |
| P1 | Training Guide | /guides/training/ | 力量、信心、训练项目及限制 |
| P1 | Competitions Guide | /guides/competitions/ | 障碍赛、越野赛；报名条件与奖励待核实 |
| P1 | Buildings and Upgrades | /buildings/ | 建筑用途、等级、成本、解锁条件 |
| P1 | Horse Colors and Patterns | /horses/colors-and-patterns/ | 经验证的毛色和花纹，配实机图 |
| P1 | Personality Traits | /horses/personality-traits/ | 经验证的性格名称、效果与继承说明 |
| P2 | Staff Guide | /guides/staff/ | 招聘、工作范围、成本 |
| P2 | Demo vs Full Game | /guides/demo-vs-full-game/ | 官方确认的区别、适用版本与核实日期 |
| P2 | Custom Tack Guide | /guides/custom-tack/ | 自定义马具安装；先确认官方支持情况，注明风险与适用版本 |

后续候选：任务、成就、骑行路线与地点、FAQ、存档与故障排查。仅在有完整资料后建立索引和详情页。

## 首页草案

SEO Title：Horses of Hoofprint Bay Wiki & Guides

H1：Horses of Hoofprint Bay Wiki

Meta Description：Explore the unofficial Horses of Hoofprint Bay wiki for horse care, breeding, training, competitions, and stable management guides.

顺序：简短游戏介绍 → 新手入口 → 核心玩法分类 → 最近核实的指南 → 常见问题 → 官方链接及独立站声明。

导航暂定：Getting Started / Horses / Breeding / Training / Competitions / Buildings。

## 内容与发布要求

每篇指南按以下顺序组织：直接答案 → 前置条件 → 操作步骤 → 数据表 → 相关词条 → 适用版本 / 核实日期 / 来源。未亲自验证的内容不标注为 tested。

数值表需记录游戏版本及验证依据；Demo 与正式版数据分开记录。对未确认的机制保留研究笔记，不作为定论发布。

不将真实马匹遗传知识直接等同于游戏算法，不以生成图片充当游戏截图，不虚构兑换码、作弊码、品种清单或地图。

## 技术落地建议

初期以静态生成页面和结构化 Markdown/MDX 内容为主，优先保证正文可抓取、移动端阅读和后续资料维护。框架建议 Astro（内容集合适合词条管理）或 VitePress，第 3 步时最终确定。

上线前落实：每页唯一 title/H1/canonical、分类内链、面包屑、sitemap、robots、404、图片尺寸与替代文本。结构化数据（BreadcrumbList、FAQPage 等）与可见内容保持一致。

先发布首页及 4 篇有依据的核心指南，再依据 Search Console 的真实查询与玩家问题扩展。当前尚无搜索量、外链、收录或排名数据，不能承诺排名。

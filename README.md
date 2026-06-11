# 幣研所 — 加密貨幣部落格（Astro）

一個為 SEO / AEO 打造的靜態部落格：純 HTML 輸出、速度快、每篇文章都有真實網址與結構化資料（Article + FAQPage JSON-LD），讓 Google 和 ChatGPT / Perplexity 等 AI 搜尋引擎都讀得到、引用得到。

---

## 一、先在本機跑起來看看（選用）

需要 Node 18.20+ 或 20+ 或 22+。

```bash
npm install
npm run dev        # 開 http://localhost:4321
npm run build      # 產生靜態網站到 dist/
```

## 二、改成你的品牌與優惠碼

打開 **`src/config.ts`**，這是你最常改的檔案：

- `SITE.url`：部署後的正式網址（影響 canonical 與 sitemap，務必改對）
- `SITE.name` / `tagline` / `description`：站名與標語
- `PROMO.exchange` / `code` / `benefit` / `url`：你的交易所、優惠碼、優惠內容、推薦註冊連結

改完整站會一起更新（頂部優惠碼按鈕、每篇文章的優惠卡片都吃這份設定）。

## 三、部署到 Vercel（約 5 分鐘）

1. 把整個資料夾推上 GitHub（新建一個 repo，例如 `crypto-blog`）。
2. 到 [vercel.com](https://vercel.com) 用 GitHub 登入 → **Add New → Project** → 選這個 repo。
3. Vercel 會自動偵測是 Astro，直接按 **Deploy**，不用改設定。
4. 部署完成後，把 `src/config.ts` 的 `SITE.url` 改成 Vercel 給你的網址（或你自己的網域），重新 push 即可。

> 之後每次 push 到 GitHub，Vercel 都會自動重新部署。

## 四、怎麼發文章

每篇文章 = `src/content/posts/` 裡的一個 `.md` 檔。兩種方式：

**方式 A — 直接寫 Markdown（最簡單，馬上能用）**
複製 `src/content/posts/` 裡任一篇當範本，改檔名（檔名就是網址代稱，請用英文）與內容即可。最上方 `---` 之間是欄位：

| 欄位 | 說明 |
|---|---|
| `title` | 標題（建議用問句，最容易被搜尋與 AI 命中） |
| `category` | 分類 |
| `excerpt` | 摘要 |
| `answer` | **一句話回答**：40～60 字直接回答標題，AI 會優先抽這段 |
| `faqs` | 常見問答（每組都增加被 AI 引用的機率） |
| `pubDate` / `updatedDate` | 發佈 / 更新日期（建議每季更新，維持新鮮度） |
| `draft` | 設 `true` 就不會公開 |

你也可以用 GitHub 網站直接「Add file」上傳 .md，等於一個免設定的後台。

**方式 B — 用後台介面（`/admin`）**
專案已內建 Decap CMS 後台。要啟用需要一個步驟：到 `public/admin/config.yml` 把 `repo:` 改成你的 `GitHub帳號/儲存庫名`，並設定 GitHub 登入授權（Decap 官方文件：搜尋 "Decap CMS GitHub backend"；Vercel 上需搭配一個 OAuth 轉接，網路上有現成範本）。設定好後，到 `你的網址/admin/` 就能登入、在介面上發文，存檔會自動 commit 回 repo 並觸發重新部署。

> 建議：先用方式 A 上線、開始累積文章；等內容多了、想要更順手的編輯介面，再花時間接 `/admin`。

## 五、SEO / AEO 已內建的東西

- 每篇文章輸出 **BlogPosting + FAQPage** 結構化資料（JSON-LD）
- 正確的 `<title>`、meta description、canonical、Open Graph
- 自動產生 `sitemap-index.xml` 與 `rss.xml`
- `robots.txt`（記得把裡面的網址改成你的）
- 「一句話回答」區塊：專門設計給 AI 抽取引用
- FAQ 用原生 `<details>`，內容直接在 HTML 裡，爬蟲讀得到

## 檔案結構

```
src/
  config.ts                  ← 站台與優惠碼設定（最常改）
  content/posts/*.md         ← 你的文章
  content.config.ts          ← 文章欄位定義
  layouts/Base.astro         ← 共用版型、SEO meta
  components/PromoCTA.astro   ← 優惠碼卡片
  pages/
    index.astro              ← 首頁
    posts/[...slug].astro     ← 文章頁（含 JSON-LD）
    rss.xml.js               ← RSS
    404.astro
  styles/global.css          ← 全站樣式
public/
  admin/                     ← Decap CMS 後台
  robots.txt
```

---

## 六、上線後的設定清單（重要）

### 1. 網站分析（必做）
打開 `src/config.ts`：
- 用 **Plausible**（隱私友善、輕量、付費）：把 `plausibleDomain` 填上你的網域，例 `"fox-blockchain.com"`。
- 或用 **GA4**（免費）：到 analytics.google.com 建立資源，把評估 ID 填進 `gaId`，例 `"G-XXXXXXXXXX"`。
填好重新部署即生效。**出站點擊追蹤已內建**：每次有人點推薦連結，會送出 `Referral Click`（Plausible）/ `referral_click`（GA4）事件，附帶 `position`（版位：board / article_cta / quiz_result）與目的地網域——你可以直接看出哪個版位、哪篇文章在賺錢。

### 2. Google Search Console（必做）
到 search.google.com/search-console → 新增資源（你的網域）→ 驗證 → 提交 sitemap：`https://你的網域/sitemap-index.xml`。沒做這步，你永遠不知道自己在哪些關鍵字有曝光。

### 3. 電子報（建議，可晚點做）
註冊 Buttondown（buttondown.com，免費額度夠用）或 Formspree → 取得表單 action URL → 填入 `src/config.ts` 的 `newsletterAction` → 首頁底部就會出現訂閱框。留空則不顯示。

### 4. 活動維護節奏（每週）
每週掃一次六家平台的官方活動頁 → 更新 `src/config.ts` 裡各平台的 `activity` / `activityNote` / `deadline`（有截止日就填 `YYYY-MM-DD`，看板會顯示倒數標籤）→ push 自動部署。這是「活動統整入口」定位的生命線。

### 5. YouTube 導流
- 頻道首頁與每支影片描述欄第一行放網站連結（可加 `?utm_source=youtube` 方便在分析工具區分流量來源）。
- 影片提到的平台,描述欄直接連到對應介紹文（例 `/posts/binance-intro/`），而不是只連首頁——落地頁越精準，轉換越好。

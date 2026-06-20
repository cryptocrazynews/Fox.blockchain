// ───────────────────────────────────────────────────────────
//  全站設定 — 你主要要改的就是這個檔案
// ───────────────────────────────────────────────────────────

export const SITE = {
  // 部署後請改成你的正式網址（影響 canonical 與 sitemap）
  url: "https://fox-blockchain.com",
  name: "小狐狸區塊鏈",
  tagline: "台灣加密貨幣入門教學，用白話講到你會。",
  description:
    "小狐狸區塊鏈｜台灣加密貨幣入門教學。用白話教你在合規交易所買比特幣、出入金、挑錢包、算手續費、避開詐騙，每一家都實測比較過。",
  author: "小狐狸",
  locale: "zh-TW",
  youtube: "https://www.youtube.com/@Fox.blockchain",
  // YouTube 頻道 ID（UC 開頭）。填入後首頁會自動嵌入你最新的影片。
  // 到 YouTube 工作室 → 設定 → 頻道 → 進階設定，複製「頻道 ID」貼進來。
  youtubeChannelId: "",

  // ── 分析工具（擇一或都用；留空 = 不載入）──
  // Plausible：填你的網域，例 "fox-blockchain.com"
  plausibleDomain: "",
  // GA4：填你的評估 ID，例 "G-XXXXXXXXXX"
  gaId: "G-QM9443W2L9",

  // ── 電子報（留空 = 首頁不顯示訂閱框）──
  // 填表單服務的 action URL（如 Buttondown / Formspree），見 README
  newsletterAction: "",
};

export interface Platform {
  id: string;
  name: string;
  type: string;          // 交易所 / 錢包 / DeFi
  code: string;
  url: string;
  benefit: string;
  activity: string;      // 目前主推活動（活動看板顯示）
  activityNote?: string;
  deadline?: string;     // 活動截止日 YYYY-MM-DD（沒有就留空＝常態活動）
  hot?: boolean;
  post: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: "binance",
    name: "幣安 Binance",
    type: "交易所",
    code: "38825428",
    url: "https://account.binance.com/register?registerChannel=user_center&ref=38825428",
    benefit: "綁定推薦碼享手續費返佣，搭配 BNB 折抵再省",
    activity: "新戶任務中心：完成 KYC 與任務領手續費抵扣券與新手禮包",
    activityNote: "限時活動，實際獎勵以帳號內任務中心顯示為準",
    hot: true,
    post: "binance-intro",
  },
  {
    id: "gate",
    name: "Gate",
    type: "交易所",
    code: "VLEQAFBXVA",
    url: "https://www.gate.com/zh-tw/referral/earn-together/invite/VLEQAFBXVA?ref=VLEQAFBXVA&ref_type=103&utm_cmp=rXJBDjtJ&activity_id=1778642196063",
    benefit: "推薦碼手續費折扣，搭配 GT 折抵更低",
    activity: "拆開盲盒：最高抽 100 USDT 等值代幣",
    activityNote: "獎勵派送中，金額隨機，以活動頁規則為準",
    hot: true,
    post: "gate-intro",
  },
  {
    id: "okx",
    name: "OKX",
    type: "交易所",
    code: "5758217",
    url: "https://okx.com/join/5758217",
    benefit: "推薦碼手續費折扣，新戶任務領盲盒",
    activity: "新戶盲盒：完成 KYC 與入金任務開盲盒（最高約 50 USDT）",
    activityNote: "需在期限內完成驗證與指定任務，以官方活動頁為準",
    hot: true,
    post: "okx-intro",
  },
  {
    id: "crypto-com",
    name: "Crypto.com",
    type: "交易所",
    code: "wu4v2eyk66",
    url: "https://crypto.com/app/wu4v2eyk66",
    benefit: "推薦碼新戶獎勵（與 CRO 鎖倉量掛鉤）",
    activity: "新戶最高 $50 CRO：完成 KYC 並鎖倉 CRO 解鎖",
    activityNote: "用推薦碼註冊則不適用另一檔 App 新手獎勵，二選一",
    post: "crypto-com-intro",
  },
  {
    id: "metamask",
    name: "MetaMask",
    type: "錢包",
    code: "R2Z63B",
    url: "https://link.metamask.io/rewards?referral=R2Z63B",
    benefit: "Rewards 點數計畫：交易、刷卡、推薦都累點",
    activity: "用推薦碼加入 Rewards 起手點數加倍（250 → 500 點）",
    activityNote: "點數規則依當季 Season 為準，部分地區不適用",
    post: "metamask-intro",
  },
  {
    id: "etherfi",
    name: "EtherFi",
    type: "DeFi",
    code: "e21a85d4",
    url: "https://www.ether.fi/@e21a85d4",
    benefit: "ETH 質押賺忠誠點數，加密信用卡消費回饋",
    activity: "透過推薦質押 ETH，雙方各得忠誠點數",
    activityNote: "卡片服務有地區限制，活動檔期以官方公告為準",
    post: "etherfi-intro",
  },
  {
    id: "max",
    name: "MAX 交易所",
    type: "台灣交易所",
    code: "35d1aa4c",
    url: "https://max.maicoin.com/?r=35d1aa4c",
    benefit: "台灣最大台幣出入金管道，遠東銀行信託",
    activity: "推薦碼 8 折 × MAX Token 折抵 7 折，疊加省約 44% 手續費",
    activityNote: "折扣以官方公告為準，註冊時記得填推薦碼",
    post: "max-intro",
  },
  {
    id: "bitopro",
    name: "BitoPro 幣託",
    type: "台灣交易所",
    code: "9066419187",
    url: "https://www.bitopro.com/users/sign_up?referrer=9066419187",
    benefit: "台灣最老牌交易所，全家點數能換幣",
    activity: "推薦連結前 180 天 8 折 × BITO 折抵 8 折，疊加省 36%",
    activityNote: "180 天時效從註冊起算，以官方公告為準",
    post: "bitopro-intro",
  },
  {
    id: "xrex",
    name: "XREX",
    type: "台灣交易所",
    code: "34sMC9SwvyX47kHj",
    url: "https://link.xrex.io/referral/34sMC9SwvyX47kHj",
    benefit: "主打資安與跨境支付，台灣少數美元出入金交易所",
    activity: "推薦碼享永久 10% 手續費折扣",
    activityNote: "優惠細節以官方與你的推薦方案為準",
    post: "xrex-intro",
  },
];

export const getPlatform = (id?: string) =>
  PLATFORMS.find((p) => p.id === id);

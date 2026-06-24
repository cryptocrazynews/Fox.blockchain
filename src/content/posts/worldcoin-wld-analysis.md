---
title: "Worldcoin（World / WLD）全面分析：代幣、用戶、應用與賣壓，2026 最新解析"
category: "市場分析"
excerpt: "OpenAI 創辦人 Sam Altman 的 World（前 Worldcoin）到底值不值得關注？這篇用 2026 年 6 月最新公開數據，全面拆解 WLD 的定位、代幣機制、World ID 應用、用戶成長、拋壓結構與實際用途，用表格整理、附來源、區分事實與估計。"
answer: "World（前 Worldcoin，代幣 WLD）是由 OpenAI 執行長 Sam Altman 共同創辦的「真人網路」專案，用 Orb 虹膜掃描發出可保護隱私的 World ID，目標是在 AI 時代證明「你是獨一無二的真人」。截至 2026 年中，已有超過 1,800 萬人完成 Orb 驗證、World App 用戶逾 3,400 萬。代幣面上，WLD 自 2024 年 3 月高點約 11 美元下跌約 95%，2026 年中約在 0.6 美元附近；2026 年 7 月 24 日將把每日解鎖量砍 43%（從約 510 萬枚降到約 290 萬枚）以緩解拋壓。它的最大隱憂是 World ID 用戶成長與 WLD 代幣需求之間的脫節，加上生物辨識資料的監理風險。屬高敘事、高風險的投機性資產，本文不構成投資建議。"
author: "小狐狸"
pubDate: 2026-06-25
glyph: "🌐"
faqs:
  - q: "Worldcoin 和 World 是同一個東西嗎？WLD 是什麼？"
    a: "是的，Worldcoin 已更名為 World（也稱 World Network），代幣代號仍是 WLD。它由 OpenAI 執行長 Sam Altman 與 Alex Blania 共同創辦，核心產品是用 Orb 裝置掃描虹膜、發出可保護隱私的數位身分 World ID，用來在 AI 時代證明「你是真人」。WLD 是這個生態的功能與治理代幣。"
  - q: "一般用戶可以領多少 WLD？怎麼領？"
    a: "視驗證方式而定。Orb 虹膜驗證可領最多（過去約每月發放、一年分期，金額由基金會決定且會調整）；用 NFC 護照或身分證做 Credential 驗證可領較少；兩者都做可領最多。領取規則是：驗證後 24 小時可領第一筆，之後每月在同一天解鎖一份，分 12 個月領完，當月沒領的會過期、退回社群池。金額會隨時間遞減，越早驗證領越多。"
  - q: "WLD 為什麼跌這麼多？2026 年 7 月減半會讓它漲嗎？"
    a: "WLD 從 2024 年 3 月高點約 11 美元跌到 2026 年中約 0.6 美元，跌幅約 95%，主因是長期高速解鎖帶來的龐大新增供給（拋壓）、加上生物辨識的監理疑慮。2026 年 7 月 24 日每日解鎖量會砍 43%（從約 510 萬枚降到約 290 萬枚），理論上能減輕拋壓，但能不能漲，仍取決於真實需求是否跟上，減半本身不保證上漲。"
  - q: "World ID 真的有人在用嗎？有哪些實際應用？"
    a: "有，且 2026 年 4 月的 Lift Off 升級後明顯增加。最受矚目的是與交友軟體 Tinder（Match Group）整合，給通過驗證的用戶一個「真人徽章」防假帳號與 AI 詐騙；其他還有 Zoom 的防深偽功能、票務工具 Concert Kit、企業驗證（DocuSign、Okta、Vercel）、遊戲（Razer、Mythical Games），以及 Reddit 在評估用於標記自動化帳號。商業模式是「應用付費、用戶免費」。"
  - q: "WLD 有實際用途嗎？還是只是治理代幣？"
    a: "目前實用性偏弱、以治理與生態功能為主。它可付 World Chain 的手續費、用於 Mini Apps、治理投票，2026 年起推出的 World ID 付費機制（應用方用 WLD 付驗證費）是少數真實的需求來源。但官方白皮書也坦言，目前並沒有「必須用 WLD 才能取得的商品或服務」，需求主要寄望於未來生態成長。它不是公司股權，不代表 World 公司的利潤或所有權。"
---

如果你關注 AI，大概聽過 Sam Altman 不只做 OpenAI，還搞了一個「掃虹膜證明你是人」的專案 Worldcoin，現在改名叫 World。它的代幣 WLD 從高點跌掉九成多，卻又因為 AI 敘事和大戶買進不時上新聞。這篇用 2026 年 6 月的最新公開數據，把它從頭到尾拆解清楚，所有數字都用表格整理、附上來源連結，並清楚區分「已確認事實」和「目前估計」。先說結論：這是一個敘事極強、但代幣需求與用戶成長嚴重脫節的高風險專案。以下逐項分析。

## 一、整體定位與最新發展

**核心定位與商業模式（已確認事實）**

World（前 Worldcoin）由 OpenAI 執行長 Sam Altman 與 Alex Blania 共同創辦，開發商是 Tools for Humanity（TFH），由獨立的 World Foundation 治理。它的核心產品是 World ID：用 Orb 裝置掃描你的虹膜，生成一個「零知識證明」，能證明你是獨一無二的真人，卻不洩漏你的身分（來源：[MetaMask](https://metamask.io/price/worldcoin-wld)）。

它的使命，是在 AI 與深偽橫行的時代，建立一個「真人網路」，讓人類在線上能證明自己不是機器人。商業模式則是：應用方（如交友軟體、企業）使用 World ID 驗證要付費（用 WLD 支付），而一般用戶驗證永遠免費（來源：[The Block](https://www.theblock.co/post/397857/world-rolls-out-world-id-proof-of-human-upgrade-with-tinder-integration-zoom-feature-and-ticketing-tools)）。

**2025 至 2026 重要里程碑**

| 時間 | 事件 | 性質 |
|---|---|---|
| 2024 年 10 月 | 品牌更名為 World、World Chain 主網上線 | 已確認 |
| 2025 年 9 月 | Eightco（NASDAQ: ORBS）募資建立 WLD 國庫策略 | 已確認 |
| 2025 年 12 月 | Passport Credential 擴展到更多國家（含台灣） | 已確認 |
| 2026 年 4 月 | **Lift Off 升級**：史上最大 World ID 協定升級，整合 Tinder、Zoom、票務等 | 已確認 |
| 2026 年 4 月 30 日 | 重大網路協定升級，交易所一度暫停 WLD 充提 | 已確認 |
| 2026 年 6 月 9 日 | 公布 Simple Plan 與真人網路 Phase 3 | 已確認 |
| 2026 年 7 月 24 日 | **每日解鎖量砍 43%** | 已排定 |

資料來源：[MetaMask](https://metamask.io/price/worldcoin-wld)、[The Block](https://www.theblock.co/post/397857/world-rolls-out-world-id-proof-of-human-upgrade-with-tinder-integration-zoom-feature-and-ticketing-tools)、[CoinMarketCap](https://coinmarketcap.com/cmc-ai/worldcoin-org/latest-updates/)。

**Roadmap 執行進度**

| 項目 | 狀態 |
|---|---|
| World ID 協定升級（Lift Off、多金鑰、企業級安全） | 已達成 |
| World ID 付費機制（應用付費） | 進行中（2026 推出） |
| 與消費與企業平台整合（Tinder、Zoom、DocuSign 等） | 進行中 |
| 擴展 World Chain 吞吐量與安全（2025 至 2030+） | 進行中 |
| World App 原生 WLD 經濟、更多 Mini Apps | 進行中 |
| 把 World ID 用戶成長轉化為 WLD 真實需求 | 落後 / 待驗證 |

整體看，World 在「技術與整合」執行得不錯，但「代幣需求」這塊明顯落後，這是全篇的核心矛盾。

## 二、代幣發放機制與領取規則

這是很多人最關心的「能領多少」。先講機制（已確認事實，來源：[World 官方說明](https://world.org/blog/world/how-to-claim-your-monthly-wld-airdrop)、[World Help Center](https://support.world.org/hc/en-us/articles/22200067310739-How-much-WLD-can-I-claim)）：

| 項目 | 規則 |
|---|---|
| 驗證方式 | Orb 虹膜（領最多）、Passport/ID Credential（領較少）、兩者都做（領最多） |
| 第一筆 | 驗證後 24 小時可領 |
| 分期方式 | 總額分 12 個月、每月在驗證同一天解鎖一份 |
| 過期規則 | 當月沒領的會過期、退回社群池（無法補領） |
| 金額決定 | 由 World Foundation 決定，會隨時間調整 |
| 遞減機制 | 越晚驗證、可領金額越少（鼓勵早驗證） |

**目前實際可領金額（區分事實與估計）**：官方一份 2026 年 3 月的說明指出，Orb 驗證者「目前約每月可領 40 WLD、分一年發放」（來源：[World 官方](https://world.org/blog/foundational-topics/the-circulating-supply-of-worldcoin-wld-an-explainer)）。但要強調：這個數字會浮動、且因地區與驗證方式而異，Credential 驗證會更少。換算現價（約 0.6 美元），金額其實不高，這也是這個「空投誘因」對成熟市場吸引力下降的原因。

**7 月 24 日的重要調整（已排定）**：注意這裡有兩件不同的事，別混淆。一是**代幣解鎖率**全面下降（見第五段），二是給用戶的**領取金額**本來就會隨時間遞減。兩者都讓「越晚參與、領越少」。

## 三、World ID 的實際應用

這是 World 在 2026 年最大的進展，也是它和「純空投幣」的最大區別。

**與 Tinder 的整合（已確認 + 部分待確認）**

2026 年 4 月，World 與 Tinder 母公司 Match Group 宣布合作，給通過 Orb 驗證的用戶一個「真人徽章（Verified Human badge）」，標示這個交友檔案是真人、不是機器人或 AI 詐騙帳號（來源：[The Block](https://www.theblock.co/post/397857/world-rolls-out-world-id-proof-of-human-upgrade-with-tinder-integration-zoom-feature-and-ticketing-tools)）。對用戶的好處是減少交友詐騙與假帳號；隱私上，驗證資料只存在用戶自己的裝置、用零知識證明，不洩漏身分。要誠實補充：Tinder 驗證用戶能不能因此額外領 WLD，官方尚未完全揭露，預計 Q3 2026 試點才會明朗（來源：[ThePlanetTools](https://theplanettools.ai/blog/sam-altman-project-world-tinder-biometric-verification-partnership-2026)）。

**其他已上線或進行中的應用**

| 平台 | 用途 | 狀態 |
|---|---|---|
| Tinder（Match Group） | 交友檔案真人徽章 | 試點推出中 |
| Zoom | Deep Face 防深偽，確認通話者是真人 | 已整合 |
| Concert Kit | 票務防黃牛機器人 | 已推出 |
| DocuSign、Okta、Vercel | 企業身分驗證、防機器人 | 已整合 |
| Razer、Mythical Games | 遊戲經濟的真人驗證標準 | 已採用 |
| Reddit | 評估用於標記自動化帳號 | 評估中 |

資料來源：[The Block](https://www.theblock.co/post/397857/world-rolls-out-world-id-proof-of-human-upgrade-with-tinder-integration-zoom-feature-and-ticketing-tools)、[MetaMask](https://metamask.io/price/worldcoin-wld)。

**價值評估**：World ID 解決的是一個真實且越來越嚴重的問題，網路上機器人與 AI 內容氾濫（有研究估計部分平台非真人活動高達 50% 以上）。「證明你是真人」在 AI 時代確實有需求。這是 World 最強的故事。

## 四、用戶數據與成長

| 指標 | 數據 | 時間 / 來源 |
|---|---|---|
| Orb 驗證真人數 | 約 1,790 萬至 1,800 萬 | 2026 年 4 至 5 月（[CoinStats](https://coinstats.app/ai/a/investment-analysis-worldcoin-wld)、[MetaMask](https://metamask.io/price/worldcoin-wld)） |
| World App 總用戶 | 約 3,400 萬以上 | 2026 年（[CoinStats](https://coinstats.app/ai/a/investment-analysis-worldcoin-wld)） |
| 覆蓋國家 | 約 160 國 | 2026 年（[MetaMask](https://metamask.io/price/worldcoin-wld)） |
| 在地 Orb 數量 | 1,500+ 台、23 國 | 2026 年（[World 官方](https://world.org/blog/announcements/introducing-world-id-fees)） |

**成長趨勢評估**：用戶規模確實可觀（驗證真人近 1,800 萬），但要注意兩點。第一，月活躍用戶（MAU）與每月新驗證人數，官方與第三方都沒有穩定公開的精確數字，這部分屬「估計不足」，須保留。第二，成長正面臨監理逆風（見下方風險），多國暫停 Orb 營運會直接壓抑新驗證速度。整體是「有規模、但成長確定性受監理制約」。

## 五、代幣模型與賣壓分析

這是判斷 WLD 最關鍵的部分。

**代幣分配（已確認，來源：[Tokenomist](https://tokenomist.ai/worldcoin-wld)、[World 官方](https://world.org/blog/foundational-topics/tokenomics-milestone-wld-unlock-rate-to-decrease-by-43-in-july)）**

| 分配對象 | 比例 |
|---|---|
| World 社群（含用戶空投） | 75.00% |
| TFH 投資人 | 13.78% |
| 初始開發團隊 | 10.02% |
| TFH 儲備 | 1.20% |
| **總供給** | **100 億枚 WLD** |

**解鎖現況（截至 2026 年 4 月 10 日）**：49 億枚已解鎖（佔總量 49%），其中約 33 億枚在流通。採每日線性解鎖、無懸崖式解鎖，完整時程延伸到 2038 年。

**7 月 24 日減半（已排定）**：

| 分配 | 減半前每日解鎖 | 減半後 | 降幅 |
|---|---|---|---|
| 社群代幣 | 320 萬枚/日 | 160 萬枚/日 | -50% |
| 投資人與團隊 | 190 萬枚/日 | 130 萬枚/日 | -32% |
| **合計** | **約 510 萬枚/日** | **約 290 萬枚/日** | **-43%** |

來源：[World 官方](https://world.org/blog/foundational-topics/tokenomics-milestone-wld-unlock-rate-to-decrease-by-43-in-july)、[BeInCrypto](https://beincrypto.com/worldcoin-wld-token-unlock-rate-drops/)。這個調整是寫在鏈上合約、自動執行的。

**主要持倉結構**

| 持有者 | 持倉 | 說明 |
|---|---|---|
| Eightco Holdings（NASDAQ: ORBS） | 約 2.83 億枚 WLD（約 8.3% 流通量） | 全球最大公開機構持有者，背後有 Pantera、Kraken、ARK 等（[PRNewswire](https://www.prnewswire.co.uk/news-releases/eightco-holdings-nasdaq-orbs-reports-total-holdings-of-approximately-472-million-includes-openai-beast-industries-more-than-16-000-eth-and-over-283-million-wld-tokens-302804482.html)） |
| 社群 / 用戶空投 | 75% 總分配的主體 | 領取後常見賣出 |
| 團隊與投資人 | 約 23.8% | 2024 年已把 80% 延長鎖倉至 5 年 |

**賣壓判斷（部分為分析估計）**：短期，主要拋壓來自每日解鎖（7 月前約 510 萬枚/日）與用戶領取後賣出；World Foundation 自己也做過 OTC 賣幣（2026 年初一筆 6,500 萬美元、約 0.27 美元/枚）。長期，7 月減半把每日新增供給砍掉 43%，結構性拋壓會明顯減輕，但 Eightco 的單一大額持倉（8.3%）也是一個潛在的懸頂風險。整體判斷：**短期拋壓仍重、但 7 月起趨緩；最大變數是需求端能不能跟上**。

## 六、WLD 到底有沒有實際用途？

誠實說：**目前實用性偏弱，以治理與生態功能為主。**

| 用途 | 現況 |
|---|---|
| 付 World Chain 手續費（gas） | 有，但鏈上實際活動規模有限 |
| World ID 付費機制（應用方用 WLD 付驗證費） | 2026 推出，是少數「真實需求」來源 |
| Mini Apps 生態內使用 | 進行中，規模尚小 |
| 治理投票 | 有，是主要功能之一 |
| 支付 / 轉帳 | World App 內有，但普及度有限 |

關鍵事實：World 官方白皮書自己坦言，**目前並沒有「必須用 WLD 才能取得的商品或服務」**，其主要功能是未來治理（來源：[CoinStats](https://coinstats.app/ai/a/investment-analysis-worldcoin-wld)、[Cube Exchange](https://www.cube.exchange/what-is/wld)）。而且 WLD **不是公司股權**，不代表 World 或 OpenAI 的利潤或所有權（來源：[Cube Exchange](https://www.cube.exchange/what-is/wld)）。

**未來潛力**：如果 World ID 付費機制真的跑起來、應用方大量用 WLD 付驗證費，需求才會有實質支撐。這是 WLD 從「治理代幣」走向「有真實需求代幣」的關鍵，但目前仍待驗證。

## 七、綜合結論

**優點**：題材強（AI 時代的真人驗證是真實需求）、創辦人光環（Sam Altman / OpenAI）、用戶規模已達近 1,800 萬驗證真人、有機構（Eightco）背書、World ID 整合 Tinder 等真實應用、7 月減半減輕長期拋壓。

**風險**：代幣需求與用戶成長嚴重脫節（白皮書自承無必須用途）、生物辨識的監理風險（西班牙、肯亞、巴西、南韓等多國已禁止或調查）、龐大解鎖供給帶來長期拋壓、Eightco 單一大戶持倉懸頂、WLD 非股權、價格從高點跌約 95% 顯示市場信心脆弱。

**短期觀察重點**：7 月 24 日減半後的拋壓變化、WLD 能否站穩；World ID 付費機制的實際採用數據；Tinder 試點 Q3 的條款是否帶動 WLD 需求。

**長期觀察重點**：World ID 用戶成長能否真正轉化為 WLD 需求（最核心）、監理是否擴大到歐美亞主要市場、World Chain 與 Mini Apps 生態能否做出真實使用量。

## 風險提醒

WLD 是一個敘事極強、但基本面（代幣真實需求）尚未兌現的高風險投機性資產，價格波動劇烈、已從高點下跌約 95%，且面臨重大監理不確定性。它不是公司股權，不代表任何利潤或所有權。若你考慮參與，無論是領空投或買進，都請只用無法承受損失也不影響生活的資金，並理解生物辨識驗證涉及的隱私考量。

*本文為知識與數據分享，以 2026 年 6 月最新公開資訊為基礎，所有數據已標註來源連結並區分事實與估計。內容不構成投資建議，加密資產價格波動劇烈、甚至可能歸零，數據與規則變動快速，請以各官方最新公告為準，投資前請自行研究（DYOR）並評估風險。*

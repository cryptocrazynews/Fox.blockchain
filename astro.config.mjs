import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import { SITE } from "./src/config.ts";

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  build: { format: "directory" },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          protocols: ["http", "https"],
          // 自家網域一律視為「站內」，就算寫成完整網址也不開新分頁
          test: (element) => {
            const href = element.properties?.href;
            if (typeof href !== "string") return false;
            // 相對路徑 (站內) 不處理
            if (!/^https?:\/\//i.test(href)) return false;
            // 指向自己網域的不處理 (站內)
            if (href.includes("fox-blockchain.com")) return false;
            // 其餘的 http(s) 連結 = 外部，開新分頁
            return true;
          },
        },
      ],
    ],
  },
});

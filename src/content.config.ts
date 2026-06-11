import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    // 一句話回答：40~60 字直接回答標題，AI 會優先抽這段
    answer: z.string().optional(),
    // 綁定平台 id（config.ts 的 PLATFORMS），文章會顯示該平台的優惠卡片
    platform: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    author: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    glyph: z.string().optional(),
  }),
});

export const collections = { posts };

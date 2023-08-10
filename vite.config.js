//构建工具 vite 配置

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "ts-super-web", // 生成输出的根目录。如果该目录存在，则会在生成之前将其删除。 默认文件夹名称为dist
  },
});

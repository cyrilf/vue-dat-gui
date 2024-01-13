import path from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    {
      name: "watch-public",
      buildStart() {
        this.addWatchFile(path.resolve(__dirname, "public/index.html"));
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: { "process.env.NODE_ENV": '"production"' },
  server: {
    open: false,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-dat-gui",
      formats: ["es"],
      fileName: "vue-dat-gui",
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ["vue"],
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

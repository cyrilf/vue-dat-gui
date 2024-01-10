import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  define: { "process.env.NODE_ENV": '"production"' },
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

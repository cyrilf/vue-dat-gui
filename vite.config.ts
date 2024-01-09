import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()], // to process SFC
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-dat-gui",
      fileName: "vue-dat-gui",
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ["vue"], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: "Vue",
        },
      },
    },
    // emptyOutDir: false, // to retain the types folder generated by tsc
  },
});

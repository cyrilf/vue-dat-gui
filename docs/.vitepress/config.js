const path = require("path");

module.exports = {
  title: "My Lib",
  description: "Just playing around.",
  themeConfig: {
    repo: "https://github.com/wuruoyun/vue-component-lib-starter",
    sidebar: [
      {
        text: "Introduction",
        children: [
          { text: "What is My Lib?", link: "/" },
          { text: "Getting Started", link: "/guide/" },
        ],
      },
      {
        text: "Components",
        children: [
          { text: "DatBoolean", link: "/components/dat-boolean" },
          { text: "DatGui", link: "/components/dat-gui" },
        ],
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        "vue-dat-gui": path.resolve(__dirname, "../../src"),
      },
      dedupe: ["vue"], // avoid error when using dependencies that also use Vue
    },
  },
  vue: {
    script: {
      defineModel: true,
    },
  },
};

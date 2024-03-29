import { App } from "vue";
import * as components from "./components";

const install = (app: App) => {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);
  }
};

export default { install };

export * from "./components";

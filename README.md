# vue-dat-gui

![vue-dat-gui](./public/vue-dat-gui.png)

> A Vue3 port of the popular [dat.GUI](https://github.com/dataarts/dat.gui) library.

This is a lightweight graphical user interface to change variables in Javascript (or Typescript).
Useful for all your demos or experimental codes.

## DEMO ✨

Check out the [demo page](https://cyrilf.github.io/vue-dat-gui/).

### Used by:

- [cyrilf/microbios](https://microbios.cyrilf.com/): Cellular automata simulation / [Github](https://github.com/cyrilf/microbios)
- ...
- _Feel free to submit a PR to add your website._

---

## INSTALL 💻

### Option 1 - Install from NPM

```
npm install --save @cyrilf/vue-dat-gui
```

Then the usage is:

```js
import { createApp } from "vue";
import VueDatGui from "@cyrilf/vue-dat-gui";
import "@cyrilf/vue-dat-gui/dist/style.css";

/* your code */
// ...

const app = createApp(App);
app.use(VueDatGui);

app.mount("#app");
```

### Option 2 - Instal via CDN file

In your head tag, include the following code:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@cyrilf/vue-dat-gui@latest/dist/style.css"
/>
<script type="module" lang="ts">
  import {
    createApp,
    computed,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
  import VueDatGui from "https://unpkg.com/@cyrilf/vue-dat-gui@latest/dist/vue-dat-gui.js";

  createApp({
    /*your code*/
  })
    .use(VueDatGui)
    .mount("#app");
</script>
```

---

## VERSIONS #️⃣

### Vue3

The [main branch](https://github.com/cyrilf/vue-dat-gui/tree/main) contains code for Vue3. It's refering to the tags `v1.x`.

### Vue2

The **deprecated** branch [vue2](https://github.com/cyrilf/vue-dat-gui/tree/vue2) is for Vue2 support. It's refering to the tags `v0.x`.
You can find the [README](https://github.com/cyrilf/vue-dat-gui/blob/4b7da19f9a6aef1e7c8b3fcfefabe9acb7b7f737/README.md) with all the required information for this version.

---

## USAGE 🖱️

You can always refer to the [public/index.html](https://github.com/cyrilf/vue-dat-gui/tree/main/public/index.html) file for the most up-to-date example of how to use it. _(keep in mind that this is a demo version using the CDN version of Vue and vue-dat-gui, so it's a bit different than the usage in your app)_.

The [demo page](https://cyrilf.github.io/vue-dat-gui/) is also available.

In your view:

```html
<div class="app">
  <DatGui
    closeText="Close controls"
    openText="Open controls"
    closePosition="bottom"
  >
    <DatColor v-model="background" label="Background" />
    <DatNumber v-model="titleFontSize" label="Title font-size" />
    <DatString v-model="title" label="Title" />
    <DatButton @click="triggerAlert" label="Trigger alert" />
    <DatFolder label="Picture">
      <DatSelect v-model="pictureUrl" :items="pictures" label="Picture" />
      <DatBoolean v-model="showPicture" label="Show Picture" />
      <DatFolder label="Box shadow">
        <DatNumber
          v-model="boxShadow.offsetX"
          :min="-100"
          :max="100"
          :step="1"
          label="Offset X"
        />
        <DatNumber
          v-model="boxShadow.offsetY"
          :min="-100"
          :max="100"
          :step="1"
          label="Offset Y"
        />
        <DatNumber
          v-model="boxShadow.blurRadius"
          :min="0"
          :max="100"
          :step="1"
          label="Blur radius"
        />
        <DatNumber v-model="boxShadow.spreadRadius" label="Spread radius" />
        <DatColor v-model="boxShadow.color" label="Color" />
      </DatFolder>
    </DatFolder>
  </DatGui>
</div>
```

In your javascript:

```js
// <script setup lang="ts">
import { computed, ref } from "vue";

const pictures = [
  {
    name: "forest",
    value:
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "mountain",
    value:
      "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "beach",
    value:
      "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
];

const background = ref("#cdeecc");
const titleColor = ref("#077d43");
const titleFontSize = ref(75);
const title = ref("vue-dat-gui");
const showPicture = ref(true);
const boxShadow = ref({
  offsetX: 27,
  offsetY: 27,
  blurRadius: 75,
  spreadRadius: 2,
  color: "rgba(3, 23, 6, 1)",
});

const pictureStyle = computed(() => {
  const { offsetX, offsetY, blurRadius, spreadRadius, color } = boxShadow.value;
  return {
    "box-shadow": `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`,
  };
});

const triggerAlert = () => alert("Yeah, you pressed it!");

let pictureUrl = ref(pictures[0].value);
const nextPicture = () => {
  const currentIndex = pictures.findIndex(
    (picture) => picture.value === pictureUrl.value
  );
  const nextIndex = (currentIndex + 1) % pictures.length;
  pictureUrl.value = pictures[nextIndex].value;
};
// </script>
```

### Deploy

```
./deploy
```

Feel free to open any Pull Request/Issues.

---

## THANKS 👌

- [dat.GUI](https://github.com/dataarts/dat.gui) for the initial project

<script setup lang="ts">
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
let pictureUrl = ref(pictures[0].value);
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
const nextPicture = () => {
  const currentIndex = pictures.findIndex(
    (picture) => picture.value === pictureUrl.value
  );
  const nextIndex = (currentIndex + 1) % pictures.length;
  pictureUrl.value = pictures[nextIndex].value;
};
</script>
<template>
  <div class="full" :style="{ 'background-color': background }">
    <h1 :style="{ color: titleColor, 'font-size': `${titleFontSize}px` }">
      {{ title }}
    </h1>
    <img
      :src="pictureUrl"
      alt="vue-dat-gui demo"
      :style="pictureStyle"
      v-show="showPicture"
    />
    <div>
      <input v-model="title" class="input-title" />
      <div class="input-note">Showcase of the 2-way data-binding</div>
    </div>
    <DatGui
      closeText="Close controls"
      openText="Open controls"
      closePosition="bottom"
    >
      <DatColor v-model="background" label="Background" />
      <DatColor v-model="titleColor" label="Title Color" />
      <DatNumber v-model="titleFontSize" label="Title font-size" />
      <DatString v-model="title" label="Title" />
      <DatButton @click="triggerAlert" label="Trigger alert" />
      <DatFolder label="Picture">
        <DatSelect v-model="pictureUrl" :items="pictures" label="Picture" />
        <DatBoolean v-model="showPicture" label="Show Picture" />
        <DatButton @click="nextPicture" label="Next picture" />
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
          <DatNumber
            v-model="boxShadow.spreadRadius"
            :min="0"
            :max="30"
            :step="1"
            label="Spread radius"
          />
          <DatColor v-model="boxShadow.color" label="Color" />
        </DatFolder>
      </DatFolder>
    </DatGui>
  </div>
</template>

<template>
  <div>
    <img :src="imgUrl" />
    <div>{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageTextButton",

  props: {
    title: String,
    imgUrl: String,
  },
});
</script>

<style scoped></style>

<template>
  <div v-bind:style="{ color: color || 'white' }">
    {{ address }} <BIconArrowDownShort />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddressSelectBtn",

  props: {
    address: String,
    color: String,
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>

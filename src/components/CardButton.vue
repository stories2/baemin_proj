<template>
  <div class="card-css">
    <div class="card-title">배민</div>
    <pre class="card-descript">
한 번에 한 집만
빠르게 배달해요!</pre
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.card-css {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 120px;
  margin-bottom: 15px;
  border-radius: 15px;
  border: 1px solid #f4f4f4;
  text-align: left;
  padding: 15px;
}

.card-title {
  font-weight: bold;
  font-family: "BaeminHannaPro";
  font-size: 1.2em;
}

.card-descript {
  max-width: 150px;
}
</style>

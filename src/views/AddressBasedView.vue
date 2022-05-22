<template>
  <div>
    <in-app-top-bar :address="'방이동'"></in-app-top-bar>
    <menu-nav-bar></menu-nav-bar>
    <ads-box></ads-box>
  </div>
</template>

<script lang="ts">
import InAppTopBar from "@/components/InAppTopBar.vue";
import MenuNavBar from "@/components/MenuNavBar.vue";
import AdsBox from "@/components/AdsBox.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InAppTopBar, MenuNavBar, AdsBox },
  name: "AddressBasedView",
});
</script>

<style scoped></style>

<template>
  <div>
    <in-app-top-bar :address="'방이동'"></in-app-top-bar>
    <menu-nav-bar></menu-nav-bar>
  </div>
</template>

<script lang="ts">
import InAppTopBar from "@/components/InAppTopBar.vue";
import MenuNavBar from "@/components/MenuNavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InAppTopBar, MenuNavBar },
  name: "AddressBasedView",
});
</script>

<style scoped></style>

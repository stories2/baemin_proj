<template>
  <div>
    <in-app-top-bar :address="'방이동'"></in-app-top-bar>
    <b-row>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import InAppTopBar from "@/components/InAppTopBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InAppTopBar },
  name: "AddressBasedView",
});
</script>

<style scoped></style>

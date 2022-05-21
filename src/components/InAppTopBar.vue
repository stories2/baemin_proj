<template>
  <b-row style="min-height: 48px">
    <b-col style="text-align: left">
      <span
        style="
          transform: translateY(50%);
          display: inline-block;
          font-size: 1.2em;
          font-weight: bold;
          cursor: pointer;
        "
      >
        <BIconArrowLeftShort />
      </span>
    </b-col>
    <b-col>
      <address-selector-btn
        style="transform: translateY(50%)"
        :address="address"
        :color="'black'"
      ></address-selector-btn>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddressSelectorBtn from "./AddressSelectorBtn.vue";

export default defineComponent({
  name: "InAppTopBar",

  components: {
    AddressSelectorBtn,
  },

  props: {
    address: String,
  },
});
</script>

<style scoped></style>

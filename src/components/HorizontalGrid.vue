<template>
  <div>
    <b-row>
      <b-col style="text-align: left">
        <h4>{{ title }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        style="
          text-align: left;
          white-space: nowrap;
          padding: 15px 0;
          overflow-y: scroll;
        "
      >
        <grid-item
          v-for="store in storeList"
          :key="store"
          :imgUrl="store.imgUrl"
          :storeName="store.storeName"
          :score="store.score"
          :deliveryMin="store.deliveryMin"
          :deliveryMax="store.deliveryMax"
          @click="onGridItemClicked(store)"
        ></grid-item>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridItem from "./GridItem.vue";
import { useDispath, useSelector } from "../helpers";
import { setLastEnteredStoreName } from "@/store";

export default defineComponent({
  name: "HorizontalGrid",
  props: {
    title: String,
    storeList: Array,
  },
  components: {
    GridItem,
  },

  data() {
    return {
      dispatch: useDispath(),
    };
  },

  methods: {
    onGridItemClicked(store: any) {
      console.log("store", store);
      this.$router.push(`/store/${store.crtfc_upso_mgt_sno}`);
    },
  },
});
</script>

<style scoped></style>

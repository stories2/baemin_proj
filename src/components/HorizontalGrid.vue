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
        <grid-item @click="onGridItemAppendClicked()"></grid-item>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridItem from "./GridItem.vue";
import { useDispath, useSelector } from "../helpers";
import { setStoreList } from "@/store";
import { DatabaseDao } from "@/lib/realtime-database";

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
      orders: useSelector((state) => state.orders),
    };
  },

  methods: {
    onGridItemClicked(store: any) {
      console.log("store", store);
      this.$router.push(`/store/${store.crtfc_upso_mgt_sno}`);
    },
    onGridItemAppendClicked() {
      // console.log("dsaf");
      // console.log(this.orders.recommendStoreList);
      this.loadFilteredStoreList(
        localStorage.getItem("region_2depth_name") || "중구",
        this.orders.recommendStoreList.length
      );
    },
    loadFilteredStoreList(region_2depth_name: string, offset: number) {
      const dao = new DatabaseDao();
      dao
        .getFoodShopFilterByAddress(region_2depth_name, offset)
        .then((storeList) => {
          console.log("test", storeList);
          this.dispatch(setStoreList({ storeListData: storeList }));
          // this.dispatch(setStoreList({ _storeList: storeList }));
        });
    },
  },
});
</script>

<style scoped></style>

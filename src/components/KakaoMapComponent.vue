<template>
  <b-row>
    <b-col style="position: relative">
      <div ref="kakaoMap" class="kakaoMap"></div>
      <p
        style="
          position: absolute;
          top: 0;
          z-index: 20;
          margin-left: 20px;
          margin-top: 20px;
        "
      >
        <b-button variant="light" @click="onGridItemAppendClicked()"
          >더 불러오기</b-button
        >
      </p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { AddressLatLong } from "@/interface/geo.model";
import { FoodStore } from "@/interface/order.model";
import { KakaoMap } from "@/lib/kakaomap";
import { defineComponent, PropType } from "vue";
import { useDispath, useSelector } from "../helpers";
import { setStoreList } from "@/store";
import { DatabaseDao } from "@/lib/realtime-database";

export default defineComponent({
  name: "KakaoMapComponent",
  props: {
    foodStoreList: {
      type: Object as PropType<FoodStore[]>,
      required: true,
    },
    addressGeoData: {
      type: Object as PropType<AddressLatLong>,
      required: true,
    },
  },

  watch: {
    foodStoreList: function (newVal) {
      //   console.log("asdfas", newVal);
      this.map.setMarkerList(this.foodStoreMarkerList);
      this.map.setCustomOverlayList(this.foodStoreListMapped);
    },
    addressGeoData: function (newVal: AddressLatLong) {
      console.log("addressGeoData", newVal);
      this.map.moveCenter(newVal.lat, newVal.long);
      this.map.setZoom(4);
    },
  },

  data() {
    return {
      map: {} as KakaoMap,
      dispatch: useDispath(),
      orders: useSelector((state) => state.orders),
    };
  },

  mounted() {
    this.map = new KakaoMap(
      this.$refs.kakaoMap,
      this.addressGeoData.lat ||
        Number(localStorage.getItem("lat") || 37.5666805),
      this.addressGeoData.long ||
        Number(localStorage.getItem("long") || 126.9784147),
      4,
      this.onMarkerClicked
    );
    this.map.setMarkerList(this.foodStoreMarkerList);
    this.map.setCustomOverlayList(this.foodStoreListMapped);
  },

  methods: {
    onMarkerClicked(item: FoodStore) {
      // console.log("item", item);
      this.$router.push(`/store/${item.crtfc_upso_mgt_sno}`);
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

  computed: {
    foodStoreMarkerList() {
      // console.log("ff", this.foodStoreList);
      return this.foodStoreList.map((store) => {
        return {
          lat: store.lat,
          lot: store.long,
          id: store.crtfc_upso_mgt_sno.toString(),
        };
      });
    },
    foodStoreListMapped(): FoodStore[] {
      return this.foodStoreList.map((store) => {
        return {
          ...store,
          idx: store.crtfc_upso_mgt_sno.toString(),
        } as FoodStore;
      });
    },
  },
});
</script>

<style scoped>
div.kakaoMap {
  width: 100%;
  height: 500px;
}
</style>

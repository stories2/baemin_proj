<template>
  <b-row>
    <b-col>
      <div ref="kakaoMap" class="kakaoMap"></div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { AddressLatLong } from "@/interface/geo.model";
import { FoodStore } from "@/interface/order.model";
import { KakaoMap } from "@/lib/kakaomap";
import { defineComponent, PropType } from "vue";

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
    };
  },

  mounted() {
    this.map = new KakaoMap(
      this.$refs.kakaoMap,
      this.addressGeoData.lat ||
        Number(localStorage.getItem("lat") || 37.5666805),
      this.addressGeoData.long ||
        Number(localStorage.getItem("long") || 126.9784147),
      4
    );
    this.map.setMarkerList(this.foodStoreMarkerList);
    this.map.setCustomOverlayList(this.foodStoreListMapped);
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

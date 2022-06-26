<template>
  <b-row>
    <b-col>
      <div ref="kakaoMap" class="kakaoMap"></div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
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
  },

  watch: {
    foodStoreList: function (newVal) {
      //   console.log("asdfas", newVal);
      this.map.setMarkerList(this.foodStoreMarkerList);
      this.map.setCustomOverlayList(this.foodStoreList);
    },
  },

  data() {
    return {
      map: {} as KakaoMap,
    };
  },

  mounted() {
    this.map = new KakaoMap(this.$refs.kakaoMap, 37.5666805, 126.9784147, 7);
    this.map.setMarkerList(this.foodStoreMarkerList);
    this.map.setCustomOverlayList(this.foodStoreList);
  },

  computed: {
    foodStoreMarkerList() {
      return this.foodStoreList.map((store) => {
        return {
          lat: store.lat,
          lot: store.long,
          id: store.idx,
        };
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

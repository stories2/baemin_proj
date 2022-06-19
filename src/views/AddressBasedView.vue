<template>
  <div>
    <in-app-top-bar :address="'방이동'" :url="'/'"></in-app-top-bar>
    <menu-nav-bar v-model:activeNav="activeNav"></menu-nav-bar>
    <template v-if="activeNav == '배민1'">
      <ads-box></ads-box>
      <section-card>
        <b-row>
          <b-col>
            <image-text-button
              v-for="menu in menuList"
              :key="menu"
              :title="menu.title"
              :imgUrl="menu.imgUrl"
            ></image-text-button>
          </b-col>
        </b-row>
      </section-card>
      <section-card style="margin-top: 15px">
        <horizontal-grid
          :title="'배민1에 새로 들어왔어요'"
          :storeList="orders.recommendStoreList"
        ></horizontal-grid>
      </section-card>
      <section-card>
        <store-big-card-grid
          :storeList="storeList"
          v-on:store-card-clicked="onStoreClicked"
        ></store-big-card-grid>
      </section-card>
    </template>
  </div>
</template>

<script lang="ts">
import InAppTopBar from "@/components/InAppTopBar.vue";
import MenuNavBar from "@/components/MenuNavBar.vue";
import AdsBox from "@/components/AdsBox.vue";
import ImageTextButton from "@/components/ImageTextButton.vue";
import SectionCard from "@/components/SectionCard.vue";
import HorizontalGrid from "@/components/HorizontalGrid.vue";
import StoreBigCardGrid from "@/components/StoreBigCardGrid.vue";
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import {
  selectStoreInfo,
  setFocusedStore,
  setLastEnteredStoreName,
} from "@/store";
import { FoodStore } from "@/interface/order.model";

export default defineComponent({
  components: {
    InAppTopBar,
    MenuNavBar,
    AdsBox,
    ImageTextButton,
    SectionCard,
    HorizontalGrid,
    StoreBigCardGrid,
  },
  name: "AddressBasedView",

  data() {
    return {
      activeNav: "배민1",
      orders: useSelector((state) => state.orders),
      recommendStoreList: useSelector((state) => state.orders).value
        .recommendStoreList,
      storeList: useSelector((state) => state.orders).value.storeList,
      dispatch: useDispath(),

      focusedStore: useSelector((state) => state.orders).value.focusedStore,
      menuList: [
        {
          title: "1인분",
          imgUrl: `${require("@/assets/finger.png")}`,
        },
        {
          title: "돈까스 회 일식",
          imgUrl: `${require("@/assets/sushi.png")}`,
        },
        {
          title: "중식",
          imgUrl: `${require("@/assets/buns.png")}`,
        },
        {
          title: "치킨",
          imgUrl: `${require("@/assets/chicken-leg.png")}`,
        },
        {
          title: "백반 죽 국수",
          imgUrl: `${require("@/assets/noodles.png")}`,
        },
        {
          title: "맛집랭킹",
          imgUrl: `${require("@/assets/ranking.png")}`,
        },
        {
          title: "카페 디저트",
          imgUrl: `${require("@/assets/cupcake.png")}`,
        },
        {
          title: "분식",
          imgUrl: `${require("@/assets/tokbokki.png")}`,
        },
        {
          title: "찜 탕 찌개",
          imgUrl: `${require("@/assets/hot-soup.png")}`,
        },
        {
          title: "피자",
          imgUrl: `${require("@/assets/pizza.png")}`,
        },
        {
          title: "양식",
          imgUrl: `${require("@/assets/spaghetti.png")}`,
        },
        {
          title: "고기 구이",
          imgUrl: `${require("@/assets/chop.png")}`,
        },
        {
          title: "족발 보쌈",
          imgUrl: `${require("@/assets/steak.png")}`,
        },
        {
          title: "아시안",
          imgUrl: `${require("@/assets/ramen.png")}`,
        },
        {
          title: "버거",
          imgUrl: `${require("@/assets/hamburger.png")}`,
        },
      ],
    };
  },

  methods: {
    onStoreClicked(storeData: FoodStore) {
      console.log("store", storeData);
      // console.log(this.dispatch(selectStoreInfo({ idx: storeData.idx })));
      // console.log("focusedStore", this.focusedStore);
      // this.dispatch(setFocusedStore({ storeData }));
    },
    onNavChanged(nav: string) {
      console.log("nav", nav);
    },
  },
});
</script>

<style scoped></style>

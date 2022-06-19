<template>
  <div>
    <ads-box>
      <in-app-top-bar :color="'white'"></in-app-top-bar>
    </ads-box>
    <b-row>
      <b-col>{{ foodStore.storeName }}</b-col>
    </b-row>
    <b-row>
      <b-col><BIconStarFill /> {{ foodStore.score }}</b-col>
    </b-row>
    <b-row>
      <b-col>최소주문 금액</b-col>
      <b-col>{{ foodStore.deliveryMin }}원</b-col>
    </b-row>
    <b-row v-if="foodStore.deliveryMax">
      <b-col>배달 팁</b-col>
      <b-col>{{ foodStore.deliveryMax }}원</b-col>
    </b-row>
    <!-- <b-row>
      <b-col>운영 상태</b-col>
      <b-col>14,000원</b-col>
    </b-row> -->

    <hr />
    <section-card>
      <b-row>
        <b-col>
          <h3>인기 메뉴</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="menu in foodStore.menuList"
          :key="menu"
          cols="12"
          md="6"
          lg="6"
          xl="4"
          style="margin-bottom: 15px"
        >
          <food-list-item
            :name="menu.name"
            :cost="menu.cost"
            :url="'https://picsum.photos/200/200?_t=' + menu.cost"
            v-on:onClicked="onMenuClicked"
          ></food-list-item>
        </b-col>
      </b-row>
    </section-card>

    <section-card>
      <b-row>
        <b-col>
          <h3>메인 메뉴</h3>
        </b-col>
      </b-row>
    </section-card>

    <floating-btn ref="floatingBtn" @click="test()"></floating-btn>

    <template v-if="startPoint && clickedMenu">
      <food-list-item-selected-anim
        :from="startPoint"
        :to="floatingBtnRect"
        :menu="clickedMenu"
        v-on:transitionend="onTranslateEnd"
      ></food-list-item-selected-anim>
    </template>
  </div>
</template>

<script lang="ts">
import { FoodMenu, FoodStore, OrderMenuModel } from "@/interface/order.model";
import { addMenu, requestPayment, setLastEnteredStoreName } from "@/store";
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import AdsBox from "@/components/AdsBox.vue";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";
import FoodListItem from "@/components/FoodListItem.vue";
import FloatingBtn from "@/components/FloatingBtn.vue";
import FoodListItemSelectedAnim from "@/components/FoodListItemSelectedAnim.vue";
import { Rect } from "@popperjs/core";

export default defineComponent({
  components: {
    InAppTopBar,
    AdsBox,
    SectionCard,
    FoodListItem,
    FloatingBtn,
    FoodListItemSelectedAnim,
  },
  data() {
    return {
      dispatch: useDispath(),
      orders: useSelector((state) => state.orders),
      currentStore: useSelector((state) => state.orders).value.focusedStore,
      recommendStoreList: useSelector((state) => state.orders).value
        .recommendStoreList,

      menuList: [
        {
          name: "김치찜",
          cost: 24000,
        },
        {
          name: "계란찜",
          cost: 5000,
        },
      ],

      startPoint: null,
      clickedMenu: {} as FoodMenu,
    };
  },
  mounted() {
    console.log("mounted", this.floatingBtnRect, this.foodStore);
    this.dispatch(
      setLastEnteredStoreName({ storeName: this.foodStore.storeName })
    );
  },

  computed: {
    foodStore(): FoodStore {
      const storeIdx = this.$route.params.storeIdx;
      if (!storeIdx) {
        console.warn(`[StoreView] [foodStore] storeidx is null`);
        return {} as FoodStore;
      }
      const foodStore = this.recommendStoreList.find(
        (i) => i.crtfc_upso_mgt_sno == storeIdx
      );
      console.warn(
        `[StoreView] [foodStore] testing`,
        storeIdx,
        typeof storeIdx,
        this.recommendStoreList.length,
        this.recommendStoreList.map((i) => i.crtfc_upso_mgt_sno)
      );
      // const foodStore = this.currentStore;
      if (!foodStore) {
        console.warn(
          `[StoreView] [foodStore] cannot find foodstore`,
          storeIdx,
          this.recommendStoreList.length,
          this.recommendStoreList.map((i) => i.crtfc_upso_mgt_sno)
        );
        return {} as FoodStore;
      }
      return foodStore;
    },

    floatingBtnRect(): Rect {
      const rect = (this.$refs.floatingBtn as any).$el.getBoundingClientRect();
      return {
        left: Number(rect.x),
        top: Number(rect.top),
        width: Number(rect.width),
        height: Number(rect.height),
      } as unknown as Rect;
    },
  },

  methods: {
    onTranslateEnd() {
      this.startPoint = null;
      this.clickedMenu = {} as FoodMenu;
    },
    onMenuClicked(menu: any) {
      if (!this.startPoint) {
        const { name: menuName, cost, url, el } = menu;
        console.log("asdf", menuName, cost, el.getBoundingClientRect());
        this.clickedMenu = {
          name: menuName,
          cost,
          url,
        } as FoodMenu;
        this.startPoint = el.getBoundingClientRect();
        this.dispatch(
          addMenu({
            name: menuName,
            cost,
            url,
          } as OrderMenuModel)
        );
      }
    },

    test() {
      this.dispatch(
        requestPayment({
          cost: 14900,
        })
      );
    },
  },
});
</script>

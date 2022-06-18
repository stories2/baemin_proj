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
            @click="onMenuClicked(menu.name, menu.cost)"
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

    <floating-btn @click="test()"></floating-btn>
  </div>
</template>

<script lang="ts">
import { FoodStore, OrderMenuModel } from "@/interface/order.model";
import { addMenu, requestPayment } from "@/store";
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import AdsBox from "@/components/AdsBox.vue";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";
import FoodListItem from "@/components/FoodListItem.vue";
import FloatingBtn from "@/components/FloatingBtn.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    AdsBox,
    SectionCard,
    FoodListItem,
    FloatingBtn,
  },
  data() {
    return {
      dispatch: useDispath(),
      orders: useSelector((state) => state.orders),
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
    };
  },
  mounted() {
    console.log("mounted");
  },

  computed: {
    foodStore(): FoodStore {
      const storeIdx = this.$route.params.storeIdx;
      if (!storeIdx) {
        console.warn(`[StoreView] [foodStore] storeidx is null`);
        return {} as FoodStore;
      }
      const foodStore = this.recommendStoreList.find((i) => i.idx === storeIdx);
      if (!foodStore) {
        console.warn(`[StoreView] [foodStore] cannot find foodstore`);
        return {} as FoodStore;
      }
      return foodStore;
    },
  },

  methods: {
    onMenuClicked(menuName: string, cost: number) {
      console.log("asdf", menuName, cost);
      this.dispatch(
        addMenu({
          name: menuName,
          cost,
        } as OrderMenuModel)
      );
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

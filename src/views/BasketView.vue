<template>
  <div style="text-align: left">
    <in-app-top-bar :address="'장바구니'"></in-app-top-bar>
    <!-- <div>장바구니 {{ orderList.length }}</div>
    <ul>
      <li v-for="order in orderList" v-bind:key="order.name">
        {{ order.name }}
      </li>
    </ul> -->
    <section-card>
      <b-row>
        <b-col>
          <h4>하루엔소쿠 길동점</h4>
        </b-col>
      </b-row>
      <hr />
      <b-row style="margin-bottom: 15px">
        <b-col>
          <div>치즈카츠(첫주문추천메뉴)</div>
        </b-col>
        <b-col>
          <BIconXLg />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <div class="food-img"></div>
        </b-col>
        <b-col>
          <b-row>
            <b-col>가격: 단품 (13,000원)</b-col>
          </b-row>
          <b-row>
            <b-col style="font-weight: bold">13,000원</b-col>
          </b-row>
        </b-col>
      </b-row>
    </section-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    SectionCard,
  },
  data() {
    return {
      orderList: useSelector((state) => state.orders).value.orderList,
    };
  },

  mounted() {
    console.log(
      "test",
      useSelector((state) => state.orders)
    );
  },
});
</script>

<style scoped>
div.food-img {
  background-image: url("https://www.beginmate.com/Upload/TextEditor/microsoftgithublove.jpg");
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
}

@media (min-width: 768px) {
  div.food-img {
    width: 150px;
    height: 150px;
  }
}
</style>

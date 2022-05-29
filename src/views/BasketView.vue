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
      <b-row>
        <b-col cols="12" lg="6" style="margin-bottom: 15px">
          <basket-item></basket-item>
        </b-col>
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
        </b-col>
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
        </b-col>
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
        </b-col>
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
        </b-col>
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
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
import BasketItem from "@/components/BasketItem.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    SectionCard,
    BasketItem,
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

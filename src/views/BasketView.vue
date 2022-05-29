<template>
  <div>
    <in-app-top-bar :address="'장바구니'"></in-app-top-bar>
    <!-- <div>장바구니 {{ orderList.length }}</div>
    <ul>
      <li v-for="order in orderList" v-bind:key="order.name">
        {{ order.name }}
      </li>
    </ul> -->
    <section-card style="text-align: left">
      <b-row>
        <b-col>
          <h4>하루엔소쿠 길동점</h4>
        </b-col>
      </b-row>
      <hr />
      <b-row>
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
        <b-col cols="12" lg="6">
          <basket-item></basket-item>
        </b-col>
      </b-row>
      <hr />
      <b-row style="text-align: center; font-weight: bold">
        <b-col> <BIconPlusLg /> 더 담으러 가기 </b-col>
      </b-row>
    </section-card>

    <section-card>
      <b-row>
        <b-col cols="12" md="6">
          <pay-col :text="'총 주문금액'" :cost="12000"></pay-col>
        </b-col>
        <b-col cols="12" md="6">
          <pay-col :text="'배달팁'" :cost="2900"></pay-col>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col>
          <pay-col
            :text="'결제예정금액'"
            :cost="14900"
            :isBold="true"
          ></pay-col>
        </b-col>
      </b-row>
    </section-card>

    <b-row>
      <b-col style="height: 50px"></b-col>
    </b-row>

    <b-row align-h="end">
      <b-col style="text-align: right" cols="12" md="6" lg="3">
        <b-button class="payment-btn">14900원 배달 주문하기</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col style="height: 50px"></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";
import InAppTopBar from "@/components/InAppTopBar.vue";
import SectionCard from "@/components/SectionCard.vue";
import BasketItem from "@/components/BasketItem.vue";
import PayCol from "@/components/PayCol.vue";

export default defineComponent({
  components: {
    InAppTopBar,
    SectionCard,
    BasketItem,
    PayCol,
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
.payment-btn {
  width: 100%;
  background-color: #2ac1bc;
  border-color: #2ac1bc;
  font-weight: bold;
}
</style>

<template>
  <div>
    <div>장바구니 {{ orderList.length }}</div>
    <ul>
      <li v-for="order in orderList" v-bind:key="order.name">
        {{ order.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";

export default defineComponent({
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

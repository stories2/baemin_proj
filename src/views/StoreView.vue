<template>
  <div>
    <b-row>
      <b-col>매장 정보 {{ orders.orderList.length }}</b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button @click="onMenuClicked('참치 마요')">참치 마요</b-button>
      </b-col>
      <b-col>
        <b-button @click="onMenuClicked('라멘')">라멘</b-button>
      </b-col>
      <b-col>
        <b-button @click="onMenuClicked('햄버거')">햄버거</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { OrderMenuModel } from "@/interface/order.model";
import { addMenu } from "@/store";
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";

export default defineComponent({
  data() {
    return {
      dispatch: useDispath(),
      orders: useSelector((state) => state.orders),
    };
  },
  mounted() {
    console.log("mounted");
  },

  methods: {
    onMenuClicked(menuName: string) {
      this.dispatch(
        addMenu({
          name: menuName,
        } as OrderMenuModel)
      );
    },
  },
});
</script>

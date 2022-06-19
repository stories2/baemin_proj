<template>
  <div class="btn-container" @click="$router.push('/basket')">
    <BIconHandbag />
    <b-badge variant="light" class="notify-cnt">
      {{ orders.orderList.length }}
    </b-badge>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDispath, useSelector } from "../helpers";

export default defineComponent({
  name: "FloatingBtn",

  data() {
    return {
      orders: useSelector((state) => state.orders),
    };
  },
});
</script>

<style scoped>
div.btn-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 72px;
  height: 72px;
  background-color: #2ac1bc;
  color: white;
  line-height: 66px;
  border-radius: 36px;
  font-size: 30px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  cursor: pointer;
}

.notify-cnt {
  position: absolute;
  transform: scale(0.75);
  right: -8px;
  top: -8px;
  border-radius: 0.75em;
}
</style>

<template>
  <div>
    <food-list-item
      id="fffff"
      :name="menu.name"
      :cost="menu.cost"
      :url="menu.url"
      style="position: fixed; opacity: 0.9; transition: transform linear 1.5s"
      v-bind:style="translateAnim"
      v-on:transitionend="$emit('transitionend')"
    ></food-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import FoodListItem from "@/components/FoodListItem.vue";
import { Rect } from "../interface/box.model";
import { FoodMenu } from "@/interface/order.model";

//   v-bind:style="{
//     backgroundImage: `url(${
//       img1 ||
//       'https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png'
//     })`,
//   }"
export default defineComponent({
  name: "FoodListItemSelectedAnim",

  components: {
    FoodListItem,
  },

  props: {
    from: {
      type: Object as PropType<Rect>,
      required: true,
    },
    to: {
      type: Object as PropType<Rect>,
      required: true,
    },
    menu: {
      type: Object as PropType<FoodMenu>,
      required: true,
    },
  },

  data() {
    return {
      transform: {
        left: 0,
        top: 0,
        width: this.from.width,
        height: this.from.height,
      } as Rect,
    };
  },

  mounted() {
    console.log("[afsdafas] from", this.from, "to", this.to);
    setTimeout(() => {
      this.transform.left = this.to.left - this.from.left;
      this.transform.top = this.to.top - this.from.top;
      console.log("sadfas", this.transform);
    }, 100);
  },

  computed: {
    translateAnim() {
      console.log("this. to", this.from, "to", this.to);
      return {
        transform:
          "translate(" +
          this.transform.left +
          "px, " +
          this.transform.top +
          "px)",
        left: this.from.left + "px",
        top: this.from.top + "px",
        width: this.from.width + "px",
        height: this.from.height + "px",
      };
    },
  },
});
</script>

<style scoped></style>

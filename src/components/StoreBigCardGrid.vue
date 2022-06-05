<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="6"
        lg="4"
        v-for="store in storeListConverted"
        :key="store"
      >
        <store-big-card
          :img1="store.img1"
          :img2="store.img2"
          :img3="store.img3"
          :name="store.name"
          @click="onStoreCardClicked(store)"
        ></store-big-card>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import StoreBigCard from "./StoreBigCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreBigCardGrid",
  components: {
    StoreBigCard,
  },

  props: {
    storeList: Array,
  },

  methods: {
    onStoreCardClicked(store: any) {
      this.$emit("store-card-clicked", store);
    },
  },

  computed: {
    storeListConverted() {
      return (this.storeList || []).map((store: any) => {
        return {
          img1: store.imgList[0],
          img2: store.imgList[1],
          img3: store.imgList[2],
          name: store.name,
          idx: store.idx,
        };
      });
    },
  },
});
</script>

<style scoped></style>

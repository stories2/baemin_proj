<template>
  <div v-bind:style="{ color: color || 'white' }">
    {{ addrStr }}
    <BIconArrowDownShort
      v-if="addrStr !== '장바구니'"
      @click="onArrowBtnClicked()"
      v-b-modal.addressModal
    />
    <AddressModal
      ref="addressModalComponent"
      v-on:address-load="onAddressLoaded"
    ></AddressModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddressModal from "./AddressModal.vue";
import { KakaoMap } from "../lib/kakaomap";
import { DatabaseDao } from "../lib/realtime-database";
import { useDispath, useSelector } from "../helpers";
import { setStoreList } from "@/store";

export default defineComponent({
  name: "AddressSelectBtn",

  components: {
    AddressModal,
  },

  props: {
    address: String,
    color: String,
  },

  data() {
    return {
      addrStr: this.address,
      dispatch: useDispath(),
    };
  },

  // onMounted() {},

  methods: {
    onArrowBtnClicked() {
      (this.$refs as any).addressModalComponent.showModal();
    },

    onAddressLoaded(addressInfo: any) {
      console.log("addressInfo", addressInfo);
      const dao = new DatabaseDao();
      dao
        .getFoodShopFilterByAddress(addressInfo.region_2depth_name)
        .then((storeList) => {
          // console.log("test", storeList);
          setStoreList({ storeList });
        });
      this.addrStr = `${addressInfo.region_1depth_name} ${addressInfo.region_2depth_name} ${addressInfo.region_3depth_name}`;
    },
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>

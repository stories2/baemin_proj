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
      region_2depth_name: "",
      dispatch: useDispath(),
    };
  },

  mounted() {
    this.loadLastLocation();
    this.loadFilteredStoreList(this.region_2depth_name);
  },

  methods: {
    onArrowBtnClicked() {
      (this.$refs as any).addressModalComponent.showModal();
    },

    saveLastLocation(address: string, region_2depth_name: string) {
      localStorage.setItem("addressFull", address);
      localStorage.setItem("region_2depth_name", region_2depth_name);
    },

    loadLastLocation() {
      this.addrStr =
        localStorage.getItem("addressFull") || "서울 송파구 방이동";
      this.region_2depth_name =
        localStorage.getItem("region_2depth_name") || "송파구";
      console.log("add", this.addrStr, this.region_2depth_name);
    },

    loadFilteredStoreList(region_2depth_name: string) {
      const dao = new DatabaseDao();
      dao.getFoodShopFilterByAddress(region_2depth_name).then((storeList) => {
        console.log("test", storeList);
        this.dispatch(setStoreList({ storeListData: storeList }));
        // this.dispatch(setStoreList({ _storeList: storeList }));
      });
    },

    onAddressLoaded(addressInfo: any) {
      console.log("addressInfo", addressInfo);
      this.loadFilteredStoreList(addressInfo.region_2depth_name);
      this.addrStr = `${addressInfo.region_1depth_name} ${addressInfo.region_2depth_name} ${addressInfo.region_3depth_name}`;
      this.saveLastLocation(this.addrStr, addressInfo.region_2depth_name);
    },
  },
});
</script>

<style scoped>
div {
  cursor: pointer;
}
</style>

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
    };
  },

  // onMounted() {},

  methods: {
    onArrowBtnClicked() {
      (this.$refs as any).addressModalComponent.showModal();
    },

    onAddressLoaded(addressInfo: any) {
      console.log("addressInfo", addressInfo);
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

<template>
  <div>
    <!-- <b-button v-b-modal.addressModal>Launch demo modal</b-button> -->

    <div id="map" ref="map" style="display: hidden"></div>
    <b-modal ref="addressModal" id="addressModal" title="주소 설정" hide-footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <b-form-input
              v-model="address"
              placeholder="지번, 도로명으로 검색"
              @keydown.enter="submitAddressSearch"
            ></b-form-input>
          </div>
        </div>
        <div
          class="row"
          style="margin-top: 15px; cursor: pointer"
          @click="getUserLocation()"
        >
          <div class="col"><BIconGeo /> 현재 위치로 설정</div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { AddressLatLong } from "@/interface/geo.model";
import { defineComponent } from "vue";
import { KakaoMap } from "../lib/kakaomap";
import { Permission } from "../lib/permission";

export default defineComponent({
  name: "AddressModal",

  data() {
    return {
      address: "",
      kakaoMap: {},
    };
  },

  mounted() {
    this.kakaoMap = new KakaoMap(this.$refs.map, 33.450701, 126.570667, 3);
  },

  methods: {
    submitAddressSearch() {
      let result: AddressLatLong = {} as AddressLatLong;
      (this.kakaoMap as any)
        .addressSearch(this.address)
        .then((addrResponse: any) => {
          console.log("asdf", addrResponse);
          if (addrResponse.status == "OK" && addrResponse.result.length > 0) {
            console.log(addrResponse.result[0]);
            return addrResponse.result[0];
          } else {
            throw new Error("Empty response");
          }
        })
        .then((addrInfo: any) => {
          return (this.kakaoMap as any).coord2RegionCode({
            lat: addrInfo.y,
            long: addrInfo.x,
          });
        })
        .then((res: any) => {
          console.log("res", res);
          if (res && res.length > 0) {
            const address = res[0].address;
            result = {
              ...result,
              ...address,
            };
            // address_name: "서울 송파구 방이동 208-2"
            // lat: 37.5095994
            // long: 127.1240497
            // main_address_no: "208"
            // mountain_yn: "N"
            // region_1depth_name: "서울"
            // region_2depth_name: "송파구"
            // region_3depth_name: "방이동"
            // sub_address_no: "2"
            // zip_code: ""
            console.log(result);
            this.$emit("address-load", result);

            this.address = `${result.region_1depth_name} ${result.region_2depth_name} ${result.region_3depth_name}`;
          } else {
            throw new Error("Cannot get user address info");
          }
        })
        .catch((err: any) => {
          console.error("[AddressModal] [submitAddressSearch] ", err);
        });
    },
    showModal() {
      console.log((this.$refs as any).addressModal);
      //   (this.$refs as any).addressModal.show();
    },
    hideModal() {
      //   (this.$refs as any).addressModal.hide();
    },
    getUserLocation() {
      let result: AddressLatLong = {} as AddressLatLong;
      const per = new Permission();
      //   => {
      //     if (pos) {
      //       this.$emit("location", pos.coords);
      //     } else {
      //       this.$emit("location", null);
      //     }
      //   }
      per
        .getLocationAutomatically()
        .then((pos: any) => {
          console.log("pos", pos);
          if (pos) {
            result.lat = pos.latitude;
            result.long = pos.longitude;
            return (this.kakaoMap as any).coord2RegionCode({
              lat: pos.latitude,
              long: pos.longitude,
            });
          }
          return null;
        })
        .then((res) => {
          console.log("res", res);
          if (res && res.length > 0) {
            const address = res[0].address;
            result = {
              ...result,
              ...address,
            };
            // address_name: "서울 송파구 방이동 208-2"
            // lat: 37.5095994
            // long: 127.1240497
            // main_address_no: "208"
            // mountain_yn: "N"
            // region_1depth_name: "서울"
            // region_2depth_name: "송파구"
            // region_3depth_name: "방이동"
            // sub_address_no: "2"
            // zip_code: ""
            console.log(result);
            this.$emit("address-load", result);

            this.address = `${result.region_1depth_name} ${result.region_2depth_name} ${result.region_3depth_name}`;
          } else {
            throw new Error("Cannot get user address info");
          }
        })
        .catch((err) => {
          console.error("[AddressModal] [getUserLocation] ", err);
        });
    },
  },
});
</script>

<style scoped></style>

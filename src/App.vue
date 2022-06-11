<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basket">Basket</router-link> |
    <router-link to="/store">Store</router-link>
  </nav> -->
  <b-container class="bv-example-row">
    <router-view />
  </b-container>
  <div ref="map" style="width: 500px; height: 400px"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { initPayment } from "@/store";
import { useDispath } from "./helpers";

export default defineComponent({
  name: "App",

  data() {
    return {
      dispatch: useDispath(),
    };
  },

  mounted() {
    this.dispatch(initPayment({}));
    var container = this.$refs.map; //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new (window as any).kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  /* https://www.woowahan.com/fonts */
  /* https://www.woowahan.com/fonts/license */
  font-family: "BaeminHannaPro";
  src: local("BaeminHannaPro"), url(./assets/BMHANNAPro.ttf) format("truetype");
}
</style>

<template>
  <div style="margin: 5px 0">
    <b-row>
      <b-col
        style="
          text-align: left;
          white-space: nowrap;
          overflow-y: scroll;
          padding: 15px 0;
        "
      >
        <nav-bar-btn :title="'asfads'" :isActive="true"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
        <nav-bar-btn :title="'asfads'"></nav-bar-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarBtn from "./NavBarBtn.vue";

export default defineComponent({
  name: "MenuNavBar",

  components: {
    NavBarBtn,
  },
});
</script>

<style scoped></style>

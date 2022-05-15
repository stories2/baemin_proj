<template>
  <div>
    <div class="top-bar">
      <b-row style="margin-bottom: 15px">
        <b-col style="text-align: start">
          <BIconBell />
        </b-col>
        <b-col> 방이동 <BIconArrowDownShort /></b-col>
        <b-col style="text-align: end">
          <BIconGrid />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <BIconSearch />
            </b-input-group-prepend>
            <b-form-input
              type="search"
              placeholder="Search terms"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
    <div style="margin-top: 15px">
      <b-row>
        <b-col cols="3" v-for="card in cardList" v-bind:key="card">
          <CardButton></CardButton>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardButton from "../components/CardButton.vue";
// import { BIconBatteryFull } from "bootstrap-icons-vue";

export default defineComponent({
  components: {
    // BIconBatteryFull,
    CardButton,
  },

  data() {
    return {
      cardList: [1, 2, 3, 4, 5, 6],
    };
  },
});
</script>

<style scoped>
.top-bar {
  background-color: #2ac1bc;
  height: 100px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: white;
  padding: 15px;
}
</style>

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
        <template v-for="card in cardList" v-bind:key="card">
          <b-col
            :cols="card.col"
            :sm="card.sm"
            :md="card.md"
            :lg="card.lg"
            :xl="card.xl"
          >
            <CardButton :title="card.title" :msg="card.msg"></CardButton>
          </b-col>
        </template>
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
      cardList: [
        {
          title: "배민",
          msg: "한 번에 한 집만\n\
빠르게 배달해요!",
          col: 6,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 3,
        },
        {
          title: "배달",
          msg: "세상은 넗고\n\
맛집은 많다",
          col: 6,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 3,
        },
        {
          title: "포장",
          msg: "가까운 가게는 직접 가지러 가지요",
          col: 12,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
        },
        {
          title: "B마트",
          msg: "장보기도 \n\
즉시 배달",
          col: 6,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 3,
        },
        {
          title: "밀키트/간편식",
          msg: "뚝딱 만드는 \n\
근사한 한끼",
          col: 6,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 3,
        },
        {
          title: "배민스토어",
          msg: "꾸까의 예쁜 꽃을 바로 배달!",
          col: 12,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
        },
      ],
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

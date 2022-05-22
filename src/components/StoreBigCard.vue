<template>
  <div class="store-card">
    <table>
      <tr>
        <td rowspan="2" style="width: 70%" class="img1"></td>
        <td style="width: 30%" class="img2"></td>
      </tr>
      <tr>
        <td class="img3"></td>
      </tr>
    </table>
    <div>
      <div>미분당 길동점</div>
      <div>최소주문 ~</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreBigCard",
});
</script>

<style scoped>
.img1 {
  background-image: url("http://cdn.cnn.com/cnnnext/dam/assets/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: 15px;
}
.img2 {
  background-image: url("https://www.kworldnow.com/wp-content/uploads/2020/08/korean-food-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 15px;
}
.img3 {
  background-image: url("https://i.pinimg.com/originals/c8/94/31/c89431717459c8a63fbfcc92e47085a8.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

table {
  width: 100%;
  height: 150px;
}

div.store-card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>

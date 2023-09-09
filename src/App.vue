//根组件 //使用
<template>
  <!-- 外边框 -->
  <div class="ou">
    <!-- 里边框 -->
    <div class="in">
      <ex1 />
      <ex2 />
      <ex3 />
      <ex4 />
      <ex5 />
      <ex6 />
      <ex7 />
      <ex8 />
      <ex9 />
      <ex10 />
      <ex11 />
      <ex12 />
    </div>
  </div>
</template>

//引入
<script setup>
import ex1 from "./components/ex1_count.vue";
import ex2 from "./components/ex2_mock_axios.vue";
import ex3 from "./components/ex3_login_rs.vue";
import ex4 from "./components/ex4_axios_network.vue";
import ex5 from "./components/ex5_testVue.vue";
import ex6 from "./components/ex6_global.vue";
import ex7 from "./components/ex7_pinia.vue";
import ex8 from "./components/ex8_maodian.vue";
import ex9 from "./components/ex9_yeneitiaozhuan.vue";
import ex10 from "./components/ex10_ceshijindutiao.vue";
import ex11 from "./components/ex11_elui-dialog.vue";
import ex12 from "./components/ex12_.vue";
</script>

<style scoped>
.ou {
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.in {
  width: 98%;
  margin: auto;
}
</style>

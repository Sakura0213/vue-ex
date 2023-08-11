<template>
  <BaseFooter title="7.测试 Pinia (复刻ex1)"></BaseFooter>
  <el-button class="button" @click="countNum">{{ counter.count }}</el-button>
  <el-button class="button" @click="counter.increment()">{{
    counter.count
  }}</el-button>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";
//不加{}报错,因为导出时不是 export default useCounterStore,不是唯一
//export default 时可以在 import 重命名 from
//export 重命名为 import { useCounterStore as uscs } from
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

function countNum() {
  ++counter.count; //直接使用，不用.value
}
</script>

<style scoped>
.button {
  width: 100px;
}
</style>

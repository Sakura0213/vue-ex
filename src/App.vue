<template>
  <el-button @click="countNum">{{ num }}</el-button>
</template>

<script setup>
import { ref } from "vue";

const num = ref(0);

function countNum() {
  ++num.value;
}
</script>

<template>
  <BaseFooter title="10.测试进度条"></BaseFooter>
  <div>
    <el-progress :percentage="progress"></el-progress>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElProgress } from 'element-plus';
import BaseFooter from "./BaseFooter.vue";

const progress = ref(0);

onMounted(() => {
  
  setInterval(() => {
    progress.value += 10;
    if (progress.value >= 100) {
      progress.value = 0;
    }
  }, 1000);
});
</script>

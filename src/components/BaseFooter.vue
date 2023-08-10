<template>
  <div class="background">
    <el-divider />
    <h4>{{ title }}</h4>
    <el-divider />
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.background {
  background-color: #f8f7f7;
}
</style>

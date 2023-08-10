//分隔每个 ex ，父组件引用子组件时，在 template 中附带的参数可由子组件通过 defineProps() 获取，最后渲染到子组件的模板中

<template>
  <div class="background">
    <el-divider />
    <h4>{{ title }}</h4>
    <el-divider />
  </div>
</template>

<script setup>
defineProps({
  title: String,//传参需要定义类型，typescript
});
</script>

<style scoped>
.background {
  background-color: #f8f7f7;
}
</style>

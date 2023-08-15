<template>
  <BaseFooter title="9.页内跳转"></BaseFooter>
  <div>
    <el-button :disabled="isButtonDisabled" @click="scrollToSection('section1')"
      >Section 1</el-button
    >
    <el-button :disabled="isButtonDisabled" @click="scrollToSection('section2')"
      >Section 2</el-button
    >
    <el-button :disabled="isButtonDisabled" @click="scrollToSection('section3')"
      >Section 3</el-button
    >
    <el-button @click="setStatus">{{ show }}</el-button>

    <div v-show="status">
      <div id="section1" class="section">Section 1</div>
      <div id="section2" class="section">Section 2</div>
      <div id="section3" class="section">Section 3</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseFooter from "./BaseFooter.vue";

const status = ref(false);
const show = ref("显示");
const isButtonDisabled = ref(true);

function setStatus() {
  if (status.value === false) {
    isButtonDisabled.value = false;
    status.value = true;
    show.value = "隐藏";
  } else {
    isButtonDisabled.value = true;
    status.value = false;
    show.value = "显示";
    //修改url，实际url中的#section还在
    history.replaceState(null, null, window.location.pathname);
  }
}

function scrollToSection(sectionId) {
  window.location.hash = sectionId;
}

onMounted(() => {
  //在Vue中，如果URL地址没有发生改变，刷新网页不会触发onMounted方法。看看后续有没有解决的方法
  const hash = window.location.hash;
  if (hash) {
    //如果url中已经存在锚点，则默认将三个框框显示出来并进行锚点跳转
    setStatus();
    const section = document.querySelector(hash);
    if (section) {
      scrollToSection(section.id);
    }
  }
});
</script>

<style scoped>
.section {
  height: 500px;
  margin-bottom: 20px;
  border: 1px solid black;
}
</style>

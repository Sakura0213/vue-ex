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

    <div v-if="status">
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

const scrollToSection = (sectionId) => {
  window.location.hash = sectionId;
};

onMounted(() => {
  const hash = window.location.hash;
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView();
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

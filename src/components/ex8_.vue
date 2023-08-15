<template>
  <BaseFooter title="8.页内跳转"></BaseFooter>
   <div>
    <h1>{{ heading }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
import { ref,onMounted} from "vue";
import BaseFooter from "./BaseFooter.vue";

const heading = ref('')
const content = ref('')

onMounted(() => {
  const hash = window.location.hash
  if (hash === '#about') {
    heading.value = 'About Us'
    content.value = 'This is the about page content.'
  } else if (hash === '#contact') {
    heading.value = 'Contact Us'
    content.value = 'This is the contact page content.'
  } else {
    heading.value = 'Home'
    content.value = 'Welcome to our website!'
  }
})
</script>

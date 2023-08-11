// stores/counter.js

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

/*不使用组合式api要写state、action

// stores/counter.js
import { defineStore } from "pinia";


export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});

*/

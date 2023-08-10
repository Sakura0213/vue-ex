import { createApp } from "vue";//引入 创建应用实例 方法
import App from "./App.vue";//引入 根组件

import axios from "./axios/axiosInstance.js";//引入 axios
import "./mock/mockAllocation";//引入 mock
import ElementPlus from "element-plus";//引入 element-plus 
import "element-plus/dist/index.css";//引入 element-plus 的 css


//createApp(App).mount('#app')  初始

const app = createApp(App);//由根组件 App 创建一个实例

app.config.globalProperties.$axios = axios;//配置 axios 的全局引用
//注入 element-plus
app.use(ElementPlus);


//将这个 app 实例挂载到 index.html 中的 id="app" 元素上
app.mount("#app"); 

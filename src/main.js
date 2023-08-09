import { createApp } from "vue";
import App from "./App.vue";

//引入 axios
import axios from "@/plugins/axiosInstance.js";
//引入 mock
import "./mock/";
//引入 element-plus 和 它的 css
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


//createApp(App).mount('#app')  原始
//对根组件 "./App.vue" 创建一个 app 实例
const app = createApp(App);


//配置 axios 的全局引用
app.config.globalProperties.$axios = axios;
//注入 element-plus
app.use(ElementPlus);


//将这个 app 实例挂载到 index.html 中的 id="app" 元素上
app.mount("#app"); 

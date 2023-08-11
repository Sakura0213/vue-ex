//项目的 js 入口文件

import { createApp } from "vue"; //引入 创建应用实例 方法
import App from "./App.vue"; //引入 根组件

// import "./axios/axiosInstance.js"; 不需要引入，别的组件使用时再引入
import "./mock/mockAllocation"; //引入 mock，模拟的接口是放到整个组件中的，所以需要引入
import ElementPlus from "element-plus"; //引入 element-plus
import "element-plus/dist/index.css"; //引入 element-plus 的 css
import globalReferences from "./components/globalReferences.vue";//引用一个组件的模板，当作全局引用模板
import { createPinia } from "pinia";//引入状态管理工具 pinia


const pinia = createPinia();//创建一个pinia实例

//createApp(App).mount('#app')  初始
const app = createApp(App); //由根组件 App 创建一个应用实例

app.use(ElementPlus); //注册插件，全局使用 element-plus
app.use(pinia);//注册插件

//应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
// app.config.errorHandler = (err) => {
//   /* 处理错误 */
// };

app.component("globalReferences", globalReferences);//将模板注册为全局引用，在任何组件的模板中都可以引用 <globalReferences/>

//将这个实例挂载到项目的 html 入口文件 index.html 的 id="app" 元素上，进行动态渲染
//挂载应用实例之前完成所有应用配置！
app.mount("#app");


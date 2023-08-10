//axiosInstance 实例

//导入 axios
import axios from "axios";

//使用 axios 下面的 create([config]) 方法创建 axios 实例，其中 config 参数为 axios 最基本的配置信息。
const API = axios.create({
  //baseURL: "http://localhost:8080", //请求后端数据的基本地址，自定义
  timeout: 2000, //请求超时设置，单位ms
});

//导出我们建立的axios实例模块，ES6 export用法
export default API;

/*
导出后的使用方法：
1.引用：import API from "../axios/axiosInstance";
2.使用：API(ZZZZZ)

相当于：
import axios from "axios";
const API = axios.create(XXXXX)
API(ZZZZZ)

相当于：
import axios from "axios";
axios.create(XXXXX)(ZZZZZ)//创建的实例直接使用方法

*/

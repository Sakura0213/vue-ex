//引入路由对象
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: "/ex1",
    name: "ex1",
    component: () => import("../components/ex1_count.vue"),
  },
  {
    path: "/ex2",
    name: "ex2",
    component: () => import("../components/ex2_mock_axios.vue"),
  },
  {
    path: "/ex3",
    name: "ex3",
    component: () => import("../components/ex3_login_rs.vue"),
  },
  {
    path: "/ex4",
    name: "ex4",
    component: () => import("../components/ex4_axios_network.vue"),
  },
  {
    path: "/ex5",
    name: "ex5",
    component: () => import("../components/ex5_testVue.vue"),
  },
  {
    path: "/ex6",
    name: "ex6",
    component: () => import("../components/ex6_global.vue"),
  },
  {
    path: "/ex7",
    name: "ex7",
    component: () => import("../components/ex7_pinia.vue"),
  },
  {
    path: "/ex8",
    name: "ex8",
    component: () => import("../components/ex8_maodian.vue"),
  },
  {
    path: "/ex9",
    name: "ex9",
    component: () => import("../components/ex9_yeneitiaozhuan.vue"),
  },
  {
    path: "/ex10",
    name: "ex10",
    component: () => import("../components/ex10_ceshijindutiao.vue"),
  },
  {
    path: "/ex11",
    name: "ex11",
    component: () => import("../components/ex11_svg.vue"),
  },
  {
    path: "/ex12",
    name: "ex12",
    component: () => import("../components/ex12_kongtiao.vue"),
  },
  {
    path: "/ex13",
    name: "ex13",
    component: () => import("../components/ex13_api.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//导出router
export default router;

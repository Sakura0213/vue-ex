<template>
  <BaseFooter title="3. 实现登录界面的前端"></BaseFooter>

  <div>
    <el-button-group>
      <el-button @click="showLogin">登录功能</el-button>
      <el-button @click="showRegister">注册功能</el-button>
    </el-button-group>

    <div v-if="showLoginForm">
      <el-input
        style="width: 175px"
        v-model="username"
        type="text"
        placeholder="请输入账号"
      />
      <br />
      <el-input
        style="width: 175px"
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />
      <br />
      <el-button style="width: 175px" @click="login">登录</el-button>
    </div>

    <div v-if="showRegisterForm">
      <el-input
        style="width: 175px"
        v-model="phoneNumber"
        type="text"
        placeholder="请输入手机号"
      />
      <br />
      <el-input
        style="width: 100px"
        v-model="phoneNumber"
        type="text"
        placeholder="输入验证码"
      />
      <el-button style="width: 75px" @click="getCode">获取验证码</el-button>
      <br />
      <el-button style="width: 175px" @click="register">注册</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import BaseFooter from "./BaseFooter.vue";

const showLoginForm = ref(true);
const showRegisterForm = ref(false);

const username = ref("");
const password = ref("");
const phoneNumber = ref("");

function showLogin() {
  showLoginForm.value = true;
  showRegisterForm.value = false;
}

const showRegister = () => {
  showLoginForm.value = false;
  showRegisterForm.value = true;
};

const login = () => {
  // 处理登录逻辑
  ElMessage({
    message: "登录成功",
    type: "success", //消息提示的类型
    offset: 10, //距离窗口顶部的偏移量
    duration: 1500, //存在时间
  });
  //清空输入框
  username.value = "";
  password.value = "";
};

const getCode = () => {
  // 处理注册逻辑
  ElMessage({
    message: "已发送验证码",
    type: "success", //消息提示的类型
    offset: 10, //距离窗口顶部的偏移量
    duration: 1500, //存在时间
  });
};

const register = () => {
  // 处理注册逻辑
  ElMessage({
    message: "注册成功",
    type: "success", //消息提示的类型
    offset: 10, //距离窗口顶部的偏移量
    duration: 1500, //存在时间
  });
  //清空输入框
  phoneNumber.value = "";
};
</script>

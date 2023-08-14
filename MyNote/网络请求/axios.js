//引入 axios，可自由选择引入的方式，下面为 cdn 引入
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>;

//简单发送请求，get请求
axios.get("http://wuyou.com/common/get?name=小明&age=18");

//发送请求，并进行响应处理，可使用异步函数 async
//await 会暂停当前函数的执行，等 await 后面的操作完成后，继续当前函数的执行。使用 async 和 await 的原因是：从请求到响应需要时间，不进行等待则后续的操作可能等不到响应的数据返回
async () => {
  //写法1：const res1 = await axios.get("http://wuyou.com/common/get?name=小明&age=18");
  //写法2：
  const res1 = await axios.get("http://wuyou.com/common/get", {
    params: {
      name: "小明",
      age: 18,
    },
  });

  //post 请求的参数，不需要放在 params 中
  const res2 = await axios.post("http://wuyou.com/common/post", {
    name: "小明",
    age: 18,
  });

  //打印响应数据
  console.log(res1.data);
  console.log(res2.data);
};

async () => {
  //创建新的 axios 实例并配置实例，后续可直接使用该实例进行操作
  const ins = axios.create({
    //配置基本地址，
    baseURL: "http://http://wuyou.com",
  });

  //配置拦截器（可选）
  //下面为请求拦截器，只要发送请求，都会经过拦截器的处理
  //使用了interceptors.request.use方法来添加一个请求拦截器。该方法接受一个回调函数作为参数，这个回调函数会在每个请求发送之前被调用。最后，通过return config语句将修改后的请求参数 config 返回。目的是为了传递给下一个拦截器或发送请求的过程。
  ins.interceptors.request.use((config) => {
    console.log("发送请求");
    return res;
  });

  //响应拦截器
  //下面为响应拦截器。只要接受响应，都会经过拦截器的处理
  ins.interceptors.response.use((res) => {
    console.log("发送请求");
    return config;
  });

  //拦截器流程
  //发送请求 -> 请求拦截器 -> 发送处理后的请求 -> 服务器接收并处理请求 -> 传回响应数据 -> 响应拦截器 -> 接收处理后的响应数据

  //"common/get" 被解析为 baseURL + "common/get"
  //为 "http://wuyou.com/common/get"，相当于做了一个拼接，简化代码
  const res1 = await ins.get("/common/get", {
    params: {
      name: "小明",
      age: 18,
    },
  });

  const res2 = await ins.post("/common/post", {
    name: "小明",
    age: 18,
  });

  //打印响应数据
  console.log(res1.data);
  console.log(res2.data);
};

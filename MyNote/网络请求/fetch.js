//fetch 请求默认为 get 请求
//同样可以使用异步函数 async ,下面使用 promise 的链式调用方法进行处理
fetch("http://wuyou.com/common/get?name=小明&age=18")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);
  });

//post 请求
//method 声明请求的类型
//headers 配置请求头
//Content-Type 声明请求体的类型
//body 配置请求体
fetch("http://wuyou.com/common/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "小明",
    age: 18,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);
  });

//下面是 js 中 Promise 对象的基本用法
//创建一个 Promise 对象：
const promise = new Promise((resolve, reject) => {
  // 异步操作
  // 如果操作成功，调用 resolve 并传递结果值
  // 如果操作失败，调用 reject 并传递错误信息
});

//使用 Promise 对象的 then() 方法处理操作成功的情况：
promise.then((result) => {
  // 处理操作成功的情况，result 为操作的结果值
});

//使用 Promise 对象的 catch() 方法处理操作失败的情况：
promise.catch((error) => {
  // 处理操作失败的情况，error 为错误信息
});

//可以链式调用 then() 方法，处理多个异步操作的情况：
promise
  .then((result1) => {
    // 处理第一个异步操作的结果
    return result1;
  })
  .then((result2) => {
    // 处理第二个异步操作的结果
    return result2;
  })
  .then((result3) => {
    // 处理第三个异步操作的结果
    return result3;
  })
  .catch((error) => {
    // 处理操作失败的情况
  });

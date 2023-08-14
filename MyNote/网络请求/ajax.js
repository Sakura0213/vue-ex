//生成 ajax 实例对象
const xhr = new XMLHttpRequest();

//配置请求，(请求方式，请求路径)
//路径 ？ 后面为请求参数，多个请求参数用 & 拼接
xhr.open("GET", "http://wuyou.com/common/get?name=小明&age=18");

//发送请求
xhr.send();

//状态改变触发事件
xhr.onreadystatechange = function () {
  //判断:改变后的状态，4为完成,响应状态。200为 OK
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //打印响应文本，为 json 格式
    console.log(xhr.responseText);
    //处理 json，使用 js 原生的 JSON 对象
    //JSON.parse() 将 json 字符串解析为对象
    //JSON.stringify() 将对象转换为 json 字符串
    console.log(JSON.parse(xhr.responseText));
  }
};

//post 请求
xhr.open("POST", "http://wuyou.com/common/post");

//GET 请求只能发送文本数据，post 请求能发送多种类型的数据，如图片、视频等
//则，发送 post 请求时，需要告诉服务器发送的内容是什么类型
//对请求配置请求头,方法的参数对应请求发送内容的类型
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//post 发送参数的位置在 send() 中
xhr.send("name=小明&age=18");

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));
  }
};

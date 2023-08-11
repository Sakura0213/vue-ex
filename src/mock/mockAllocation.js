//请求拦截，模拟响应 mock 配置

import Mock from "mockjs"; //导入mockjs

// Mock.mock( rurl, rtype, template )
// 记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
//参数1:拦截的完整请求地址
//参数2:请求方式
//参数3:模拟响应的数据
const testData1 = Mock.mock("http://localhost:8080/test1", "get", {
  status: 200, //请求成功状态码
  dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //模拟的请求数据
});

const testData2 = Mock.mock("http://localhost:8080/test2", "get", {
  status: 200, //请求成功状态码
  dataList: [1, 2, 2, 2, 2, 2], //模拟的请求数据
});

//导出
export default {
  testData1,
  testData2,
};

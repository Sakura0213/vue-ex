<template>
  <BaseFooter title="11.测试elementui-dialog"></BaseFooter>

  <h4 id="文件提示">文件提示</h4>
  <ul>
    <li>仅支持后缀为 .xls 与 .xlsx 的 excel 格式文件</li>
  </ul>
  <h4 id="工作表提示">工作表提示</h4>
  <ul>
    <li>
      导入的工作表，其<font color="#F56600"> <strong>名称</strong> </font
      >需要与系统中被导入<font color="#F56600">
        <strong>模块的m&#39;c</strong> </font
      >一致
    </li>
  </ul>
  <h4 id="数据提示">数据提示</h4>
  <ul>
    <li>
      <p>
        工作表中导入的数据，其<font color="#F56600">
          <strong>列头</strong> </font
        >需要与系统中被导入模块的<font color="#F56600">
          <strong>字段的名称</strong> </font
        >一致
      </p>
      <ul>
        <li>1</li>
      </ul>
    </li>
  </ul>
  <p>&nbsp;</p>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";

const centerDialogVisible = ref(false);
</script>

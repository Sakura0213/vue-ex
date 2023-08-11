<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-row type="flex" justify="start" align="top">
        <el-col :span="6">
          <el-form-item label="级联选择" prop="field109">
            <el-cascader v-model="formData.field109" :options="field109Options" :props="field109Props"
              :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="颜色选择" prop="field110" required>
            <el-color-picker v-model="formData.field110" size="medium"></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="下拉选择" prop="field108">
            <el-select v-model="formData.field108" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in field108Options" :key="index" :label="item.label"
                :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field109: [],
        field110: null,
        field108: undefined,
      },
      rules: {
        field109: [{
          required: true,
          type: 'array',
          message: '请至少选择一个级联选择',
          trigger: 'change'
        }],
        field108: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
      },
      field109Options: [],
      field108Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field109Props: {
        "multiple": false,
        "label": "label",
        "value": "value",
        "children": "children"
      },
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getField109Options()
  },
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    getField109Options() {
      // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
      this.$axios({
        method: 'get',
        url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
      }).then(resp => {
        var {
          data
        } = resp
        this.field109Options = data.list
      })
    },
  }
}

</script>
<style>
</style>

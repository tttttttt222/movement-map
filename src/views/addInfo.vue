<template>
  <div class="addInfo">
    <headback/>
    <el-form ref="addInfoRef" :model="addInfo" :rules="addFormRules"
             label-width="80px" style="margin:10px; padding: 20px">

      <el-form-item label="地点名称" prop="positionName">
        <el-input v-model="addInfo.positionName"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="lng">
        <el-input v-model="addInfo.lng"></el-input>
      </el-form-item>

      <el-form-item label="纬度" prop="lat">
        <el-input v-model="addInfo.lat"></el-input>
      </el-form-item>

      <el-form-item label="地点类型" prop="positionType">
        <el-select v-model="addInfo.positionType" placeholder="请选择类型">
          <el-option v-for="(value, key) in continentObj" :key="key" :label="value" :value="key"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="地点地址" prop="positionAdress">
        <el-input v-model="addInfo.positionAdress"></el-input>
      </el-form-item>

      <el-button type="primary" @click="saveInfoForm">提交</el-button>
      <el-button type="info" @click="resetInfoForm">重置</el-button>
    </el-form>
  </div>
</template>

<script>
  import headback from "../components/headback";
  import {backIndex} from "../plugin/common";

  var valiFloatNumber = (rule, value, callback) => {//包含小数的数字
    let reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
    if (value === '') {
      callback(new Error('请输入内容'));
    } else if (!reg.test(value)) {
      callback(new Error('请输入数字'));
    } else {
      callback();
    }
  };

  export default {
    name: "addInfo",
    components: {headback},
    data() {
      return {
        addInfo: {
          positionName: '',
          lng: 121.469959,
          lat: 31.187304,
          positionAdress: '',
        },
        continentObj: {
          1: '跑酷',
          2: '爬楼',
        },
        addFormRules: {
          positionName: [{required: true, message: '地点名称', trigger: 'blur'}],
          lng: [{required: true, validator: valiFloatNumber, trigger: "blur"}],
          lat: [{required: true, validator: valiFloatNumber, trigger: "blur"}],
          positionType: [{required: true, message: '请输选择地点类型', trigger: 'blur'}],
        },
      }
    },
    methods: {
      resetInfoForm() {
        this.$refs.addInfoRef.resetFields();
      },
      saveInfoForm() {
        this.$refs.addInfoRef.validate(async (valid) => {
          if (!valid) return;
          const {data: res} = await this.$http.post('location/addLocation', this.addInfo);
          if (res.meta.status !== 1) {
            return this.$message.error('添加信息失败');
          }
          this.$message.success('添加信息成功!');
          backIndex();
        });
      },
    },
  }
</script>

<style lang="scss" scoped>

  .addInfo {
    background-color: #d5d7db;
    height: 100%;
  }

  .bg-purple-dark {
    height: 8%;
    background: #99a9bf;


    i {
      color: #909090;
      font-size: 3em;
      margin: 0.06em;
      text-align: center;
      cursor:pointer
    }
  }

</style>

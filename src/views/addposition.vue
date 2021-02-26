<template>
  <div class="add-position">
    <div class="bg-purple-dark" @click="backIndex"><i class="el-icon-back"></i></div>
    <el-form ref="addPositionRef" :model="addPosition" :rules="addPositionFormRules"
             label-width="80px" style="margin:10px; padding: 20px">

      <el-form-item label="项目名称" prop="itemName">
        <el-input v-model="addPosition.itemName"></el-input>
      </el-form-item>

      <el-form-item label="具体地址" prop="itemAdress">
        <el-input v-model="addPosition.itemAdress"></el-input>
      </el-form-item>

      <el-form-item label="评分" prop="itemScore">
        <el-rate v-model="addPosition.itemScore" allow-half show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </el-form-item>

      <el-form-item label="项目类型" prop="itemType">
        <el-select v-model="addPosition.itemType" placeholder="请选择类型">
          <el-option v-for="(value, key) in posObj" :key="key" :label="value" :value="key"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="简介" prop="itemBrief">
        <el-input v-model="addPosition.itemBrief"></el-input>
      </el-form-item>

      <el-button type="primary" @click="saveInfoForm">提交</el-button>
      <el-button type="info" @click="resetInfoForm">重置</el-button>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "addPosition",
    data() {
      return {
        addPosition: {},
        posObj: {
          1: 'parkour',
          2: 'freeRun',
          3: '摄影',
        },
        addPositionFormRules: {
          itemName: [{required: true, message: '项目名称', trigger: 'blur'}],
          itemScore: [{required: true, message: '评分', trigger: 'blur'}],
          itemType: [{required: true, message: '请输选择项目类型', trigger: 'blur'}],
        },
      }
    },
    mounted() {
      this.addPosition.locationId = this.$route.params.lid;
      this.addPosition.positionType = this.$route.params.posType;
      console.log(this.addPosition);
    },
    methods: {
      backIndex() {
        this.$router.push({name: "Index"});
      },
      resetInfoForm() {
        this.$refs.addPositionRef.resetFields();
      },
      saveInfoForm() {
        this.$refs.addPositionRef.validate(async (valid) => {
          if (!valid) return;
          const {data: res} = await this.$http.post('item/addItem', this.addPosition);
          if (res.meta.status !== 1) {
            return this.$message.error('添加信息失败');
          }
          this.$message.success('添加信息成功!');
          this.backIndex();
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
      cursor: pointer
    }
  }

</style>

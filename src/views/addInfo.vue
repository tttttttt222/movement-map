<template>
  <div class="addInfo">
    <div class="bg-purple-dark"><i class="el-icon-back"></i></div>
    <el-form ref="addInfoRef" :model="addInfo" :rules="addFormRules"
             label-width="80px" style="margin:10px; padding: 20px">

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "addInfo",
    data() {
      return {
        addInfo: {},
        addFormRules: {},
      }
    },
  }
</script>

<style scoped>

  .addInfo {
    background-color: #d5d7db;
    height: 100%;
  }

  .bg-purple-dark {
    height: 8%;
    background: #99a9bf;
  }

</style>

<template>
  <div class="headback">
    <div class="bg-purple-dark" @click="backIndex"><i class="el-icon-back"></i></div>
  </div>

</template>

<script>
  export default {
    name: "headback",
    methods: {
      backIndex() {
        this.$router.push({name: "Index"});
      }
    }
  }
</script>

<style lang="scss" scoped>

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

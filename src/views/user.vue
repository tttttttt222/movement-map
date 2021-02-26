<template>
  <div>
    <div class="user-info">
      <img src="../assets/images/cgdd-logo.jpg"/>
      <div class="meta">
        <h4 class="name">CGDD</h4>
        <span>test</span>
      </div>
    </div>
    <div class="user-content">
      <el-button type="primary" style="margin: 0 auto" @click="toAddInfo">新增地点</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    components: {},
    data() {
      return {}
    },
    methods:{
      toAddInfo(){
        const router = this.$route;
        if (router.name === "AddInfo") {
          this.$router.push({name: "User"});
        } else {
          this.$router.push({name: "AddInfo"});
        }
      },
    }
  }
</script>

<style lang="scss">
  .user-info {
    display: flex;
    padding: 64px 0 0 5px;

    img {
      border-radius: 100%;
      width: 60px;
      height: 60px;
      border: 6px solid #2f343a;
    }

    .meta {
      flex: 1;
      padding-left: 17px;
    }

    .name {
      color: #909090;
      line-height: 43px;
      font-size: 18px;
    }
  }

  .user-content{
    margin-top: 30px;
    margin-left: 30px;
    width: 100%;
  }

</style>

<template>
  <div class="position-card">
    <div class="position-item">
      <div class="position-header">
        <h4 class="position-title">{{posData.item_name}}</h4>
        <div class="position-type">{{posTypeStr}}</div>
      </div>
      <div class="position-content">
        <p>难度:</p>
        <div class="position-star">
          <el-rate v-model="posData.item_score" disabled show-score score-template="{value}" text-color="#ff9900"></el-rate>
        </div>
      </div>
      <div class="position-img">
        <img src="../assets/logo.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "positioncard",
    props: {posData: Object},
    data() {
      return {}
    },
    computed: {
      posTypeStr() {
        switch (this.posData.item_type) {
          case 1:
            return "parkour";
          case 2:
            return "freeRun";
          case 3:
            return "base";
          default :
            return "";
        }
        return "";
      }
    }
  }
</script>

<style lang="scss" scoped>

  .position-item {
    width: 70%;
    height: 220px;
    background-color: #fff;
    border-radius: 24px;
    margin: auto;
    padding: 30px 30px 0;
    -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -ms-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -o-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    box-sizing: border-box;

    .position-header {
      display: flex;

      h4 {
        flex: 5;
        font-size: 18px;
        word-break: break-word;
      }

      .position-type {
        flex: 1;
        font-size: 12px;
        color: white;
        background-color: #409EFF;
        border: 1px solid #409EFF;
        border-radius: 50%;
        text-align: center;
        width: 30px;
        height: 20px;
      }
    }

    .position-content {
      margin-top: 30px;
      display: flex;
      p {
        flex: 1;
      }

      .position-star {
        flex: 3;
      }
    }

    .position-img{
      img{
        height: 100px;
        width: 100px;
        margin:0 auto;
      }
    }
  }

  /*.position-title {*/
  /*  .img {*/
  /*    display: inline-block;*/
  /*    height: 34px;*/
  /*    margin-right: 10px;*/
  /*  }*/
  /*}*/

</style>

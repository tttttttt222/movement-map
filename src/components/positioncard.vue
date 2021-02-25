<template>
  <div class="position-card">
    <div class="position-item-hidden" @click="itemHidden"><span>隐藏</span></div>
    <div class="position-item">
      <div class="position-header">
        <h4 class="position-title">{{posData.itemName}}</h4>
        <div class="position-type">{{posTypeStr}}</div>
      </div>
      <div class="position-content">
        <p>难度:</p>
        <div class="position-star">
          <el-rate v-model="posData.itemScore" disabled show-score score-template="{value}"
                   text-color="#ff9900"></el-rate>
        </div>
      </div>
      <div class="position-adress">
        <p>地址:</p>
        <div class="position-star"><p>{{posData.itemAdress}}</p></div>
      </div>
      <div class="position-img">
        <img src="../assets/images/cgdd-logo.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "positioncard",
    props: {posData: Object, hidSwiper: Function},
    data() {
      return {}
    },
    computed: {
      posTypeStr() {
        switch (this.posData.itemType) {
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
    },
    methods: {
      itemHidden() {
        this.hidSwiper();
      }
    }
  }
</script>

<style lang="scss" scoped>

  .position-item-hidden {
    width: 10%;
    height: 16px;
    background: #606266 no-repeat;
    border-radius: 10%;
    margin: 0 0 0 90px;
    padding: 5px 5px 0;
    -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -ms-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    -o-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);
    box-sizing: border-box;
    font-size: 10px;
    color: white;
    text-align: center;
    line-height: 3px;
    cursor: pointer;
  }

  .position-item {
    width: 70%;
    height: 230px;
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

    .position-adress {
      margin-top: 5px;
      display: flex;

      p {
        flex: 1;
      }

      .position-star {
        flex: 3;
      }
    }

    .position-img {
      img {
        height: 80px;
        width: 80px;
        margin: 0 auto;
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

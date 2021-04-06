<template>
  <div class="position-add-btn">
    <div class="position-item">
      <i class="el-icon-circle-plus-outline" @click="toAddPosition"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "positionaddbtn",
    props: {locationId: Number, positionType: Number, locationArr: Array},
    data() {
      return {}
    },
    methods: {
      toAddPosition() {
        // console.log("locationId / positionType:",this.locationId ,this.positionType);
        // console.log("posbtn",this.locationArr);
        this.$router.push({
          name: "AddPosition",
          params: {lid: this.locationId, posType: this.positionType, lArr: this.locationArr}
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

  .position-item {
    width: 70%;
    height: 230px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 24px;
    margin: auto;
    padding: 30px 30px 0;
    /*-webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);*/
    /*-moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);*/
    /*-ms-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);*/
    /*-o-box-shadow: 0 0 18px 0 rgba(0, 0, 0, .2);*/
    /*box-sizing: border-box;*/

    i {
      color: #909090;
      margin: 0.01em 0.24em;
      font-size: 15em;
      cursor: pointer
    }
  }

</style>

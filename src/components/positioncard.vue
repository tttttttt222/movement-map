<template>
  <div class="position-card">
    <div class="position-item">
      <div class="position-header">
        <h4 class="position-logo"><img src="../assets/images/cars-logo.png"></h4>
        <p>asdasd</p>
      </div>
      <div class="position-content"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "positioncard"
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
      h4, p {
        flex: 1;
      }
    }
  }

  .position-logo {
    .img {
      display: inline-block;
      height: 34px;
      margin-right: 10px;
    }
  }

</style>

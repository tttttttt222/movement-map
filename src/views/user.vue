<template>
  <div>
    <div class="user-info">
      <img src="../assets/images/cgdd-logo.jpg"/>
      <div class="meta">
        <h4 class="name">CGDD</h4>
        <span>uuuu</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    components: {},
    data() {
      return {}
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

    .name{
      color:#909090;
      line-height: 43px;
      font-size: 18px;
    }
  }

</style>

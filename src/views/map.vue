<template>
  <div class="amap-warp">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :events="events">
    </el-amap>
  </div>
</template>

<script>
  import {lazyAMapApiLoaderInstance} from "vue-amap";

  export default {
    name: "index",
    data() {
      return {
        map: null,
        zoom: 15,
        center: [113.666519, 34.752158],
        events: {
          // 高德地图原生遮盖物
          init(o) {
            let marker = new AMap.Marker({});
            marker.setMap(o);
          }
        }
      };
    },
    mounted() {
      // 在定制化程度较高的项目中，只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的sdk完成。需要 lazyAMapApiLoaderInstance
      lazyAMapApiLoaderInstance.load().then(() => {
        // your code ...
        this.map = new AMap.Map("amapContainer", {});
      });
    }
  }
</script>

<style lang="scss" scoped>
  .amap-warp {
    height: 100vh;
  }

</style>

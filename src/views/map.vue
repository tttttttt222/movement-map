<template>
  <div class="amap-warp">
    <el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="zoom" :center="center" :events="events"
             class="amap-demo"></el-amap>
  </div>
</template>

<script>
  import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";

  let amapManager = new AMapManager()

  export default {
    name: "Amap",
    data() {
      const _this = this;
      return {
        amapManager,
        map: null,
        zoom: 18,
        center: [121.469959, 31.187304],
        events: {
          init(o) {
            lazyAMapApiLoaderInstance.load().then(() => {
              _this.initMap();
            });
          }
        }
      };
    },
    methods: {
      initMap() {
        this.map = amapManager.getMap();
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition: 'LB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(0, 0),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
          markerOptions: {
            content: "<div style='background-color: #2f343a; border-radius: 100%;width: 15px;height: 15px; padding: 5px 0 0 5px'></div>"
          }
        });
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            // onComplete(result)
            console.log("定位成功", result);
          } else {
            // onError(result)
            console.log("定位失败", result);
          }
        });

        // 创建点覆盖物
        var marker = new AMap.Marker({
          position: new AMap.LngLat(121.469959, 31.187304),
          icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
          offset: new AMap.Pixel(-13, -30)
        });
        marker.on('click', this.showPoition);
        this.map.add(marker);

      },
      showPoition() {
        console.log("显示");
        this.$emit('dialogVisibleEvent', false);
      }
    },
    mounted() {
      // 在定制化程度较高的项目中，只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的sdk完成。需要 lazyAMapApiLoaderInstance
      // lazyAMapApiLoaderInstance.load().then(() => {
      //   // your code ...
      //   this.map = new AMap.Map("amapContainer", {});
      // });
    }
  }
</script>

<style lang="scss" scoped>
  .amap-warp {
    height: 100vh;
  }

</style>

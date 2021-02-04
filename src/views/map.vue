<template>
  <div class="amap-warp">
    <el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="zoom" :center="center" :events="events"
             class="amap-demo">
      <el-amap-circle v-for="item in circle" :key="item.id" :center="item.center" :radius="item.radius" :editable="false"
                      :fillColor="item.color" :strokeColor="item.color" :strokeOpacity="item.strokeOpacity"
                      :strokeWeight="item.strokeWeight"></el-amap-circle>
    </el-amap>
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
        zoom: 15,
        center: [121.469959, 31.187304],
        events: {
          init(o) {
            lazyAMapApiLoaderInstance.load().then(() => {
              _this.initMap();
            });
          }
        },
        circle: [{
          id: 1,
          center: [121.469959, 31.187304],
          radius: 50,
          color: "#34393f",
          strokeOpacity: 0.2,
          strokeWeight: 30
        }],
      };
    },
    methods: {
      initMap() {
        this.map = amapManager.getMap();
        // 地图初始化完成
        this.$emit("callbackmap", {
          function: "loadMap"
        })
        //定位
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          showButton: false,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(0, 0),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
          // markerOptions: {
          //   content: ""
          // }
        });
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition((status, result) => {
          if (status == 'complete') {
            const lng = result.position.lng;
            const lat = result.position.lat;
            this.circle[0].center = [lng, lat];
            // console.log("定位成功", result);
          } else {
            this.$message.error('定位失败');
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

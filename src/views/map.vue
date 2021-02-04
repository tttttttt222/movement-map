<template>
  <div class="amap-warp">
    <el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="zoom" :center="center" :events="events"
             class="amap-demo">
      <el-amap-circle v-for="item in circle" :key="item.id" :center="item.center" :radius="item.radius"
                      :editable="false"
                      :fillColor="item.color" :strokeColor="item.color" :strokeOpacity="item.strokeOpacity"
                      :strokeWeight="item.strokeWeight"></el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
  import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";
  import {selfLocation} from "../plugin/location";

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
        selfLocation({
          map: this.map,
          onComplete: (val) => this.onComplete(val),
          onError: (val) => this.onError(val),
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
      onComplete(data){
        const lng = data.position.lng;
        const lat = data.position.lat;
        this.circle[0].center = [lng, lat];
      },
      onError(data){
        this.$message.error('定位失败');
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

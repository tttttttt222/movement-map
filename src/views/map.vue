<template>
  <div class="amap-warp">
    <el-amap vid="amapDemo" :amap-manager="amapManager" :zoom="zoom" :center="center" :events="events"
             class="amap-demo">
      <el-amap-circle v-for="item in circle" :key="'circle'+item.id" :center="item.center" :radius="item.radius"
                      :editable="false" :fillColor="item.color" :strokeColor="item.color" :strokeOpacity="item.strokeOpacity"
                      :strokeWeight="item.strokeWeight" :draggable="true" :raiseOnDrag="true"></el-amap-circle>
      <!--地点位置坐标-->
      <el-amap-marker v-for="(item, index) in nearMarkers" :key="'near'+item.id" :position="item.position" :offset="item.offset"
                      :content="item.content" :vid="index"></el-amap-marker>
      <!--文字-->
      <el-amap-marker v-for="item in nearMarkers" :key="'text'+item.id" :content="item.textContent" :offset="item.textOffset"
                    :position="item.position" :events="item.events" :extData="item"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
  import {AMapManager, lazyAMapApiLoaderInstance} from "vue-amap";
  import {SelfLocation} from "../plugin/location";
  import location from "../plugin/locationVuex";

  let amapManager = new AMapManager()

  export default {
    name: "Amap",
    data() {
      const _this = this;
      return {
        amapManager,
        map: null,
        zoom: 12,
        center: [121.469959, 31.187304],
        events: {
          init(o) {
            lazyAMapApiLoaderInstance.load().then(() => {
              _this.initMap();
            });
          }
        },
        circle: [{
          id: 0,
          center: [121.469959, 31.187304],
          radius: 200,
          color: "#409EFF",
          strokeOpacity: 0.2,
          strokeWeight: 30
        }],
        nearMarkers: [{
          id: 0,
          content: "<img src='" + require('../assets/images/position-marker.png') + "'>",
          offset: [0, 0],
          textOffset: [0, 0],
          position: [121.469959, 31.187304],
          itemCount: '0'
        }],
      };
    },
    methods: {

      initMap() {
        // 地图初始化完成
        this.map = amapManager.getMap();
        //定位
        this.selfLocation();

        //创建点覆盖物
        // var marker = new AMap.Marker({
        //   position: new AMap.LngLat(this.circle[0].center[0], this.circle[0].center[1]),
        //   icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        //   offset: new AMap.Pixel(-13, -30),
        //   cursor: 'move',
        // });
        // this.map.add(marker);
      },
      onComplete(data) {
        const lng = data.position.lng;
        const lat = data.position.lat;
        this.circle[0].center = [lng, lat];
        this.queryPositionNearDataParent();
      },
      onError(data) {
        this.$message.error('定位失败');
        this.queryPositionNearDataParent();
      },
      selfLocation() {  //自身定位
        SelfLocation({
          map: this.map,
          onComplete: (val) => this.onComplete(val),
          onError: (val) => this.onError(val),
        });
      },
      //附近点信息
      positionNearData(data) {
        this.nearMarkers = data;
      },
      //调用父类查询附近点
      queryPositionNearDataParent(){
        this.$emit("callbackmap", {
          function: "loadMap",
          centerLocation:{lng: 121.469959, lat: 31.187304},
        });
      }
    },
    mounted() {
    },
    watch: {
      "$store.state.location.selfLocation"(val) {
        this.selfLocation();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-warp {
    height: 100vh;
  }

</style>

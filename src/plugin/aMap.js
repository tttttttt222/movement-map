import Vue from "vue";
import VueAMap from "vue-amap";

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "0b41917a02f31572042d0ef0a517a435  ",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
    "AMap.Geolocation",
    "AMap.Pixel"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  // 高德UI组件版本号
  uiVersion: "1.0.11"
});

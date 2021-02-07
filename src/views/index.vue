<template>
  <div>
    <!--导航-->
    <Navbar/>
    <!--地图-->
    <Map ref="map" @callbackmap="callbackmap"/>
    <!--位置-->
    <Position ref="position"/>
    <!--会员-->
    <div id="children-view" :class="[show ? 'open' : '']">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Map from "./map"
  import Position from "./postion"
  import Navbar from "../components/navbar"

  export default {
    name: "index",
    components: {Map, Position, Navbar},
    data() {
      return {
        itemList: [],
        locationList: [],
      }
    },
    computed: {
      show() {
        const router = this.$route;
        return router.name === "User" ? true : false;
      }
    },
    methods: {
      //地图回调
      callbackmap(params) {
        params.function && this[params.function](params);
      },
      loadMap() {
        var centerLocation = {lng: 121.469959, lat: 31.187304};
        this.queryLocationNear(centerLocation);
      },
      //地点具体获取数据
      async queryLocationItemByLid(lid) {
        const {data: res} = await this.$http.post(`item/queryByLid/${lid}`);
        if (res.meta.status !== 1) {
          return this.$message.error('获取地点信息失败');
        }
        this.itemList = res.data;
        console.log("地点信息", this.itemList);
        this.$refs.position.solvePositionData(this.itemList);
      },
      //附近信息
      async queryLocationNear(centerLocation) {
        const {data: res} = await this.$http.post(`location/queryNear`, centerLocation);
        if (res.meta.status !== 1) {
          return this.$message.error('获取附近信息失败');
        }
        this.locationList = res.data;
        console.log("附近信息", this.locationList);
        this.locationList.forEach(item => {
          item.position = [item.lng, item.lat];
          item.content = "<img src='" + require('../assets/images/position-marker.png') + "'>";
          item.offset = [-30, -60];
          item.textOffset = [-5, -36];
          item.textContent = `<div style="width: 50px;font-size=20px;color=#FFF;background-color: red";text-align:center>${item.itemCount}</div>`;
          item.events = {
            click: (e) => {
              const data = e.target.getExtData();
              this.queryLocationItemByLid(data.id);
            }
          }
        });
        //地图方法
        this.$refs.map.positionNearData(this.locationList);
      },

    },
    mounted() {
      // document.addEventListener('mouseup',(e)=>{
      //    const userCon = document.getElementById("children-view");
      //    if(userCon && !userCon.contains(e.target)){
      //        this.$router.push({name: "Index"}).catch(err => {console.log(err)});
      //    }
      // })
    },
    watch: {
      // "$route": {
      //   handler(newValue) {
      //     const routerName = newValue.name;
      //     this.show = routerName === "User" ? true : false
      //   }
      // }
    }

  }
</script>

<style lang="scss" scoped>
  #children-view {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0%;
    background-color: #34393f;
    z-index: 12;
    display: none;
    -webkit-transition: all .5s ease 0s;
    -moz-transition: all .5s ease 0s;
    -ms-transition: all .5s ease 0s;
    -o-transition: all .5s ease 0s;
    transition: all .5s ease 0s;

    &.open {
      display: block;
      width: 60%;
    }
  }

  #children-view :hover {
    width: 60%;
  }
</style>

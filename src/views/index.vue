<template>
  <div>
    <!--导航-->
    <Navbar/>
    <!--地图-->
    <Map @dialogVisibleEvent="showPosition" @callbackmap="callbackmap"/>
    <!--位置-->
    <Position v-show="positionShow" :itemList = "itemList"/>
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
        positionShow: false,
        itemList:[],
      }
    },
    computed: {
      show() {
        const router = this.$route;
        return router.name === "User" ? true : false;
      }
    },
    methods: {
      showPosition() {
        if (this.positionShow === false) {
          this.positionShow = true;
        }
        this.queryLocationItemByLid(1);
      },
      //地图回调
      callbackmap(params) {
        console.log("地图回调",params);
        // params.function && this[params.function](params, data);
      },
      // loadMap(data){
      //
      // }
      async queryLocationItemByLid(lid) {
        const {data: res} = await this.$http.post(`item/queryByLid/${lid}`);
        if (res.meta.status !== 1) {
          return this.$message.error('获取地点信息失败');
        }
        this.itemList = res.data.list;
        console.log("地点信息",this.itemList);
      }
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

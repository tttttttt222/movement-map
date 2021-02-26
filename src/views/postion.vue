<template>
  <div class="position-warp">
    <div class="position-swiper-warp" v-show="dataShow">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in itemList" :key="item.id">
          <Positioncard :posData="item" :hidSwiper="hiddenSwiper"/>
        </swiper-slide>
        <swiper-slide><Positionaddbtn :locationId="lid" :positionType="pType"/></swiper-slide>
      </swiper>
<!--      <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--      <div class="swiper-button-next" slot="button-next"></div>-->
    </div>

    <!--    <span @click="user">地点列表</span>-->
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import Positioncard from '../components/positioncard'
  import Positionaddbtn from '../components/positionaddbtn'

  export default {
    name: "position",
    components: {Swiper, SwiperSlide, Positioncard, Positionaddbtn},
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        itemList: [{id: 1, itemName: "龙华中路-攀岩墙", itemType: 3, itemScore: 1, itemAdress: ""},
          {id: 2, itemName: "龙华中路-11步定点", itemType: 1, itemScore: 2.5, itemAdress: ""}],
        dataShow:false,
        lid:0,
        pType:0,
      }
    },
    methods: {
       solvePositionData(positionData){
         this.itemList = positionData;
         this.lid = positionData[0].locationId;
         this.pType = positionData[0].positionType;
         this.dataShow = true;
       },
      hiddenSwiper(){
        this.dataShow = false;
      }
    },
    mounted() {
      console.log("swiper初始化完成");
    }
  }
</script>

<style lang="scss">
  .position-warp {
    position: fixed;
    left: 0;
    bottom: 94px;
    right: 0;
    z-index: 11;
  }

  .position-swiper-warp {
    /*padding: 0 155px;*/

    .swiper-container {
      overflow: initial;
    }
  }


</style>

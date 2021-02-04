<template>
  <div class="position-warp">
    <div class="position-swiper-warp">
      <swiper class="swiper" :options="swiperOption" v-if="awesomeData.length>0">
        <swiper-slide v-for="item in awesomeData" :key="item.id">
          <Positioncard :pos-data="item"/>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>

    <!--    <span @click="user">地点列表</span>-->
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import Positioncard from '../components/positioncard'

  export default {
    name: "position",
    components: {Swiper, SwiperSlide, Positioncard},
    props:{itemList : Array},
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
        awesomeData:this.itemList,
        // itemList: [{id: 1, item_name: "龙华中路-攀岩墙", item_type: 3, item_score: 1},
        //   {id: 2, item_name: "龙华中路-11步定点", item_type: 1, item_score: 2.5},
        //   {id: 3, item_name: "龙华中路-上墙", item_type: 1, item_score: 3},
        //   {id: 4, item_name: "龙华中路攀岩墙", item_type: 1, item_score: 4}],
      }
    },
    methods: {

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

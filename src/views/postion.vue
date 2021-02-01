<template>
  <div class="position-warp">
    <div class="position-swiper-warp">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <Positioncard/>
        </swiper-slide>
        <swiper-slide>
          <Positioncard/>
        </swiper-slide>
        <swiper-slide>
          <Positioncard/>
        </swiper-slide>
        <swiper-slide>
          <Positioncard/>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
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
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 50,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        list:[1,2,3]
      }
    },
    methods: {
      user() {
        this.$router.push({name: "User"})
      }
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

  .position-swiper-warp{
    padding: 100px;
  }


</style>

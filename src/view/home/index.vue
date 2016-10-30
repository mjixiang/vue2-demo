<template>
	<div>
    <swiper :options="swiperOption" style="height:204px;">
      <swiper-slide class="xa-bg-image" v-for="item in banners" :style="{'background-image':'url('+item.img+')'}"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { banners } from '../../app.config.js'
  console.log(banners)
	export default{
		data() {
      return {
      	banners,
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay:5000,
          loop:true
        }
      }
    },
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

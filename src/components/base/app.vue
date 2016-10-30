<template>
<div id="app" class="xa-box-vertical">
    <section class="xa-container xa-flex xa-box-vertical">
    	<router-view></router-view>
    </section>
  	<xa-footer :items="footerMenu" v-if="$route.meta.isShowFooter"></xa-footer>
</div>
</template>

<script>
	import xaFooter from './footer.vue';
	import { footerMenu } from '../../app.config.js';
	export default {
		data(){
			return {
        footerMenu
			}
		},
	  	components:{
	    	xaFooter
	    }
	}
</script>

<style scoped>
  .footer-enter-active,.footer-leave-active{
    transition:0.3s;
  }
  .footer-enter,.footer-leave-active{
    transform:translateX(-10px);
    opacity:0;
    height:0;
  }
</style>

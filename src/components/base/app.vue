<template>
<div id="app" class="xa-box-vertical">
    <section class="xa-container xa-flex xa-box-vertical">
    	<router-view keep-alive></router-view>
    </section>
  	<xa-footer :items="footerMenu" v-show="$route.meta.isShowFooter"></xa-footer>
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
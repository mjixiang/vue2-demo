<template>
    <router-link :to="item.link" replace class="xa-footer-item">
        <figure>
            <i class="iconfont xa-txt-24" :class="item.default"></i>
            <figcaption class="figure-caption xa-txt-ellipsis">{{ item.text }}</figcaption>
        </figure>
        <ripple></ripple>
    </router-link>
</template>
<script>
	export default {
		props:{
			item:{
				type:Object
			}
		}
	}
</script>
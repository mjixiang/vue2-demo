<template>
    <footer class="xa-footer xa-txt-center xa-bg-white">
        <footer-item v-for="item in items" :item="item"></footer-item>
    </footer>
</template>

<script>
    import footerItem from './footerItem.vue'
    export default {
        components:{
            footerItem
        },
        props:{
        	items:{
        		type:Array
        	}
        }
    }
</script>
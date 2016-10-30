<template>
  <div class="xa-page">
    <transition-group name="ul" tag="ul">
      <li v-for="i in arr" :key="i">{{ i }}</li>
    </transition-group>
    <button @click="add">乱排</button>
  </div>
</template>

<script>
	export default {
		data() {
			return {
        arr:[1,2,3,4,5,6,7,8]
			}
		},
    methods:{
      add(){
        this.arr.sort(()=>{
          return Math.random()>0.5
        })
      }
    }
	}
</script>

<style>
  .ul-enter-active,.ul-leave-active{
    transition:0.4s;
  }
  .ul-enter,.ul-leave-active{
    opacity: 0;
    font-size:20px;
  }

  .ul-move{
    transition:0.4s;
  }
</style>

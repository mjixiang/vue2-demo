<template>
    <div class="xa-flex xa-bg-white xa-page">
      <transition-group name="item" tag="div" class="xa-box xa-flex-wrap box">
        <div v-for="i in arr" :key="i" class="xa-box-center">{{ i }}</div>
      </transition-group>
      <div @click="start" class="xa-btn xa-bg-blue-click">开始</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
              arr:Array.apply(null,{length:16}).map((it,ix)=>ix+1)
            }
        },
        methods:{
          start(){
            this.arr.sort(()=>{
              return Math.random()>0.5
            })
          }
        }
    }
</script>
<style scoped lang="scss">
  .box{
      height:320px;margin:auto;
      &>div{
        display: flex;;
        width:25%;height:80px;border:1px solid #ccc;
      }
  }
  .item-move{transition:0.3s;}
</style>

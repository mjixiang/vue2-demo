<template>
  <div>
    <transition :name="animationCss">
      <router-view></router-view>
    </transition>
    <div class="demo-tag">demo</div>
  </div>
</template>

<script>
  export default {
      computed:{
        animationCss(){
          return this.$route.meta.silidLeft ? 'slide-left' : 'slide-right'
        }
      },
      watch:{
        $route(to,from){
          console.log('to:'+to.path)
          console.log('from:'+from.path)
        }
      }
  }
</script>


<style scoped>
  .demo-tag{color:white;position:absolute;z-index:99999999;bottom:10px;right:10px;text-shadow:0 0 8px black;}
  /*默认同时进行  mode="in-out" mode="out-in"三种*/

  /*slide-right*/
  .slide-right-enter-active,.slide-right-leave-active{
    transition:transform 0.2s ease;
  }
  .slide-right-enter{
    transform:translateX(100%);
  }
  .slide-right-enter-active{
  }
  .slide-right-leave{
  }
  .slide-right-leave-active{
    transform:translateX(-40px);
  }

  /*slide-left*/
  .slide-left-enter{
    transform:translateX(-40px);
  }
  .slide-left-enter-active{
    transition:transform 0.2s ease;
  }
  .slide-left-leave{
  }
  .slide-left-leave-active {
    transition:transform 0.2s ease; /*加上transform 避免对z-index进行过度*/
    z-index:1;
    transform:translateX(100%);
  }
</style>

<template>
  <div class="xa-flex xa-box-vertical xa-page">
    <header class="xa-header">
      <div class="xa-icon-btn">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="title">这个是标题</div>
      <div class="xa-icon-btn">
        <i class="iconfont icon-fenxiang1"></i>
      </div>
    </header>
    <div class="xa-panel">
        <router-link  v-for="(demo,index) in demos" :to="demo.path" class="xa-list xa-box">
          <div class="xa-flex">
            <span>{{ demo.title }}</span>
          </div>
          <div><i class="iconfont icon-right" style="color:#cacace;"></i></div>
          <ripple></ripple>
        </router-link>
    </div>
    <div class="xa-btn xa-bg-red xa-width-100" @click="isShowToast = !isShowToast">
      点一下<ripple color="rgba(255,255,255,0.2)"></ripple>
    </div>
    <toast-text :show="isShowToast">toast测试,调用方法show=!show，固定时间3s</toast-text>
  </div>
</template>

<script>
  import {routes} from 'src/app.config.js'
  export default {
    data(){
      return {
        isShowToast:false,
        demos:routes.find(route => route.path === '/demo').children.map(item => {
          return {path:'/demo/'+item.path,title:item.meta.title || 'demo'}
        }).slice(1)
      }
    }
  }
</script>

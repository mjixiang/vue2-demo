<template>
  <div class="xa-flex xa-box-vertical">
    <figure class="xa-panel user-head xa-box">
      <div class="user-head-icon"></div>
      <figcaption class="xa-flex xa-txt-ellipsis">{{ queryData.name || '李积祥' }}</figcaption>
    </figure>
    <div class="xa-panel">
      <div class="xa-list user-list xa-box">
        <div class="xa-flex">
          <i class="iconfont icon-jushoucanggift xa-txt-red xa-txt-20" style="vertical-align:sub;"></i>
          <span>focus</span>
        </div>
        <div><i class="iconfont icon-right" style="color:#cacace;"></i></div>
      </div>
      <router-link to="/404" class="xa-list user-list xa-box">
        <div class="xa-flex">
          <span>404</span>
        </div>
        <div><i class="iconfont icon-right" style="color:#cacace;"></i></div>
        <ripple color="rgba(0,0,0,0.1)"></ripple>
      </router-link>
      <router-link to="/error?err=服务器响应失败&back=/user/index" class="xa-list user-list xa-box">
        <div class="xa-flex">
          <span>error</span>
        </div>
        <div><i class="iconfont icon-right" style="color:#cacace;"></i></div>
        <ripple></ripple>
      </router-link>
    </div>
    <div class="xa-flex xa-bg-white"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        queryData:{
          userName:'李积祥'
        }
      }
    },

  };
</script>

<style scoped>
  .user-head {
    padding: 15px 10px;
    height: 100px;
  }

  .user-head-icon {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: url('../../common/images/user_head_default.jpg') #eee no-repeat center;
    background-size: cover;
    margin-right: 15px;
  }

  .user-head figcaption {
    line-height: 70px;
    color: #333;
    font-size: 18px;
  }

  .user-list {
    height: 48px;
    padding: 13px 10px;
  }
</style>

/**
 * 项目配置文件
 * @authors lijixiang (820396305@qq.com)
 * @date    2016-10-02 23:12:31
 */

//项目标题
export const title = 'vue2'
//底部菜单
export const footerMenu = [
  {link:'/home/index',text:'主页',default:'icon-shouye2',active:'icon-shouye2'},
  {link:'/user/index',text:'我的',default:'icon-wode2',active:'icon-wode2'},
  {link:'/demo/index',text:'测试',default:'icon-shezhi2',active:'icon-shezhi2'}
]
//主页banner图地址
export const banners = [
  {img:require('common/images/app_banner_01.jpg'),url:''},
  {img:'//dn-placeholder.qbox.me/667x375/4CD964/fff',url:''},
  {img:'//dn-placeholder.qbox.me/667x375/FF2D55/fff',url:''}
]

//路由
export const routes = [
  {
    path:'/',
    redirect:'/home/index'
  },
  {
    path:'/home',
    component:resolve => require(['./view/home/home.vue'],resolve),
    children:[
      {
        path:'index',
        alias:'/',
        component:resolve => require(['./view/home/index.vue'],resolve),
        meta:{
          isShowFooter:true,
          title:'Vue 2'
        }
      },
    ]
  },
  {
    path:'/user',
    component:resolve => require(['./view/user/user.vue'],resolve),
    children:[
      {
        path:'index',
        alias:'/',
        component:resolve => require(['./view/user/index.vue'],resolve),
        meta:{
          isShowFooter:true,
          title:'用户${id}'
        }
      },
      {
        path:'setup',
        component:resolve => require(['./view/user/setup.vue'],resolve),
        meta:{
          //isShowFooter:true,
          title:'设置'
        }
      }
    ]
  },
  {
    path:'/demo',
    component:resolve => require(['./view/demo/demo.vue'],resolve),
    children:[
      {
        path:'index',
        alias:'/',
        component:resolve => require(['./view/demo/index.vue'],resolve),
        meta:{
          isShowFooter:true,
          title:'测试',
          silidLeft:true
        }
      },
      {
        path:'for',
        component:resolve => require(['./view/demo/for.vue'],resolve),
        meta:{
          title:'v-for'
        }
      },
      {
        path:'transition',
        component:resolve => require(['./view/demo/transition.vue'],resolve),
        meta:{
          title:'vue transition'
        }
      },
      {
        path:'sudoku',
        component:resolve => require(['./view/demo/sudoku.vue'],resolve),
        meta:{
          title:'vue sudoku'
        }
      },
      {
        path:'pingtu',
        component:resolve => require(['./view/demo/pingtu.vue'],resolve),
        meta:{
          title:'拼图'
        }
      }
    ]
  },
  {
    path:'/error',
    component:resolve => require(['./view/error/error.vue'],resolve),
    meta:{
      title:'错误'
    }
  },
  {
    path:'*',
    component:resolve => require(['./view/error/404.vue'],resolve),
    meta:{
      title:'404'
    }
  }
]

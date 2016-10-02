/**
 * 项目配置文件
 * @authors lijixiang (820396305@qq.com)
 * @date    2016-10-02 23:12:31
 */

//项目标题
export const title = 'vue2'
//路由
export const routes = [
    {
        path:'/',
        redirect: '/user/index'
    },
    {
        path:'/index/hello',
        component:resolve => require(['./view/index/hello.vue'], resolve),
        meta:{
            isShowFooter:true,
            title:'Vue2'
        }
    },
    {
        path:'/user',
        component:resolve => require(['./view/user/user.vue'], resolve),
        children:[
            {
                path:'index',
                alias: '/',
                component:resolve => require(['./view/user/index.vue'], resolve),
                meta:{
                    isShowFooter:true,
                    title:'用户中心'
                }
            },
            {
                path:'setup',
                component:resolve => require(['./view/user/setup.vue'], resolve),
                meta:{
                    isShowFooter:true,
                    title:'设置'
                }
            }
        ]
    },
    {
        path:'/index/world',
        component:resolve => require(['./view/index/world.vue'], resolve),
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/error',
        component:resolve => require(['./view/error/error.vue'], resolve),
        meta:{
            title:'错误'
        }
    },
    {
        path:'*',
        component:resolve => require(['./view/error/404.vue'], resolve),
        meta:{
            title:'404'
        }
    }
]
//底部菜单
export const footerMenu = [
    {link:'/index/hello',text:'主页',default:'icon-shouye2',active:'icon-shouye2'},
    {link:'/user/index',text:'我的',default:'icon-wode2',active:'icon-wode2'},
    {link:'/user/setup',text:'设置',default:'icon-shezhi2',active:'icon-shezhi2'}
]
<template>
    <router-link :to="$route.query.back?decodeURIComponent($route.query.back):$route.fullPath" replace  class="xa-flex xa-bg-white xa-box-center">
        <div class="xa-txt-center xa-txt-aaa" style="width:250px;margin-top:-100px;">
            <div style="line-height:initial;"><i class="iconfont icon-jinggao" style="font-size:60px;"></i></div>
            <div style="line-height:20px;padding:8px 0 30px 0;">
                <div style="margin:auto;display:inline-block;text-align:left;">{{ $route.query.err || '错误页面' }}</div>
            </div>
            <div class="xa-txt-ccc xa-txt-12" v-if="$route.query.back">请点击重试</div>
        </div>
    </div>
</template>
<template>
  <transition name="toast">
    <div class="xa-toast" v-show="show">
      <div>
          <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default:false
    }
  }
}
</script>

<style>
  .toast-enter-active,.toast-leave-active{
    transition:transform 0.3s,width 3s !important;
    display:flex !important;
    transform: scale(1);
  }
  .toast-enter,.toast-leave{
    transform: scale(0);
  }
</style>
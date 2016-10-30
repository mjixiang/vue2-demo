<template>
  <div class="xa-page">
    <button @click="shuffle">Shuffle</button>
    <!--动画的时候必须指定key-->
    <transition-group name="cell" tag="div" class="container">
      <div v-for="cell in cells" :key="cell.id" class="cell">
        {{ cell.number }}
      </div>
    </transition-group>
    <router-link to="/demo/pingtu">拼图</router-link>
  </div>
</template>
<script>
    export default{
      data(){
          return {
            cells: Array.apply(null, {length: 81})
              .map(function (_, index) {
                return {
                  id: index,
                  number: index % 9 + 1
                }
              })
          }
      },
      methods: {
        shuffle: function () {
          this.cells = this.cells.sort(() => {
              return Math.random() - 0.5
            });
        }
      }
    }
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 238px;
    margin-top: 10px;
  }
  .cell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .cell:nth-child(3n) {
    margin-right: 0;
  }
  .cell:nth-child(27n) {
    margin-bottom: 0;
  }
  .cell-move {
    transition: transform 1s;
  }
</style>

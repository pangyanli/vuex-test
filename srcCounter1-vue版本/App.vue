<!-- counter1案例：使用vue实现的版本 -->
<template>
  <div>
    <p>count {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if Odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd:function(){
        const count = this.count
        return count % 2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      // 增加
      increment(){
        const count = this.count
        this.count = count + 1
      },
      // 减少
      decrement(){
        const count = this.count
        this.count = count - 1
      },
      // 条件的增加
      incrementIfOdd(){
        const count = this.count
        if(count%2 === 1){
          this.count = count + 1
        }
      },
      // 异步增加
      incrementAsync(){
        setTimeout(() => {
          const count = this.count
          this.count = count + 1
        },1000)
      },
    }
  }
</script>

<style>

</style>

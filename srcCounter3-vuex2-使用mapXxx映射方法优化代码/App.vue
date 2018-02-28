<!-- counter2案例：使用vuex实现,使用mapXxx映射方法进行代码优化的版本2 -->
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
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default{
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
      /*// 显示count什么类型奇数或偶数
      evenOrOdd(){
       return  this.$store.getters.evenOrOdd
      } ,
      count(){
        return this.$store.state.count
      }*/
    },
    methods: {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
     /* // 增加
      increment(){
        this.$store.dispatch('increment')
      },
      // 减少
      decrement(){
        this.$store.dispatch('decrement')
      },
      // 条件的增加
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      // 异步增加
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      },*/
    }
  }
</script>

<style>

</style>

<!-- counter2案例：使用vuex实现没有做任何代码优化的版本 -->
<template>
  <div>
    <p>count {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if Odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default{
    computed: {
      evenOrOdd(){
       return  this.$store.getters.evenOrOdd
      } ,
//      count(){
//        return this.$store.state.count
//      }
    },
    methods: {
      // 增加
      increment(){
        /*const count = this.count
        this.count = count + 1*/
        this.$store.dispatch('increment')
      },
      // 减少
      decrement(){
       /* const count = this.count
        this.count = count - 1*/
        this.$store.dispatch('decrement')
      },
      // 条件的增加
      incrementIfOdd(){
       /* const count = this.count
        if(count%2 === 1){
          this.count = count + 1
        }*/
        this.$store.dispatch('incrementIfOdd')
      },
      // 异步增加
      incrementAsync(){
        /*setTimeout(() => {
          const count = this.count
          this.count = count + 1
        },1000)*/
        this.$store.dispatch('incrementAsync')
      },
    }
  }
</script>

<style>

</style>

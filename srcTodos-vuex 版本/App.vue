<!-- 全部使用props传递数据的todo版本 -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader/>
      <todoMain/>
      <todoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default{
    mounted(){
      // 发送命令给action: 异步获取保存todos数据并显示
      this.$store.dispatch('reqTodos')
    },
    components: {  // 将组件映射成标签，因为Header这些都是关键字，所以不要直接使用
      todoHeader: Header,
      todoMain: Main,
      todoFooter: Footer,
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

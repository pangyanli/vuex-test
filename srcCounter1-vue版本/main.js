/*
    JS入口文件：创建vue实例对象
*/
import Vue from 'vue'
import App from './App.vue'  // 1、引入标签

new Vue({
  el: '#app',
  components: { // 2、将组件映射成标签
    App
  },
  // 3、使用标签
  template: '<App/>'
})

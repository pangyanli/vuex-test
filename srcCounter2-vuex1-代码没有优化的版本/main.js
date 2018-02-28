/*
    JS入口文件：创建vue实例对象
*/
import Vue from 'vue'
// 1、引入标签
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  // 2、将组件映射成标签
  components: {
    App
  },
  // 3、使用标签
  template: '<App/>',
  // 4、配置store对象，会给vm/组件对象都添加$store对象属性，该对象中包含state/getters/dispatch方法
  store
})

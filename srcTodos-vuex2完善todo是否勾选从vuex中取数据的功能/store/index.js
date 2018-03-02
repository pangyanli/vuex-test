/*
  vuex的核心管理对象store模块
*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/*
  声明使用插件,内部会调用install方法安装插件，内部会自动给
  vm/组件对象都添加 $store 属性对象，该对象中会包含state/getters属性和
  dispatch方法
*/
Vue.use(Vuex)

//创建store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

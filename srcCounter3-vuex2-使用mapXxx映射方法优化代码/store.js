/*
  vuex的核心管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex'

// vuex是vue的插件，使用前必须要声明
Vue.use(Vuex)

const state = {
  count: 0 // 初始化状态
}
const mutations = {
  // 大小写字母转换的快捷键ctrl+shift+u
  // 增加
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
const actions = {
  // 增加
  increment({commit}){ // 因为每次加的都是1，所以就不传第二个参数了
    commit('INCREMENT')
  },
  // 减少
  decrement({commit}){
    commit('DECREMENT')
  },
  // 条件增加
  incrementIfOdd({commit, state}){
    const count = state.count
    if(count % 2 === 1){
      commit('INCREMENT')
    }
  },
  // 模拟异步增加
  incrementAsync({commit, state}){
    setTimeout(() => {
      const count = state.count
      commit('INCREMENT')
    },1000)
  }
}
const getters = {
  evenOrOdd(state){
    const count = state.count
    return count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更state新状态mutation函数的对象
  actions, // 包含多个事件回调函数的对象
  getters  // 包含多个getter计算属性函数的对象
})

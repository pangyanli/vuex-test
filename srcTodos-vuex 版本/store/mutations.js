import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETED,
  RECIEVE_TODOS
} from './mutation-types'

export default {
  // 注意接收的是字符串add_todo，所以ADD_TODO需要用[]包起来表示是个变量
  // 1、添加todo事项
  [ADD_TODO](state, {todo}){
    state.todos.unshift(todo)
  },
  // 2、删除列表中的todo事项
  [DELETE_TODO](state, {index}){
    state.todos.splice(index, 1)
  },
  // 3、全选或者全不选
  [SELECT_ALL](state, {check}){
    // 更新所有的todo的completed
    state.todos.forEach(todo => todo.completed = check)
  },
  // 4、删除已完成的todo事项
  [DELETE_COMPLETED](state){
    // 过滤产生新的数组并更新
    state.todos = state.todos.filter(todo => !todo.completed)
  },
  // 5、异步获取todos并更新状态
  [RECIEVE_TODOS] (state,{todos}){
    state.todos = todos
  }
}

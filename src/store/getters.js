import localStorageUtil from '../utils/localStorageUtil'
export  default {
  totalCount(state){
    return state.todos.length
  },
  completedCount(state){
    return state.todos.reduce((preTodo,todo) => preTodo + (todo.completed ? 1 : 0),0)
  },
  isAllCompleted(state,getters){ // 第一个参数必须是state，
    return getters.completedCount === getters.totalCount && getters.totalCount > 0
  }
}

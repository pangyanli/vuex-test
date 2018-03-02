export default {
  // 1、todo总数量
  totalCount(state){
    return state.todos.length

  },
  // 2、已完成的todo数量
  completedCount(state){
    return state.todos.reduce((preTodo, todo) => preTodo + (todo.completed ? 1 : 0 ),0)
  },
  // 3、判断是否全选
  isAllCompleted(state,getters){ // 注意，第一个参数必须是state,但是因为state中只有todos,而getters中有
    return getters.completedCount === getters.totalCount && getters.totalCount>0
  }

}

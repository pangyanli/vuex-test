import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETED,
  RECIEVE_TODOS,
  CHECK_TODO
} from './mutation-types'
import localStorageUtil from '../utils/localStorageUtil'

export default {
  // 1、添加todo事项
  addTodo({commit}, todo){
    commit(ADD_TODO, {todo})
  },
  // 2、删除列表中的todo事项
  deleteTodo({commit}, index){
    commit(DELETE_TODO, {index})
  },
  //3、全选或者全不选
  selectAll({commit}, check){
    commit(SELECT_ALL, {check})
  },
  // 4、删除已完成的todo事项
  deleteCompleted({commit}){
    commit(DELETE_COMPLETED)
  },
  // 5、异步获取todos并更新状态
  reqTodos({commit}){
    setTimeout(() => { // 模拟异步
      //读取localStorage中保存的数据
      const todos = localStorageUtil.readTodos()
      commit(RECIEVE_TODOS,{todos})
    },1000)
  },
  // 6、是否勾选某个todo
  checkTodo({commit},{todo,check}){
    commit(CHECK_TODO,{todo,check})
  }

}

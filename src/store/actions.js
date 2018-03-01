import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETED,
  RECIEVE_TODOS
} from './mutation-types'
import localStorageUtil from '../utils/localStorageUtil'
export  default {
  addTodo({commit},todo){
    commit(ADD_TODO, {todo})
  },
  deleteTodo({commit},index){
    commit(DELETE_TODO,{index})
  },
  selectAll({commit},check){
    commit(SELECT_ALL,{check})
  },
  deleteCompleted({commit}){
    commit(DELETE_COMPLETED)
  },
  reqTodos({commit}){
    setTimeout(() => {
      const todos = localStorageUtil.readTodos()
      commit(RECIEVE_TODOS, todos)
    },1000)
  }
}

<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allCompleted"/>
    </label>
    <span>
          <span>已完成{{completedCount}}</span> / 全部 {{totalCount}}
    </span>
    <button class="btn btn-danger" v-show="completedCount>0" @click="clearTodo">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default{
    computed: {
      ...mapGetters(['totalCount', 'completedCount']),
      // 是否全选或全不选
      allCompleted:{  // allCompleted 是boolean值
        get(){
          return this.$store.getters.isAllCompleted
        },
       set(value){ // value 是boolean类型
         // 对所有todos进行全选或者全不选
          //this.selectAll(value)
         this.$store.dispatch('selectAll',value)
       }
      }
    },
    methods: {
      clearTodo(){
        if(window.confirm(`确定要清除选已完成的todo吗？`)){
          this.$store.dispatch('deleteCompleted')
        }
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>

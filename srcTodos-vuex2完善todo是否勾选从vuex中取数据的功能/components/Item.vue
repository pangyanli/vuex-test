<template>
  <!-- 注意onmouseover/onmouseout（会多次触发） 与 onmouseenter/onmouseleave的区别 （只触发一次）-->
    <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <label>
        <!--<input type="checkbox" v-model="todo.completed"/>-->
        <!-- 因为这里是用v-model双向绑定数据的，如果直接todo.completed读取就违背了
        使用vuex管理数据（数据应该从vuex中取），所以不应该在这里直接操作todo了 -->
        <input type="checkbox" v-model="isCheck"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script>
  export default{
    props: {
      todo: Object,
      index: Number
    },
    data(){
      return {
        bgColor: '#fff',
        isShow: false
      }
    },
    computed: {
      // 是否勾选某个对应的todo
      isCheck:{
        get(){
          return this.todo.completed
        },
        set(value){
          // 要知道显示哪一个todo的勾选，所以应该传个index，也可以直接传递todo
          this.$store.dispatch('checkTodo',{todo:this.todo,check:value})
        }
      }
    },
    methods: {
      handleEnter(isEnter){  // isEnter 是boolean类型
        if(isEnter){
          this.bgColor = '#ddd',
          this.isShow = true
        }else{
          this.bgColor = '#fff',
          this.isShow = false
        }
      },
      deleteItem(){
        const {todo, index} = this
        if(window.confirm(`确定要删除${todo.title}吗？`)){
          this.$store.dispatch('deleteTodo', index)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>

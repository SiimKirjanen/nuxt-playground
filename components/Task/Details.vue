<script lang="ts" setup>
    defineProps(['task'])
    import { useTaskStore } from './../../stores/TaskStore'
    
    const taskStore = useTaskStore()
</script>

<template>  
   <li class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons" 
        @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i 
        class="material-icons"
        :class="{active: task.isFav}" 
        @click="taskStore.toggleFav(task.id)">
        favorite
      </i>
    </div>
  </li>
</template>

<style scoped>
  .task {
    padding: 8px 20px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
    box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .task h3, .task .icons {
    display: inline-block;
  }
  .task i.active {
    color: #ff005d;
  }
  .task i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
  }
</style>

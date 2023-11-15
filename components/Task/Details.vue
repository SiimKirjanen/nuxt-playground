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
    border-radius: 4px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons {
    display: flex;
    align-items: center;
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

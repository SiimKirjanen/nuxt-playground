<script lang="ts" setup>
     import { reactive } from 'vue'
    import { useTaskStore } from '../../stores/TaskStore'

    const taskStore = useTaskStore()
    const taskForm = reactive({
      taskTitle: 'tere tere'
    })

    const handleSubmit = () => {
      console.log('got title ', taskForm.taskTitle)
      if (taskForm.taskTitle.length > 0) {
        
        taskStore.addTask({
          title: taskForm.taskTitle,
          isFav: false,
          id: Math.floor(Math.random() * 1000000)
        })
        taskForm.taskTitle  = ""
      }else {
       
      }
    }
</script>

<template>
  <h2>Add task</h2>

  <form>
    <input v-model="taskForm.taskTitle" type="text" />
    <button @click.prevent="handleSubmit">Submit</button>
  </form>
</template>

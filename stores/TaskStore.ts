import { defineStore } from 'pinia'
import Storage from './../utils/storage'

type Task = {
  title: string
  isFav: boolean
  id: number
}

const taskStorage = new Storage<Task[]>('task')

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    loading: true
  }),
  getters: {
    favs(): Task[] {
      return this.tasks.filter((t) => t.isFav)
    },
    favCount(): number {
      return this.favs.length;
    },
    totalCount(state): number {
      return state.tasks.length
    }
  },
  actions: {
    getTasks() {
      this.tasks = taskStorage.get() || [{title: 'Test', isFav: false, id: 123455}]
      this.loading = false
    },
    addTask(task: Task) {
      this.tasks.push(task)
      taskStorage.set(this.tasks)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id
      })
      taskStorage.set(this.tasks)
    },
    toggleFav(id: number) {
      const task = this.tasks.find((t) => t.id === id)

      if (task) {
        task.isFav = !task.isFav
      }
      taskStorage.set(this.tasks)
    }
  }
})
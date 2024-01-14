<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { useTaskStore } from './../../stores/TaskStore';

const taskStore = useTaskStore();
const filterFavs = ref(false);
const tasks = computed(() => {
  return filterFavs.value ? taskStore.favs : taskStore.tasks;
});

onMounted(() => {
  taskStore.getTasks();
});
</script>

<template>
  <template v-if="taskStore.loading">
    <h1>Loading...</h1>
  </template>
  <template v-else>
    <div class="tasks-wrap">
      <p>
        You have {{ taskStore.totalCount }} tasks left to do. Favourite tasks
        count is {{ taskStore.favCount }}
      </p>
      <div class="filter-switch">
        <label
          >Toggle fav tasks <UToggle v-model="filterFavs" color="primary"
        /></label>
      </div>
      <transition name="switch">
        <div v-if="tasks.length">
          <transition-group class="tasks-list" tag="ul" name="list" appear>
            <TaskDetails v-for="task in tasks" :key="task.id" :task="task" />
          </transition-group>
        </div>
        <div v-else>
          <UAlert
            icon="i-heroicons-command-line"
            description="Woohoo, nothing left todo!"
            title="Heads up!"
            color="primary"
            variant="solid"
          />
        </div>
      </transition>
    </div>
  </template>
</template>

<style scoped>
.tasks-wrap {
  position: relative;
}
.tasks-list {
  padding: 0;
  position: relative;
}
.filter-switch {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 16px;
}
/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.4s ease;
  /* position: absolute; */ /* for move transition after item leaves */
}
.list-move {
  transition: all 0.3s ease;
}

/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-active {
  transition: all 0.5s ease;
}
.switch-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}
</style>

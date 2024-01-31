<script lang="ts" setup>
import { reactive } from 'vue';
import type { FormError } from '#ui/types';
import { useTaskStore } from '../../../stores/TaskStore';

const taskStore = useTaskStore();
const state = reactive({
  taskTitle: ''
});

const handleSubmit = () => {
  taskStore.addTask({
    title: state.taskTitle,
    isFav: false,
    id: Math.floor(Math.random() * 1000000)
  });
  state.taskTitle = '';
};

const validate = (state: any): FormError[] => {
  const errors = [];

  if (!state.taskTitle) errors.push({ path: 'title', message: 'Required' });

  return errors;
};
</script>

<template>
  <h2 class="text-center">Add task</h2>

  <UForm
    :validate="validate"
    :state="state"
    class="mb-4 space-y-4"
    @submit="handleSubmit"
  >
    <UFormGroup label="Title" name="title">
      <UInput v-model="state.taskTitle" />
    </UFormGroup>
    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

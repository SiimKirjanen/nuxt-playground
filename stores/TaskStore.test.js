import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTaskStore } from './TaskStore';

describe('Task Store', () => {
  const fakeTask = {
    title: 'Test title',
    isFav: true,
    id: 123
  };
  let store = null;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useTaskStore();
  });

  it('should have initial state', () => {
    expect(store.tasks).toEqual([]);
    expect(store.loading).toBe(true);
  });

  it('should add a task', () => {
    store.addTask(fakeTask);
    expect(store.tasks).toEqual([fakeTask]);
  });

  it('should delete a task', () => {
    store.addTask(fakeTask);
    store.deleteTask(fakeTask.id);

    expect(store.tasks).toEqual([]);
  });

  it('should toggle fav', () => {
    store.addTask({
      ...fakeTask,
      isFav: false
    });

    expect(store.tasks).toEqual([
      {
        ...fakeTask,
        isFav: false
      }
    ]);

    store.toggleFav(fakeTask.id);
    expect(store.tasks).toEqual([fakeTask]);
  });
});

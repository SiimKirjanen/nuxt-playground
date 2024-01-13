import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import TaskDetails from './TaskDetails.vue';
import { useTaskStore } from './../../../stores/TaskStore';

describe('TaskDetails', () => {
  let fakeTask = null;
  let wrapper = null;

  beforeEach(() => {
    fakeTask = {
      id: 5,
      title: 'test-title',
      isFav: true
    };
    wrapper = mount(TaskDetails, {
      props: {
        task: fakeTask
      },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    });
  });

  it('should mount TaskDetails', () => {
    expect(wrapper.find('h3').text()).toBe(fakeTask.title);
  });

  it('should dispatch action when favourite clicked', async () => {
    const store = useTaskStore();

    await wrapper.findAll('i').at(1).trigger('click');
    expect(store.toggleFav).toHaveBeenCalledTimes(1);
    expect(store.toggleFav).toHaveBeenCalledWith(fakeTask.id);
  });

  it('should dispatch action when delete clicked', async () => {
    const store = useTaskStore();

    await wrapper.findAll('i').at(0).trigger('click');
    expect(store.deleteTask).toHaveBeenCalledTimes(1);
    expect(store.deleteTask).toHaveBeenCalledWith(fakeTask.id);
  });
});

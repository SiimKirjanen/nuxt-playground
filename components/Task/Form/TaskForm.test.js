import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import TaskForm from "./TaskForm.vue";
import { useTaskStore } from "./../../../stores/TaskStore";

describe("TaskForm", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(TaskForm, {
      shallow: true,
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });

  it("should mount TaskForm", () => {
    expect(wrapper.find("h2").text()).toBe("Add task");
  });

  it("should call addTask", () => {
    const store = useTaskStore();

    expect(wrapper.find("h2").text()).toBe("Add task");
    wrapper.vm.state.taskTitle = "siim";
    wrapper.vm.handleSubmit();

    expect(store.addTask).toHaveBeenCalledWith({
      title: "siim",
      isFav: false,
      id: expect.any(Number),
    });
  });
});

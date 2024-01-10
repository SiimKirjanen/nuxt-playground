import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "./Alert.vue";

describe("Alert", () => {
  it("should mount Alert", () => {
    const wrapper = mount(Alert);

    expect(wrapper.text()).toContain("This is an alert component");
  });
});

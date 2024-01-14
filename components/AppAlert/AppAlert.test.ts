import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppAlert from './AppAlert.vue';

describe('AppAlert', () => {
  it('should mount AppAlert', () => {
    const wrapper = mount(AppAlert);

    expect(wrapper.text()).toContain('This is an alert component');
  });
});

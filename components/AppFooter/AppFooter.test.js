import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppFooter from './AppFooter.vue';

describe('AppFooter', () => {
  it('should mount AppFooter', () => {
    const wrapper = mount(AppFooter, {
      shallow: true
    });

    expect(wrapper.findAllComponents({ name: 'NuxtLink' }).length).toBe(2);
    expect(wrapper.findAll('li').length).toBe(2);
    expect(
      wrapper.findAllComponents({ name: 'NuxtLink' })[0].attributes('to')
    ).toBe('/');
    expect(
      wrapper.findAllComponents({ name: 'NuxtLink' })[1].attributes('to')
    ).toBe('/products');
  });
});

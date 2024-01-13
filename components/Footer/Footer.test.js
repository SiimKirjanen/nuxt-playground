import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from './Footer.vue';

describe('Footer', () => {
  it('should mount Footer', () => {
    const wrapper = mount(Footer, {
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

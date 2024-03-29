import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import AppHeader from './AppHeader.vue';

mockNuxtImport('useLocalePath', () => {
  return () => (path) => path;
});

vi.mock('vue-i18n', () => {
  return {
    useI18n: () => {
      return {
        locale: 'en'
      };
    }
  };
});

describe('AppHeader', () => {
  it('should mount AppHeader', () => {
    const wrapper = mount(AppHeader, {
      shallow: true,
      global: {
        stubs: {
          NuxtLink: {
            template: "<div data-test='link'><slot></slot></div>"
          }
        },
        mocks: {
          $t: (msg) => msg
        }
      }
    });

    expect(wrapper.findAll('div[data-test="link"]').length).toBe(11);
    expect(wrapper.findAll('li').length).toBe(10);

    expect(wrapper.findAll('div[data-test="link"]')[0].attributes('to')).toBe(
      '/'
    );
    expect(wrapper.findAll('div[data-test="link"]')[1].attributes('to')).toBe(
      '/'
    );
    expect(wrapper.findAll('div[data-test="link"]')[2].attributes('to')).toBe(
      '/products'
    );
    expect(wrapper.findAll('div[data-test="link"]')[3].attributes('to')).toBe(
      '/tasks'
    );
    expect(wrapper.findAll('div[data-test="link"]')[4].attributes('to')).toBe(
      '/examples'
    );
    expect(wrapper.findAll('div[data-test="link"]')[5].attributes('to')).toBe(
      '/swr'
    );
    expect(wrapper.findAll('div[data-test="link"]')[6].attributes('to')).toBe(
      '/isr'
    );
    expect(wrapper.findAll('div[data-test="link"]')[7].attributes('to')).toBe(
      '/spa'
    );
    expect(wrapper.findAll('div[data-test="link"]')[8].attributes('to')).toBe(
      '/protected'
    );
    expect(wrapper.findAll('div[data-test="link"]')[9].attributes('to')).toBe(
      '/prerender'
    );
    expect(wrapper.findAll('div[data-test="link"]')[10].attributes('to')).toBe(
      '/login'
    );
  });
});

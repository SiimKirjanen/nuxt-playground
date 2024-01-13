import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductCard from './ProductCard.vue';

describe('ProductCard', () => {
  const fakeProduct = {
    id: 5,
    title: 'test',
    image: 'test-img'
  };

  it('should mount ProductCard', () => {
    const wrapper = mount(ProductCard, {
      shallow: true,
      props: {
        product: fakeProduct
      }
    });

    expect(wrapper.find('img').attributes('src')).toBe(fakeProduct.image);
    expect(wrapper.text()).toContain(fakeProduct.title);

    expect(
      wrapper.findAllComponents({ name: 'NuxtLink' })[0].attributes('to')
    ).toBe(`/products/${fakeProduct.id}`);
  });
});

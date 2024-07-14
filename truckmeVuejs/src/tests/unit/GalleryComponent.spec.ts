import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import GalleryComponent from '@/components/HomeView/GalleryComponent.vue';

const expectedImages = [
  '/src/assets/images/carousel/repom.png',
  '/src/assets/images/carousel/chubb.png',
  '/src/assets/images/carousel/insert-seguros.png'
];

const waitForAnimation = () => new Promise(resolve => setTimeout(resolve, 600));

describe('GalleryComponent', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(async () => {
    wrapper = mount(GalleryComponent);
    await wrapper.vm.$nextTick();
  });

  it('renderiza corretamente com o título e os slides iniciais', async () => {
    expect(wrapper.find('h2').text()).toBe('Parceiros');

    await wrapper.vm.$nextTick();

    const slides = wrapper.findAll('.carousel-item img');
    expect(slides.length).toBe(3);

    expect(slides[0].attributes('src')).toBe(expectedImages[0]);
  });

  it('avança para o próximo slide corretamente', async () => {
    await wrapper.find('#next').trigger('click');

    await waitForAnimation();

    expect(wrapper.vm.currentIndex).toBe(1);

    const slides = wrapper.findAll('.carousel-item img');
    expect(slides[1].attributes('src')).toBe(expectedImages[1]);
  });

  it('retorna para o slide anterior corretamente', async () => {
    await wrapper.find('#next').trigger('click');

    await waitForAnimation();

    await wrapper.find('#prev').trigger('click');

    await waitForAnimation();

    expect(wrapper.vm.currentIndex).toBe(0);

    const slides = wrapper.findAll('.carousel-item img');
    expect(slides[0].attributes('src')).toBe(expectedImages[0]);
  });

  it('não avança além do último slide', async () => {
    for (let i = 0; i < expectedImages.length; i++) {
      await wrapper.find('#next').trigger('click');
      await waitForAnimation();
    }
  
    expect(wrapper.vm.currentIndex).toBe(expectedImages.length - 1);
  
    const slides = wrapper.findAll('.carousel-item img');
    expect(slides[expectedImages.length - 1].attributes('src')).toBe(expectedImages[expectedImages.length - 1]);
  });
  

  it('não retorna antes do primeiro slide', async () => {
    await wrapper.find('#prev').trigger('click');

    expect(wrapper.vm.currentIndex).toBe(0);

    const slides = wrapper.findAll('.carousel-item img');
    expect(slides[0].attributes('src')).toBe(expectedImages[0]);
  });
});

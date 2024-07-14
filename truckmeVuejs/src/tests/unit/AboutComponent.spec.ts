import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ContactForm from '@/components/HomeView/ContactFormComponent.vue';

describe('ContactForm', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
      wrapper = mount(ContactForm);
    });

  it('deve renderizar corretamente os campos do formulário', async () => {

    const nameInput = wrapper.find('#name');
    const emailInput = wrapper.find('#email');
    const messageTextarea = wrapper.find('#message');
    const submitButton = wrapper.find('#submit');

    expect(nameInput.exists()).toBe(true);
    expect(emailInput.exists()).toBe(true);
    expect(messageTextarea.exists()).toBe(true);
    expect(submitButton.exists()).toBe(true);
  });

  it('deve permitir o preenchimento dos campos', async () => {

    await wrapper.find('#name').setValue('John Doe');
    await wrapper.find('#email').setValue('john.doe@example.com');
    await wrapper.find('#message').setValue('Mensagem de teste');

    expect((wrapper.vm as any).formData.name).toBe('John Doe');
    expect((wrapper.vm as any).formData.email).toBe('john.doe@example.com');
    expect((wrapper.vm as any).formData.message).toBe('Mensagem de teste');
  });

  it('deve validar os campos e exibir mensagens de erro', async () => {
    const wrapper = mount(ContactForm);

    await wrapper.find('form').trigger('submit.prevent');

    await wrapper.vm.$nextTick();

    const errorDivs = wrapper.findAll('.error');
    expect(errorDivs.length).toBe(3);

    expect(errorDivs[0].text()).toBe('Por favor, insira seu nome.');
    expect(errorDivs[1].text()).toBe('Por favor, insira seu email.');
    expect(errorDivs[2].text()).toBe('Por favor, insira uma mensagem.');

    await wrapper.find('#name').setValue('a'.repeat(101));
    await wrapper.find('#email').setValue('invalidemail');
    await wrapper.find('#message').setValue('a'.repeat(256));

    await wrapper.find('form').trigger('submit.prevent');

    await wrapper.vm.$nextTick();

    expect(errorDivs[0].text()).toContain('O nome deve ter no máximo 100 caracteres.');
    expect(errorDivs[1].text()).toContain('Por favor, insira um email válido.');
    expect(errorDivs[2].text()).toContain('A mensagem deve ter no máximo 255 caracteres.');

    await wrapper.find('#email').setValue('a'.repeat(101) + '@email.com');

    await wrapper.find('form').trigger('submit.prevent');

    await wrapper.vm.$nextTick();

    expect(errorDivs[1].text()).toContain('O email deve ter no máximo 100 caracteres.');
  });
  
  it('deve enviar o formulário com sucesso', async () => {
    await wrapper.find('#name').setValue('John Doe');
    await wrapper.find('#email').setValue('john.doe@example.com');
    await wrapper.find('#message').setValue('Mensagem de teste');

    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('#status-message').isVisible()).toBe(true);
    await wrapper.vm.$nextTick();

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(wrapper.find('#status-message').exists()).toBe(true);
    expect(wrapper.find('#status-message').classes()).toContain('success');
    expect(wrapper.find('#status-message').text()).toBe('Mensagem enviada com sucesso!');
  });
});

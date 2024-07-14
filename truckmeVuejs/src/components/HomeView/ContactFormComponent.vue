<template>
  <section id="contact">
    <div>
      <div>
        <div>
          <img src="@/assets/images/contact.png" alt="Entre em contato" />
        </div>
        <h3>Entre em contato</h3>
        <p>
          Estamos aqui para ajudar! Entre em contato conosco para solucionar suas necessidades de
          transporte.
        </p>
      </div>
      <form id="contact-form" @submit.prevent="submitForm">
        <div>
          <label for="name">Nome<span> *</span></label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            maxlength="100"
            v-model="formData.name"
            :class="{ invalid: errors.name }"
          />
          <div class="error" v-if="errors.name">{{ errors.name }}</div>
        </div>
        <div>
          <label for="email">E-mail<span> *</span></label>
          <input
            id="email"
            type="email"
            placeholder="contato@exemplo.com"
            maxlength="100"
            v-model="formData.email"
            :class="{ invalid: errors.email }"
          />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div>
          <label for="message">Mensagem<span> *</span></label>
          <textarea
            id="message"
            placeholder="Sua mensagem"
            maxlength="255"
            v-model="formData.message"
            :class="{ invalid: errors.message }"
          ></textarea>
          <div class="error" v-if="errors.message">{{ errors.message }}</div>
        </div>
        <button id="submit" :disabled="submitting" :class="{ disabled: submitting }">
          {{ submitting ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>
      <div id="status-message" :class="statusClass">{{ statusMessage }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type FormType = {
  name: string
  email: string
  message: string
}

const formData = ref<FormType>({
  name: '',
  email: '',
  message: ''
})

const errors = ref<FormType>({
  name: '',
  email: '',
  message: ''
})

const submitting = ref<boolean>(false)
const statusMessage = ref<string>('')
const statusClass = ref<string>('')

function showError(field: keyof FormType, message: string): void {
  errors.value[field] = message
  return
}

function showStatusMessage(message: string, type: string): void {
  statusMessage.value = message
  statusClass.value = type

  setTimeout(() => {
    statusMessage.value = ''
    statusClass.value = ''
  }, 5000)
  return
}

function removeErrorMessages(): void {
  errors.value = {
    name: '',
    email: '',
    message: ''
  }
  return
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function submitForm(): void {
  removeErrorMessages()

  let isValid = true

  if (formData.value.name.trim() === '') {
    showError('name', 'Por favor, insira seu nome.')
    isValid = false
  } else if (formData.value.name.length > 100) {
    showError('name', 'O nome deve ter no máximo 100 caracteres.')
    isValid = false
  }

  if (formData.value.email.trim() === '') {
    showError('email', 'Por favor, insira seu email.')
    isValid = false
  } else if (!isValidEmail(formData.value.email.trim())) {
    showError('email', 'Por favor, insira um email válido.')
    isValid = false
  } else if (formData.value.email.length > 100) {
    showError('email', 'O email deve ter no máximo 100 caracteres.')
    isValid = false
  }

  if (formData.value.message.trim() === '') {
    showError('message', 'Por favor, insira uma mensagem.')
    isValid = false
  } else if (formData.value.message.length > 255) {
    showError('message', 'A mensagem deve ter no máximo 255 caracteres.')
    isValid = false
  }

  if (isValid) {
    // Simulação de envio para o backend
    submitting.value = true
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: formData.value.name + formData.value.email,
        body: formData.value.message,
        userId: 1
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao enviar mensagem.')
        }
        return response.json()
      })
      .then(() => {
        formData.value = {
          name: '',
          email: '',
          message: ''
        }
        showStatusMessage('Mensagem enviada com sucesso!', 'success')
      })
      .catch((error) => {
        console.error('Erro:', error)
        showStatusMessage('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error')
      })
      .finally(() => {
        submitting.value = false
      })
  }
}
</script>

<style scoped>
#contact {
  padding: 75px 0px;
}
#contact > div {
  width: 1080px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
#contact > div > div > div:first-child {
  display: flex;
  justify-content: center;
}
#contact > div > div {
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
#contact > div form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 615px;
}
#contact > div form input,
#contact > div form textarea {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #d2d5da;
  -webkit-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#contact > div form textarea {
  height: 150px;
}
#contact > div form label {
  position: absolute;
  top: -12px;
  left: 10px;
  font-weight: 500;
  font-size: 0.9rem;
  background: var(--truck-white);
}
#contact > div form label span {
  color: red;
}
#contact > div form button {
  background-color: var(--truck-orange);
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--truck-white);
  border-radius: 8px;
  height: 60px;
  cursor: pointer;
  transition: background 0.2s linear;
}
#contact > div form button:hover {
  background-color: #973014;
}
#contact > div form div {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
}
#contact > div form input.invalid,
#contact > div form textarea.invalid {
  border: 1px solid red;
}
#status-message {
  display: none;
}
.error {
  color: red;
  font-size: 0.875em;
  display: block;
}
.success {
  color: green;
  font-size: 0.875em;
  display: block;
}
.disabled {
  cursor: not-allowed;
  background: var(--truck-gray) !important;
}
@media (max-width: 1080px) {
  #contact > div {
    width: 100%;
  }
  #contact {
    padding: 75px 15px;
  }
}
@media (max-width: 768px) {
  #contact > div form {
    width: 100%;
  }
}
</style>

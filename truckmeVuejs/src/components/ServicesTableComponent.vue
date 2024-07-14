<template>
    <section id="services">
      <div>
        <h2>Serviços</h2>
  
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :value="service.value"
        />
      </div>
    </section>
  </template>

<script setup lang="ts">
import type { Component } from 'vue'

import ServiceCard from './ServiceCardComponent.vue'

import PadlockIcon from './icons/PadlockIcon.vue'
import ComplianceIcon from './icons/ComplianceIcon.vue'
import ContractIcon from './icons/ContractIcon.vue'
import ContractSearchIcon from './icons/ContractSearchIcon.vue'

type Service = {
  icon: Component
  title: string
  description: string
  value: number
}

const services: Array<Service> = [
  {
    icon: PadlockIcon,
    title: 'Segurança da Carga',
    description:
      'Garantimos a integridade das suas mercadorias durante todo o processo de transporte.',
    value: 800
  },
  {
    icon: ComplianceIcon,
    title: 'Compliance em Negociações',
    description:
      'Nossas operações seguem rigorosamente todas as normas e regulamentos, assegurando transparência.',
    value: 900
  },
  {
    icon: ContractIcon,
    title: 'Contratos de Frete',
    description:
      'Oferecemos contratos de frete claros e justos, adaptados às necessidades de cada cliente.',
    value: 1000
  },
  {
    icon: ContractSearchIcon,
    title: 'Documentos Fiscais',
    description:
      'Gerenciamento completo dos documentos fiscais necessários para o transporte de cargas.',
    value: 400
  }
]
</script>

<style scoped>
#services {
    width: 100%;
    background-color: #1B252D;
    padding: 75px 0px;
}
#services > div {
    width: 1080px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
#services h2 {
    color: var(--truck-white);
    font-size: 2rem;
}
@media (max-width: 1080px) {
    #services > div {
        width: 100%;
    }
    #services > div h2 {
        text-align: center;
    }
    #services {
        padding: 75px 15px;
    }
}
@media (max-width: 920px) {
    .card {
        flex-direction: column;
        row-gap: 20px;
        padding: 30px;
    }
    .card > div:first-child {
        flex-direction: column;
        text-align: center;
        row-gap: 20px;
    }
}
</style>

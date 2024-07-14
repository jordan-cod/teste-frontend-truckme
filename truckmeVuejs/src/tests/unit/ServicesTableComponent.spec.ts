import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import ServicesComponent from '@/components/HomeView/ServicesTableComponent.vue';
import ServiceCardComponent from '@/components/HomeView/ServiceCardComponent.vue';
import PadlockIcon from '@/components/icons/PadlockIcon.vue';
import ComplianceIcon from '@/components/icons/ComplianceIcon.vue';
import ContractIcon from '@/components/icons/ContractIcon.vue';
import ContractSearchIcon from '@/components/icons/ContractSearchIcon.vue';

type Service = {
  icon: typeof PadlockIcon;
  title: string;
  description: string;
  value: number;
};

describe('ServicesComponent', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(ServicesComponent);
  });

  it('renderiza corretamente com o título e os serviços iniciais', () => {
    expect(wrapper.find('h2').text()).toBe('Serviços');

    const serviceCards = wrapper.findAllComponents(ServiceCardComponent);
    expect(serviceCards.length).toBe(4);

    const services: Service[] = [
      {
        title: 'Segurança da Carga',
        description: 'Garantimos a integridade das suas mercadorias durante todo o processo de transporte.',
        value: 800,
        icon: PadlockIcon,
      },
      {
        title: 'Compliance em Negociações',
        description: 'Nossas operações seguem rigorosamente todas as normas e regulamentos, assegurando transparência.',
        value: 900,
        icon: ComplianceIcon,
      },
      {
        title: 'Contratos de Frete',
        description: 'Oferecemos contratos de frete claros e justos, adaptados às necessidades de cada cliente.',
        value: 1000,
        icon: ContractIcon,
      },
      {
        title: 'Documentos Fiscais',
        description: 'Gerenciamento completo dos documentos fiscais necessários para o transporte de cargas.',
        value: 400,
        icon: ContractSearchIcon,
      },
    ];

    services.forEach((service, index) => {
      const card = serviceCards[index];
      expect(card.props().title).toBe(service.title);
      expect(card.props().description).toBe(service.description);
      expect(card.props().value).toBe(service.value);
      expect(card.props().icon).toBe(service.icon);
    });
  });
});

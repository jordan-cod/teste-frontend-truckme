﻿<p align=center><img align=center src="https://github.com/jordan-cod/truckme/blob/main/HTML%20e%20CSS/assets/img/logo.png"></p>
<h1 align=center>Teste Técnico - TruckMe 🚚</h1>
<p align=center>Projeto de teste técnico para a empresa <a href="https://www.linkedin.com/company/truckme_app/about/">TruckMe</a>.
<p align=center><a href="https://truckme.vercel.app/">Link para o deploy</a></p>

### Requisitos do teste
<p>O objetivo é desenvolver uma página utilizando VueJS para componentização. Abaixo listo os requisitos detalhadamente:</p>

### Seção 1: HTML e CSS
- [x] Cabeçalho e Menu de Navegação: Inclui o logotipo da TruckMe e links para "Home", "Sobre", "Serviços" e "Contato".
- [x] Banner: Apresenta uma imagem de fundo e um texto de boas-vindas centralizado.
- [x] Seção "Sobre Nós": Contém um parágrafo inicial sobre a TruckMe.
- [x] Tabela de Serviços: Lista os serviços oferecidos com nome, descrição e preço.
- [x] Formulário de Contato: Inclui campos para nome, e-mail, mensagem e um botão de envio.

## Seção 2: JavaScript e Interatividade
- [x] Botão "Leia Mais": Expande o texto na seção "Sobre Nós" ao ser clicado.
- [x] Validação de Formulário: Garante que todos os campos sejam preenchidos corretamente, incluindo validação de e-mail.
- [x] Mensagem de Sucesso: Exibe uma mensagem de sucesso ao enviar o formulário.
- [x] Galeria de Imagens: Permite navegação com botões "Anterior" e "Próximo".
  
## Seção 3: Frameworks e Componentização
Reescreva a página web utilizando Vue.js e componentize a estrutura conforme abaixo:

- [x] HeaderComponent: Cabeçalho e menu de navegação.
- [x] BannerComponent: Banner com imagem de fundo e texto de boas-vindas.
- [x] AboutComponent: Seção "Sobre Nós" com botão "Leia Mais".
- [x] ServicesTableComponent: Tabela de serviços.
- [x] ContactFormComponent: Formulário de contato com validação.
- [x] GalleryComponent: Galeria de imagens com navegação.

## [Opcional] Seção 4: Testes e Qualidade de Código
- [x] Testes Unitários: Escreva testes para pelo menos dois dos componentes Vue criados.
- [x] Qualidade de Código: Utilize linters como ESLint ou Prettier para manter o código limpo e conforme padrões.
  
# Como rodar o projeto

Para executar o projeto localmente, siga as intruções abaixo:

Instalação

1. Clone o repositório do projeto:

``` shell
git clone https://github.com/jordan-cod/truckme.git
cd truckmeVueJs
```

2. Instale as dependências do projeto:
``` shell
npm install
```

3. Rodando o projeto:
Para iniciar o servidor de desenvolvimento, use o seguinte comando:
``` shell
npm run dev
```

O projeto estará disponível em http://localhost:5173/.

# Tecnologias Utilizadas
- <img align="center" src="https://img.icons8.com/color/48/null/vue-js--v1.png"/> Vue.js
- <img align="center" src="https://img.icons8.com/color/48/null/typescript--v1.png"/> Typescript
- <img align="center" src="https://img.icons8.com/color/48/null/javascript--v1.png"/> Javacript
- <img align="center" src="https://img.icons8.com/color/48/null/css3.png"/> CSS
- <img align="center" src="https://img.icons8.com/color/48/null/html-5--v1.png"/> HTML5
- <img align="center" src="https://img.icons8.com/color/48/null/figma--v1.png"/> Figma

# Componentes Criados

|Nome |Descrição | Localização|
|--|--|--|
| HeaderComponent | Responsável por exibir o cabeçalho e menu de navegação |components/layout/HeaderComponent.vue |
| BannerComponent| Apresenta um banner com imagem de fundo e texto centralizado |components/HomeView/BannerComponent.vue |
| AboutComponent| Responsável por exibir informações sobre a empresa ou seção específica com botão "Leia Mais" |components/HomeView/AboutComponent.vue |
| ServicesTableComponent| Responsável por exibir uma tabela de serviços oferecidos, incluindo nome, descrição e preço |components/HomeView/ServicesTableComponent.vue |
| ServiceCardComponent| Responsável por exibir um serviço oferecido, recebe como props: icon, title, description e value |components/HomeView/ServiceCardComponent.vue |
| ContactFormComponent| Responsável por exibir Formulário de contato com campos para nome, e-mail, mensagem e botão de envio |components/HomeView/ContactFormComponent.vue |
| GalleryComponent| Responsável por exibir uma galeria de imagens com navegação entre imagens. |components/HomeView/GalleryComponent.vue |
| FooterComponent| Responsável por exibir o rodapé da página |components/Layout/FooterComponent.vue |



<p align=center><img align=center src="https://cdn.flowpodcast.com.br/assets/images/logos/logo-header.png"></p>
<h1 align=center>Teste Técnico - TruckMe 🚚</h1>
<p align=center>Projeto de teste técnico para a empresa <a href="https://www.linkedin.com/company/truckme_app/about/">TruckMe</a>.

<p align=center>
  <img src="https://img.shields.io/github/followers/jordan-cod?color=green&label=Seguidores&style=flat-square">
  <img src="https://img.shields.io/github/forks/jordan-cod/flow-podcast-clonee?color=green&label=Forks&style=flat-square">
  <img src="https://img.shields.io/website?down_message=Offline&style=flat-square&up_message=Online&url=https%3A%2F%2Fjordan-cod.github.io%2Fflow-podcast-clonee%2F">
<p>

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

```
git clone https://github.com/jordan-cod/truckme.git
cd truckmeVueJs

```

2. Instale as dependências do projeto:
```
npm install

```

3. Rodando o projeto:
Para iniciar o servidor de desenvolvimento, use o seguinte comando:
```
npm run dev
```

O projeto estará disponível em http://localhost:5173/.

# Tecnologias Utilizadas
- Vue.js
- Typescript
- CSS

# Componentes Criados
1. HeaderComponent
Descrição: Componente responsável por exibir o cabeçalho e menu de navegação.
Localização: src/components/layout/HeaderComponent.vue

2. BannerComponent
Descrição: Componente que apresenta um banner com imagem de fundo e texto centralizado.
Localização: src/components/HomeView/BannerComponent.vue

3. AboutComponent
Descrição: Componente para exibir informações sobre a empresa ou seção específica com botão "Leia Mais".
Localização: src/components/HomeView/AboutComponent.vue

4. ServicesTableComponent
Descrição: Componente para exibir uma tabela de serviços oferecidos, incluindo nome, descrição e preço.
Localização: src/components/HomeView/ServicesTableComponent.vue

4.1. ServiceCardComponent
Descrição: Componente para exibir um serviço oferecido, recebe como props: icon, title, description e value.
Localização: src/components/HomeView/ServiceCardComponent.vue

5. ContactFormComponent
Descrição: Formulário de contato com campos para nome, e-mail, mensagem e botão de envio.
Localização: src/components/HomeView/ContactFormComponent.vue

6. GalleryComponent
Descrição: Componente para exibir uma galeria de imagens com navegação entre imagens.
Localização: src/components/HomeView/GalleryComponent.vue

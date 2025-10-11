# 📚 IFBooks - Biblioteca Virtual

Uma aplicação moderna de biblioteca virtual desenvolvida com Vue 3, TypeScript e TailwindCSS, permitindo pesquisar, favoritar e adicionar livros ao carrinho de compras.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=flat&logo=pwa&logoColor=white)

## 🎯 Funcionalidades

### 🔍 **Busca de Livros**

- Pesquisa integrada com a API do Google Books
- Busca em tempo real com debouncing
- Filtros avançados (livros à venda, com imagens)
- Carregamento infinito com paginação

### ❤️ **Sistema de Favoritos**

- Adicione livros aos favoritos com um clique
- Visualize todos os seus livros favoritos em uma página dedicada
- Persistência de dados (seus favoritos são mantidos mesmo após fechar o navegador)

### 🛒 **Carrinho de Compras**

- Adicione e remova livros do carrinho
- Controle de quantidade de itens
- Sistema de cupons de desconto
- Cálculo automático de subtotal, desconto e total
- Persistência do carrinho entre sessões

### 📱 **Progressive Web App (PWA)**

- Instalável em dispositivos móveis e desktop
- Funciona offline
- Ícones e splash screens otimizados
- Experiência similar a aplicativos nativos

### 🎨 **Interface Moderna**

- Design responsivo para todos os dispositivos
- Animações suaves e transições
- Componentes reutilizáveis
- Toast notifications para feedback do usuário
- Loading states em todas as operações

## 🚀 Começando

### Pré-requisitos

- Node.js 22.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/nicolefemello/library_vue.git
cd library_vue
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_KEY=sua_chave_api_google_books
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Qualidade de Código
npm run type-check   # Verifica tipos TypeScript
npm run lint         # Executa ESLint
npm run format       # Formata código com Prettier
```

## 🎫 Cupons de Desconto

A aplicação suporta os seguintes cupons de desconto:

- `DEVWEB10` - 10% de desconto
- `DEVWEB20` - 20% de desconto
- `DEVWEB50` - 50% de desconto
- `RAPAZ` - 100% de desconto (grátis!)

## 🛠️ Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **Pinia** - Gerenciamento de estado moderno para Vue
- **Vue Router** - Roteamento oficial do Vue
- **TailwindCSS** - Framework CSS utility-first
- **Axios** - Cliente HTTP para requisições à API
- **PWA** - Progressive Web App com Workbox
- **Vue3 Toastify** - Notificações toast elegantes
- **Vue Loading Overlay** - Indicadores de carregamento

## 📄 Estrutura do Projeto

```
src/
├── assets/         # Estilos globais
├── components/     # Componentes Vue reutilizáveis
│   ├── general/    # Componentes gerais (Header, Footer)
│   └── ...         # Componentes específicos
├── plugins/        # Configurações de plugins (API)
├── router/         # Configuração de rotas
├── services/       # Serviços de API
├── stores/         # Stores Pinia (estado global)
├── types/          # Definições TypeScript
├── utils/          # Funções utilitárias
├── validators/     # Validadores e filtros
└── views/          # Páginas/Views principais
```

## 🌐 Páginas

- **Home** (`/`) - Página principal com busca e catálogo de livros
- **Carrinho** (`/carrinho`) - Gerenciamento do carrinho de compras
- **Favoritos** (`/favoritos`) - Lista de livros favoritados

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📝 Licença

Este projeto é privado e foi desenvolvido para fins educacionais.

## 👥 Autores

- **Matheus Miguel Michalski** [GitHub](https://github.com/matheusmichalski)
- **Nicole Ferreira Mello** - [GitHub](https://github.com/nicolefemello)

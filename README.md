# TurboGainz 🏋️‍♂️

![Logo TurboGainz](https://github.com/trydavidqix/TurboGainz/blob/main/public/logo.png?raw=true)

Aplicação moderna de e-commerce focada em produtos de fitness e suplementos, desenvolvida com React, TypeScript e TailwindCSS. A plataforma oferece uma experiência de compra fluida e funcionalidades de gerenciamento de conta.

---

## 🌟 Visão Geral

O TurboGainz é um projeto de e-commerce front-end que simula uma loja online de produtos relacionados a fitness e ganho de massa. O objetivo principal é demonstrar o uso de tecnologias modernas como React com TypeScript para a construção de interfaces de usuário reativas e tipadas, TailwindCSS para estilização rápida e responsiva, e Vite como ferramenta de build de alta performance. O projeto inclui diversas funcionalidades comuns a plataformas de e-commerce, com foco na experiência do usuário e na organização do código.

## 🎯 Funcionalidades

Esta seção descreve as funcionalidades implementadas e planejadas no projeto:

*   **Catálogo de Produtos**: Exibição de uma lista de produtos com informações detalhadas, incluindo nome, descrição, preço e categoria. Inclui página de listagem geral e páginas de categoria específicas.
*   **Página de Detalhes do Produto**: Visualização individual de cada produto com suas informações completas.
*   **Carrinho de Compras**: Funcionalidade interativa para adicionar, remover e ajustar a quantidade de produtos. O estado do carrinho é persistido no `localStorage` do navegador.
*   **Checkout (Simulado)**: Fluxo de finalização de compra com múltiplos passos (informações pessoais/entrega e pagamento). Atualmente, a funcionalidade de processamento de pagamento é simulada.
*   **Autenticação (Simulada)**: Páginas de Login e Cadastro com validação de formulários. A integração com um backend de autenticação não está implementada.
*   **Área do Usuário (Simulada)**: Páginas para gerenciar informações da conta, endereços, métodos de pagamento e histórico de pedidos. A maioria dessas funcionalidades depende de integração backend para serem totalmente operacionais.
*   **Navegação e Rotas**: Gerenciamento de navegação entre páginas utilizando `react-router-dom`, incluindo lazy loading para otimização.
*   **Responsividade**: Layout adaptável a diferentes tamanhos de tela utilizando TailwindCSS.
*   **Acessibilidade (Inicial)**: Utilização de componentes de UI com atributos ARIA e estrutura semântica básica.
*   **Sistema de Toast**: Notificações para feedback do usuário (ex: adicionar ao carrinho).
*   **Meta Tags (SEO Básico)**: Configuração de títulos e descrições de página usando `react-helmet-async`.
*   **Busca de Produtos (Básica no Header)**: Funcionalidade simples de busca no header para filtrar produtos (busca baseada nos dados mockados).

## 🛠️ Tecnologias Utilizadas

O projeto TurboGainz foi construído utilizando as seguintes tecnologias, bibliotecas e frameworks:

*   **Frontend Framework**: [React](https://reactjs.org/) (v18.x) com [TypeScript](https://www.typescriptlang.org/)
*   **Gerenciamento de Estado (Assíncrono)**: [@tanstack/react-query](https://tanstack.com/query/latest/) para fetching, cache e sincronização de dados.
*   **Gerenciamento de Estado (Global Simples)**: React Context API para o estado do carrinho de compras.
*   **Estilização**: [TailwindCSS](https://tailwindcss.com/) para utilitários de CSS e design responsivo.
*   **Ferramenta de Build**: [Vite](https://vitejs.dev/) para um ambiente de desenvolvimento rápido e builds otimizados.
*   **Roteamento**: [react-router-dom](https://reactrouter.com/) para gerenciar as rotas da aplicação.
*   **Formulários**: [React Hook Form](https://react-hook-form.com/) para gerenciamento de formulários.
*   **Validação de Formulários**: [Zod](https://zod.dev/) para definição e validação de schemas.
*   **Componentes de UI**: [Radix UI primitives](https://www.radix-ui.com/) com estilização customizada baseada em Shadcn UI para componentes acessíveis e reutilizáveis (Button, Input, Label, Tabs, Select, etc.).
*   **Ícones**: [Lucide React](https://lucide.dev/) para iconografia.
*   **Meta Tags/SEO**: [react-helmet-async](https://github.com/staylor/react-helmet-async) para gerenciar tags `<head>`.
*   **Carrossel**: [embla-carousel-react](https://www.embla-carousel.com/) para o carrossel de promoções.
*   **Toast Notifications**: Implementação baseada em Shadcn UI para exibir mensagens de feedback.
*   **Outras libs de UI**: `@radix-ui/react-*` (várias), `class-variance-authority`, `clsx`, `cmdk`, `date-fns`, `input-otp`, `next-themes`, `react-day-picker`, `react-qr-code`, `react-resizable-panels`, `sonner`.
*   **Linting**: ESLint para análise de código estática.

## 📦 Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
src/
├── components/           # Componentes React reutilizáveis (divididos em common, features, layout, ui)
│   ├── common/          # Componentes compartilhados globalmente
│   ├── features/        # Componentes específicos de funcionalidades
│   ├── layout/          # Componentes de layout (Header, Footer, BaseLayout)
│   └── ui/              # Biblioteca de componentes UI (baseado em Shadcn UI)
├── context/             # Contextos React para gerenciamento de estado (ex: ShoppingCartContext)
├── data/                # Dados mockados (ex: produtos)
├── hooks/               # Custom React hooks (ex: useFormValidation)
├── lib/                 # Funções utilitárias e configurações (ex: utils.ts para cn)
├── pages/               # Páginas da aplicação (mapeadas pelas rotas)
├── styles/              # Arquivos de estilo globais (geralmente o input.css para Tailwind)
├── types/               # Definições de tipos TypeScript
└── App.tsx              # Componente raiz e configuração de rotas
```

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  Clone o repositório:

    ```bash
    git clone https://github.com/trydavidqix/TurboGainz.git
    cd TurboGainz
    ```

2.  Instale as dependências utilizando npm:

    ```bash
    npm install
    ```

3.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    O projeto estará disponível em `http://localhost:5173/` (ou outra porta disponível).

4.  Para fazer o build para produção:

    ```bash
    npm run build
    ```

    Os arquivos de produção serão gerados na pasta `dist/`.

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1.  Faça um fork do projeto.
2.  Crie uma branch para sua feature:

    ```bash
    git checkout -b feature/sua-feature
    ```

3.  Faça commit das suas mudanças:

    ```bash
    git commit -m 'feat: Adiciona sua feature incrivel'
    ```

4.  Envie para a branch:

    ```bash
    git push origin feature/sua-feature
    ```

5.  Abra um Pull Request no GitHub.

Por favor, certifique-se de que seu código segue os padrões do projeto e passe no linting.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://github.com/trydavidqix/TurboGainz/blob/main/LICENSE) para mais detalhes.

---

**Link do Repositório:** [https://github.com/trydavidqix/TurboGainz](https://github.com/trydavidqix/TurboGainz)

**Meu GitHub:** [https://github.com/trydavidqix](https://github.com/trydavidqix)

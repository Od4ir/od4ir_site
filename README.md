# od4ir_site

Meu site pessoal desenvolvido com **React**, **TypeScript** e **Vite**, publicado através do **GitHub Pages**.

🔗 **Site:** https://od4ir.github.io/od4ir_site/

---

# 📖 Sobre

Este repositório contém o código-fonte do meu site pessoal, utilizado como portfólio, vitrine de projetos e espaço para experimentação de tecnologias Web.

O objetivo é manter uma aplicação moderna, organizada e escalável, servindo tanto como projeto pessoal quanto como ambiente para aprendizado e testes.

---

# 🛠️ Stack Tecnológica

## Front-end

- React 18
- TypeScript
- Vite
- SWC

## Qualidade de Código

- ESLint

## Hospedagem

- GitHub Pages
- gh-pages

## Gerenciamento

- npm

---

# 🏗️ Arquitetura

A aplicação utiliza uma arquitetura simples baseada em componentes React.

```
React
      │
      ▼
 App.tsx
      │
      ├── Pages
      │      │
      │      ├── Home
      │      ├── Projects
      │      ├── About
      │      └── Contact
      │
      └── Components
             ├── Layout
             ├── UI
             └── Common
```

O projeto foi estruturado para crescer de maneira organizada conforme novas funcionalidades forem sendo adicionadas.

---

# 📁 Estrutura do Projeto

```text
.
├── public/                     # Arquivos públicos copiados diretamente para a build
│
├── src/
│   ├── assets/                 # Logos, imagens e SVGs
│   │
│   ├── components/
│   │   ├── common/             # Componentes reutilizados em várias partes do sistema
│   │   ├── layout/             # Header, Footer, Navbar, Layouts
│   │   └── ui/                 # Componentes visuais (Button, Card, etc.)
│   │
│   ├── hooks/                  # Hooks personalizados
│   ├── pages/                  # Páginas da aplicação
│   ├── services/               # Comunicação com APIs
│   ├── styles/                 # Estilos globais
│   ├── types/                  # Tipagens compartilhadas
│   ├── utils/                  # Funções utilitárias
│   │
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entrada da aplicação
│   └── vite-env.d.ts
│
├── package.json
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
└── README.md
```

---

# ⚙️ Configurações

## Vite

O projeto utiliza Vite como bundler.

No arquivo `vite.config.ts` existe a configuração:

```ts
base: "/od4ir_site"
```

Ela é necessária para que o GitHub Pages encontre corretamente os arquivos da aplicação.

Caso o nome do repositório seja alterado, esse valor também deverá ser atualizado.

---

## ESLint

O projeto utiliza a configuração oficial do ESLint para:

- JavaScript
- TypeScript
- React Hooks
- React Refresh

Objetivos:

- padronização de código;
- prevenção de erros comuns;
- boas práticas.

---

# 📦 Dependências

## Produção

- React
- React DOM

## Desenvolvimento

- Vite
- TypeScript
- SWC
- ESLint
- gh-pages

---

# 🚀 Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- npm

Verifique:

```bash
node -v
npm -v
```

---

# 💻 Instalação

Clone o repositório:

```bash
git clone https://github.com/od4ir/od4ir_site.git
```

Entre na pasta:

```bash
cd od4ir_site
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando Localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá um endereço semelhante a:

```
http://localhost:5173
```

Qualquer alteração salva será refletida automaticamente no navegador através do Hot Reload.

---

# 📦 Gerando a Build

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Será criada a pasta:

```
dist/
```

---

# 👀 Visualizando a Build

Para executar localmente exatamente a versão de produção:

```bash
npm run preview
```

---

# 🚀 Deploy

O deploy é realizado utilizando o pacote **gh-pages**.

Basta executar:

```bash
npm run deploy
```

Fluxo executado automaticamente:

```
npm run deploy
        │
        ▼
npm run predeploy
        │
        ▼
npm run build
        │
        ▼
gera /dist
        │
        ▼
gh-pages publica a pasta dist
        │
        ▼
GitHub Pages atualiza o site
```

Não é necessário executar `npm run build` manualmente antes do deploy.

---

# 📜 Scripts Disponíveis

| Script | Descrição |
|---------|-----------|
| `npm install` | Instala todas as dependências |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Compila o TypeScript e gera a build |
| `npm run preview` | Executa a build localmente |
| `npm run lint` | Analisa o código utilizando ESLint |
| `npm run deploy` | Publica automaticamente no GitHub Pages |

---

# 🔄 Fluxo de Desenvolvimento

Atualizar repositório:

```bash
git pull
```

Executar projeto:

```bash
npm run dev
```

Verificar qualidade do código:

```bash
npm run lint
```

Criar build:

```bash
npm run build
```

Publicar alterações:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```

Quando desejar atualizar o site publicado:

```bash
npm run deploy
```


<!-- # 💡 Roadmap

- [ ] Desenvolver página inicial
- [ ] Criar seção de projetos
- [ ] Criar página "Sobre"
- [ ] Criar formulário de contato
- [ ] Melhorar responsividade
- [ ] Adicionar animações
- [ ] Implementar modo escuro
- [ ] Melhorar SEO
- [ ] Melhorar acessibilidade -->

---

# 📄 Licença

Projeto desenvolvido para fins pessoais e educacionais.


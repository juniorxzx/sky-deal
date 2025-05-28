## 📦 Preparando o build para produção
Este projeto utiliza Next.js, configurado para exportar o site como arquivos estáticos (HTML, CSS e JS). Isso permite hospedar em qualquer servidor sem necessidade de Node.js rodando no backend.

## ✅ Passos para gerar os arquivos de build
Instale as dependências

Se ainda não tiver feito isso, rode:

```bash
npm install
# ou
yarn install
# ou
pnpm install

```

## Configure o arquivo next.config.js para exportação

Já deve estar configurado assim (verifique ou adicione):

```bash
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/nome-do-repositorio' (caso vá hospedar no GitHub Pages)
};

module.exports = nextConfig;

```

## Rode o build

Execute o comando abaixo para gerar a versão de produção estática:

```bash

npm run build
# ou
yarn build
# ou
pnpm build

```

## 🧪 Testar localmente o build

Após o comando de build, você pode testar localmente com:

```bash

npx serve out

```

Isso simula como o projeto vai se comportar no ambiente de produção.

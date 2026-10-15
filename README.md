# Victor Luduvice | Portfólio

Portfólio pessoal estático desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para conferir a versão de produção, rode `npm run build`.
O build gera o site estático na pasta `out/`.

## Editar conteúdo

Textos, experiências, formação, tecnologias, projetos e links ficam em `src/data/content.ts`. Os projetos atuais são placeholders e precisam dos seus links e detalhes reais.

## Trocar a foto

Adicione sua foto como `public/foto.jpg`. Se o arquivo não existir ou não carregar, o layout mostra as iniciais `VL`.

## Deploy na Vercel

Importe o repositório na Vercel e use o comando de build padrão (`npm run build`). Antes do deploy, atualize `siteUrl` em `src/data/content.ts` para o domínio definitivo; esse endereço alimenta o sitemap e os metadados sociais.

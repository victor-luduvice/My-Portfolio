# Victor Luduvice | Portfólio

Portfólio pessoal estático desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Mapa do código

### Aplicação

- `src/app/page.tsx`: monta as seções na ordem da página e inclui cabeçalho, rodapé e botão flutuante.
- `src/app/layout.tsx`: define fontes, metadados para busca/compartilhamento e o provedor de tema.
- `src/app/globals.css`: tokens de cores, estilos globais, componentes, seções e regras responsivas.
- `src/app/robots.ts`: define se os mecanismos de busca podem rastrear o site e aponta para o sitemap.
- `src/app/sitemap.ts`: lista o endereço público do portfólio para indexação.

### Componentes

- `src/components/site-header.tsx`: navegação, menu móvel e detecção da seção visível.
- `src/components/theme-provider.tsx` e `src/components/theme-toggle.tsx`: disponibilizam e alternam tema claro/escuro.
- `src/components/reveal.tsx`: `Reveal` anima conteúdo ao entrar na tela; `AnimatedNumber` anima contadores.
- `src/components/stack-grid.tsx`: converte os nomes das tecnologias em grupos com ícones.
- `src/components/floating-whatsapp.tsx`: atalho fixo para conversar pelo WhatsApp.
- `src/components/sections/hero-section.tsx`: abertura, resumo, botões e indicadores.
- `src/components/sections/about-section.tsx`: biografia, retrato e tecnologias.
- `src/components/sections/experience-section.tsx`: experiências profissionais e formação.
- `src/components/sections/projects-section.tsx`: cards de projetos, tecnologias e links.
- `src/components/sections/contact-section.tsx`: e-mail copiável, redes sociais e WhatsApp.
- `src/components/sections/footer-section.tsx`: crédito do site e links sociais.

### Dados editáveis

Em `src/data/content.ts`, `siteContent` centraliza todo o conteúdo:

- `name`, `firstName`, `lastName`, `role`, `siteUrl` e `description`: identidade e metadados do site.
- `navigation`: `label` é o texto do menu e `href` deve apontar para o `id` de uma seção.
- `hero`: textos da abertura e rótulos dos botões.
- `about`: título, chamada e lista de parágrafos biográficos.
- `stacks`: cada grupo tem `title` e `technologies`; os nomes precisam existir no mapa de ícones de `stack-grid.tsx`.
- `experience.items`: `period`, `role`, `company`, `description`, `highlights` e `skills` descrevem cada trabalho.
- `experience.education`: `title`, `institution` e `period` descrevem cursos e formação.
- `projects.items`: `title`, `description`, `technologies`, `codeUrl`, `demoUrl` e `status` alimentam cada cartão. `placeholder` identifica conteúdo ainda provisório.
- `contact`: e-mail, redes, WhatsApp e textos associados aos controles de contato.
- `footer`: texto de crédito exibido no rodapé.
- `technologyCount`: total de tecnologias, calculado automaticamente.
- `yearsOfExperience(asOf)`: anos completos desde fevereiro de 2023; `asOf` pode ser informado para calcular outra data.

### Configuração

- `package.json`: dependências e comandos `dev`, `build` e `lint`.
- `next.config.ts`, `postcss.config.mjs` e `tailwind.config.ts`: configuração do Next.js, PostCSS e Tailwind.
- `tsconfig.json`: opções do TypeScript e aliases de importação.
- `public/`: recursos estáticos; `foto.jpg` é o retrato e `favicon.svg` é o ícone da aba.

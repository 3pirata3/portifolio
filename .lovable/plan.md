## Tradução completa para Português (Brasil)

Vou traduzir todos os textos visíveis do site para pt-BR, mantendo o código, estrutura e design intactos. Esta é uma tradução direta (textos hard-coded), sem adicionar sistema de i18n/troca de idiomas — se desejar suporte a múltiplos idiomas no futuro, podemos adicionar depois.

### O que será traduzido

**Páginas** (`src/pages/`)
- `Home.tsx` — hero, chamadas, seções de destaque
- `Portfolio.tsx` — título, descrição, filtros
- `ProjectDetail.tsx` — labels (cliente, ano, categoria), navegação anterior/próximo
- `About.tsx` — biografia, experiência, equipamentos, prêmios
- `Contact.tsx` — título, descrição, informações de contato
- `NotFound.tsx` — mensagem 404 e botão voltar
- `Index.tsx` — se houver texto

**Layout** (`src/components/layout/`)
- `Header.tsx` — itens do menu (Início, Portfólio, Sobre, Contato)
- `Footer.tsx` — copyright, links, textos
- `ThemeToggle.tsx` — labels de acessibilidade

**Portfólio** (`src/components/portfolio/`)
- `CategoryFilter.tsx` — botão "Todos" e categorias
- `Lightbox.tsx` / `ImageWithLightbox.tsx` — labels e aria-labels
- `ProjectCard.tsx`, `PortfolioGrid.tsx`, `ProjectNavigation.tsx` — textos visíveis

**Formulário** (`src/components/forms/ContactForm.tsx`)
- Labels, placeholders, mensagens de validação, botão enviar, mensagem de sucesso/erro

**Dados** (`src/data/`)
- `photographer.ts` — bio, especialidades, descrições
- `projects.ts` — títulos, descrições, categorias dos projetos (mantendo as imagens)

**SEO e meta** 
- `index.html` — `<title>`, meta description, atributo `lang="pt-BR"`
- `SEOHead.tsx` — defaults em português

### Convenções de tradução

- Home, Portfolio, About, Contact → Início, Portfólio, Sobre, Contato
- Get in touch / Contact me → Entre em contato / Fale comigo
- View project / Read more → Ver projeto / Saiba mais
- Previous / Next → Anterior / Próximo
- Send message → Enviar mensagem
- All / Featured → Todos / Destaques
- Categorias comuns: Wedding→Casamento, Portrait→Retrato, Landscape→Paisagem, Event→Evento, Fashion→Moda, Commercial→Comercial, Travel→Viagem (ajustarei conforme o conteúdo real encontrado)

### Fora do escopo (por enquanto)

- Não vou adicionar seletor de idiomas (i18next) — apenas tradução direta
- Não vou alterar o design, layout ou funcionalidades
- Nomes próprios (do fotógrafo, clientes) permanecem como estão

Após sua aprovação, faço todas as alterações em paralelo.
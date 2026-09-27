# Portfólio — Guilherme Peniche

Next.js 16, React 19 e TypeScript. A página apresenta experiência na SERIN, projetos selecionados, pesquisa, tecnologias e contato. Cada projeto tem uma página própria; `/curriculo` tem uma versão para impressão e PDF pelo navegador.

## Desenvolvimento

Node.js 20.9 ou superior (recomendado: Node 24).

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
```

## Conteúdo

- `src/lib/constants.ts`: perfil, links, projetos e tecnologias.
- `src/components/sections/Experience.tsx`: experiência profissional.
- `src/components/sections/Skills.tsx`: estudos em cloud.
- `src/app/curriculo/page.tsx`: currículo resumido; manter consistente com o perfil.
- `src/app/globals.css`: identidade visual e regras responsivas.

Os visuais dos cards são diagramas conceituais em CSS, identificados como tal. Não são screenshots nem resultados quantitativos dos projetos.

### Fontes e confirmação de conteúdo

Descrições profissionais, Janus, áudio e simulador: informações fornecidas pelo titular. Projetos públicos: READMEs em github.com/Gnichet5. Sistema financeiro identificado como desafio técnico. Artigo: https://doi.org/10.34178/jbth.v9i7.657. Janus: https://github.com/Gnichet5/Niche. AWS Cloud Practitioner confirmada pelo titular como obtida por exame, com link público do Credly no perfil; Solutions Architect – Associate permanece como preparação. Resultados quantitativos não foram inventados.

## Contato

Copie `.env.example` para `.env.local` e configure `EMAIL_USER` e `EMAIL_PASSWORD`. Use credenciais SMTP apropriadas do Gmail. Configure as mesmas variáveis no ambiente de produção da Vercel. Nenhuma credencial deve ser versionada.

O endpoint valida tipos e limites, limita o corpo da requisição, escapa HTML, verifica origem quando presente e usa TLS com validação padrão. Ele envia somente para o proprietário, sem resposta automática para um endereço arbitrário fornecido pelo visitante. O estado de sucesso aparece apenas após o transporte aceitar a mensagem.

O limite de uma tentativa por minuto é **local à instância**, complementar, e não substitui controle distribuído. Antes de expor o formulário a tráfego elevado, configure uma regra de rate limiting no WAF da Vercel para POST `/api/contact` ou integre um armazenamento compartilhado. Não foi provisionado serviço externo automaticamente. Os testes não enviam mensagens reais.

## Vercel e Git

O código está nesta pasta (`home/claude/portfolio-guilherme-clean` dentro da pasta aberta no editor). O repositório Git começa aqui; confirme a raiz configurada no projeto Vercel antes de mudá-la.

- Desenvolva em uma branch e revise o Preview Deployment.
- Faça merge para a branch de produção apenas após validação.
- Use Node 24 nas configurações da Vercel.
- `.next`, `.env.local` e `node_modules` não devem ser versionados.
- A URL canônica está em `profile.site`; altere-a caso adote domínio próprio.

O build gera sitemap, robots, imagem Open Graph e as quatro páginas de projetos. O layout respeita preferência por movimento reduzido e não depende de WebGL ou JavaScript para revelar conteúdo.

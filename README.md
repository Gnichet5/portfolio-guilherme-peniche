# Portfolio Guilherme Silva - Completo ✨

Portfolio web profissional com design minimalista inspirado em Squarespace, desenvolvido com Next.js e elementos 3D sutis.

## ✨ Características

### Seções Completas
- ✅ **Hero Section** - Apresentação impactante com elementos 3D
- ✅ **About** - Biografia profissional e destaques
- ✅ **Projects** - 6 projetos com cards premium (3 em destaque)
- ✅ **Skills** - Habilidades organizadas por categoria
- ✅ **Contact** - Formulário de contato + informações
- ✅ **Navbar** - Menu fixo com scroll spy
- ✅ **Footer** - Links sociais e informações

### Design Premium
- Fundo branco/neutro clean
- Tipografia grande e elegante (Inter)
- Elementos 3D geométricos sutis
- Espaçamento generoso (white space)
- Animações suaves com Framer Motion
- Hover effects elegantes em todos os cards
- Gradientes sutis e profissionais

### Projetos Incluídos
1. **SIINTEC** ⭐ - Deep Reinforcement Learning (Premiado)
2. **Sistema de Detecção de Fraudes** ⭐ - Data Science
3. **SICSAE** - IoT & React + ESP32
4. **Análise de Eventos Sísmicos** - Estatística & Python
5. **Sistema de Condomínio** - Full Stack Java + React
6. **SERIN** ⭐ - Experiência Profissional Vue.js

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **3D:** React Three Fiber
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Linguagem:** TypeScript

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Abrir http://localhost:3000

# Build para produção
npm run build

# Rodar build de produção
npm start
```

## 🎨 Paleta de Cores

```css
/* Background */
Branco: #ffffff
Neutro 50: #fafafa
Neutro 100: #f5f5f5

/* Texto */
Neutro 900: #171717 (Principal)
Neutro 600: #525252 (Secundário)
Neutro 400: #a3a3a3 (Terciário)

/* Accent */
Indigo 600: #4f46e5
Indigo 50: #eef2ff

/* Bordas */
Neutro 200: #e5e5e5
Neutro 300: #d4d4d4
```

## 🏗️ Estrutura do Projeto

```
portfolio-guilherme-clean/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout raiz com Navbar + Footer
│   │   ├── page.tsx             # Página principal
│   │   └── globals.css          # Estilos globais
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── About.tsx        # Seção sobre
│   │   │   ├── Projects.tsx     # Seção de projetos
│   │   │   ├── Skills.tsx       # Seção de habilidades
│   │   │   └── Contact.tsx      # Seção de contato
│   │   ├── ui/
│   │   │   ├── Navbar.tsx       # Navbar com scroll spy
│   │   │   ├── Footer.tsx       # Footer
│   │   │   └── ProjectCard.tsx  # Card de projeto
│   │   └── canvas/
│   │       └── GeometricBackground.tsx  # Background 3D
│   └── lib/
│       └── constants.ts         # Dados dos projetos e skills
```

## 🎯 Personalização

### 1. Seus Dados

Edite `/src/lib/constants.ts` para adicionar seus projetos:

```typescript
export const projects: Project[] = [
  {
    id: 'seu-projeto',
    title: 'Nome do Projeto',
    category: 'Categoria',
    description: 'Descrição...',
    problem: 'Problema resolvido...',
    stack: ['Tech1', 'Tech2'],
    highlights: ['Destaque 1', 'Destaque 2'],
    year: '2024',
    featured: true  // Aparece em destaque
  }
]
```

### 2. Informações de Contato

Edite nos seguintes arquivos:
- `/src/components/sections/Hero.tsx` - Email no Hero
- `/src/components/sections/Contact.tsx` - Todos os links sociais
- `/src/components/ui/Footer.tsx` - Email e localização

Substitua:
- `guilherme.silva@exemplo.com` pelo seu email
- Links do LinkedIn e GitHub
- Localização

### 3. Cores

Para mudar o accent color, edite `tailwind.config.ts`:

```typescript
// Mudar de Indigo para outra cor
colors: {
  primary: colors.blue,  // ou red, green, purple, etc
}
```

### 4. Background 3D

Ajuste a intensidade em `/src/components/canvas/GeometricBackground.tsx`:

```typescript
// Linha ~29 - Quantidade de formas
for (let i = 0; i < 8; i++) {  // Reduza para menos formas

// Linha ~104 - Quantidade de partículas
const count = 100  // Reduza para menos partículas
```

## 📱 Responsividade

Testado e otimizado para:
- ✅ Mobile (320px - 767px)
- ✅ Tablet (768px - 1023px)
- ✅ Desktop (1024px - 1919px)
- ✅ 4K (1920px+)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

Ou conecte seu repositório GitHub na [dashboard da Vercel](https://vercel.com).

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

## ✅ Checklist Antes de Publicar

- [ ] Substituir todos os emails de exemplo
- [ ] Adicionar links reais do LinkedIn/GitHub
- [ ] Revisar textos e corrigir typos
- [ ] Testar formulário de contato
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar domínio customizado
- [ ] Testar em diferentes navegadores
- [ ] Validar SEO com Lighthouse
- [ ] Adicionar favicon personalizado

## 🎓 Próximas Melhorias

Ideias para expandir o portfólio:

1. **Blog** - Seção de artigos técnicos
2. **Dark Mode** - Toggle de tema claro/escuro
3. **Animações 3D Avançadas** - Modelos 3D interativos
4. **Certificações** - Seção de certificados
5. **Depoimentos** - Testimonials de clientes/colegas
6. **Timeline** - Linha do tempo da carreira
7. **Analytics** - Dashboard de métricas
8. **i18n** - Versão em inglês

## 🐛 Problemas Comuns

**Erro: Module not found**
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

**Erro: Port 3000 already in use**
```bash
# Rodar em outra porta
npm run dev -- -p 3001
```

**Canvas 3D não renderiza**
```bash
# Verificar se WebGL está habilitado no navegador
# Testar em outro navegador (Chrome/Firefox)
```

## 📄 Licença

Projeto pessoal - Todos os direitos reservados © 2025 Guilherme Silva

---

**Desenvolvido com 💙 por Guilherme Silva**

Portfolio criado com Next.js, React Three Fiber e Tailwind CSS

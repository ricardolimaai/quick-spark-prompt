import { ContentItem, ContentType } from "@/components/ContentCard";

export const categories = [
  "Todos",
  "IA",
  "Agentes IA",
  "Animação",
  "Arte",
  "Livros",
  "Branding",
  "Negócios",
  "Chatbot",
  "Paisagens Urbanas",
  "CMS / CRM",
  "Colaboração",
  "Comunicação / TI",
  "Dados",
  "Design",
  "Desenvolvimento",
  "DevOps",
  "Fantasia",
  "Financeiro",
  "Comida",
  "Games",
  "Saúde e Bem-estar",
  "Idiomas",
  "Jurídico",
  "Literatura",
  "Marketing",
  "Filmes",
  "Música",
  "Notícias",
  "Pessoal",
  "Fotografia",
  "Produtividade",
  "Vendas",
  "Ficção Científica",
  "Redes Sociais",
  "Tecnologia",
  "Viagens",
  "Fluxo de Trabalho",
];

const gradientBackgrounds = [
  "linear-gradient(135deg, #c1ff72 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #c1ff72 0%, #4facfe 100%)",
  "linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)",
  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
  "linear-gradient(135deg, #c1ff72 0%, #667eea 100%)",
  "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
  "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
  "linear-gradient(135deg, #c1ff72 0%, #11998e 100%)",
];

const titles = [
  "Transforme o ChatGPT no seu coach de negócios pessoal",
  "Crie uma rotina de treino personalizada",
  "Escreva um Livro Completo em Um Clique",
  "FitnessGPT v2: Personal Trainer em Um Clique",
  "Domine o Crescimento no Instagram com ChatGPT",
  "Crie Sua Agenda de Equilíbrio Vida-Trabalho",
  "Use o princípio 80/20 para aprender mais rápido",
  "CÓDIGO DE CHEAT DO MODO DEUS",
  "Super Prompt Nível Deus",
  "Calcule IMC, exporte agenda de exercícios e alimentação",
  "AristóteleGPT | Aprenda Qualquer Coisa",
  "Perca Peso Comendo o que Você Gosta",
  "Artigo SEO Totalmente Otimizado com FAQs",
  "Transforme o ChatGPT no seu coach de negócios",
  "Criação de Plano de Treino Personalizado",
  "Personal Trainer em Um Clique",
  "Turbine seu post do Insta",
  "Planejador de conteúdo para redes sociais",
  "Crie seu próprio curso com apenas um clique",
  "Coach de Negócios em Um Clique",
  "Script poderoso para vídeo curto de 30 segundos",
  "ChatGPT: Seu CMO Pessoal 24/7",
  "Inicie Seu Negócio em Um Clique",
  "Crie Um Calendário de Conteúdo Mensal Detalhado",
  "Criador de vídeo viral para TikTok",
  "Gerador de Estratégia de Publicidade e Marketing",
  "Código Secreto do Fotógrafo de Comida",
  "Prompts de Fotografia Comercial de Alimentos",
  "Gerador de Stickers 2D Estilo Chibi",
  "Fotos de Produtos E-commerce Modernas",
  "Carros Isométricos 3D Detalhados",
  "Logos de Geometria Ultra-moderna",
];

const authors = [
  "jeffdigital",
  "mestreia",
  "assistenteprompt",
  "criativopro",
  "gurútecnologia",
  "labdesign",
  "reiconteudo",
  "automador",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMockItem(id: number): ContentItem {
  const types: ContentType[] = ["prompt", "image", "automation"];
  const type = getRandomItem(types);
  
  return {
    id: `item-${id}`,
    title: getRandomItem(titles),
    type,
    gradient: getRandomItem(gradientBackgrounds),
    author: getRandomItem(authors),
    upvotes: getRandomNumber(100, 50000),
    views: getRandomNumber(1000, 2000000),
    comments: getRandomNumber(5, 500),
  };
}

export function generateMockData(count: number): ContentItem[] {
  return Array.from({ length: count }, (_, i) => generateMockItem(i));
}

export const sectionConfig = {
  home: {
    title: "Descubra Conteúdos Incríveis",
    description: "Explore prompts, imagens, automações e muito mais da comunidade",
  },
  prompts: {
    title: "Descubra Prompts",
    description: "Encontre prompts criativos e eficazes para seus projetos de IA",
  },
  images: {
    title: "Descubra Imagens IA",
    description: "Navegue por imagens geradas por IA e prompts visuais",
  },
  automations: {
    title: "Descubra Automações",
    description: "Descubra automações poderosas para otimizar seu fluxo de trabalho",
  },
  create: {
    title: "Criar Novo Conteúdo",
    description: "Compartilhe seus prompts, imagens e automações com a comunidade",
  },
  docs: {
    title: "Documentação",
    description: "Aprenda como criar e compartilhar conteúdos incríveis",
  },
  stats: {
    title: "Suas Estatísticas",
    description: "Acompanhe o desempenho e engajamento do seu conteúdo",
  },
};
import { ContentItem, ContentType } from "@/components/ContentCard";

export const categories = [
  "All",
  "AI",
  "AI Agents",
  "Animation",
  "Art",
  "Books",
  "Branding",
  "Business",
  "Chatbot",
  "Cityscapes",
  "CMS / CRM",
  "Collaboration",
  "Communication / IT",
  "Data",
  "Design",
  "Development",
  "DevOps",
  "Fantasy",
  "Financial",
  "Food",
  "Gaming",
  "Health & Wellness",
  "Language",
  "Legal",
  "Literature",
  "Marketing",
  "Movies",
  "Music",
  "News",
  "Personal",
  "Photography",
  "Productivity",
  "Sales",
  "Sci-Fi",
  "Social Media",
  "Technology",
  "Travel",
  "Workflow",
];

const gradientBackgrounds = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)",
  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
  "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)",
  "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
  "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
  "linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)",
  "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",
];

const titles = [
  "Transforme o ChatGPT no seu coach pessoal de negócios",
  "Crie uma rotina de treino personalizada",
  "Escreva um livro completo com um clique",
  "FitnessGPT v2: Personal Trainer com Um Clique",
  "Dominando o crescimento no Instagram com ChatGPT",
  "Crie seu cronograma personalizado de equilíbrio vida-trabalho",
  "Use o princípio 80/20 para aprender mais rápido",
  "CÓDIGO SECRETO MODO DEUS",
  "Super Prompt Nível Deus",
  "Calcule IMC, exporte cronograma de exercícios e alimentação",
  "AristotelesGPT | Aprenda Qualquer Coisa",
  "Perca peso comendo o que você gosta",
  "Artigo totalmente otimizado para SEO com FAQs",
  "Transforme o ChatGPT no seu coach de negócios IA",
  "Criação de plano de treino personalizado",
  "Personal Trainer com Um Clique",
  "Turbine suas postagens no Insta",
  "Planejador de conteúdo para redes sociais",
  "Crie seu próprio curso com apenas um clique",
  "Coach de Negócios com Um Clique",
  "Script poderoso para vídeo curto de 30 segundos",
  "ChatGPT: Seu CMO Pessoal 24/7",
  "Inicie seu Negócio com Um Clique",
  "Crie um calendário de conteúdo mensal detalhado",
  "Criador de vídeos virais para TikTok",
  "Gerador de estratégias de marketing e publicidade",
  "Código secreto para fotografia de comida",
  "Prompts para fotografia comercial de alimentos",
  "Gerador de stickers estilo Chibi 2D",
  "Fotos de produtos modernos para e-commerce",
  "Carros isométricos 3D detalhados",
  "Logos geométricos ultra-modernos",
];

const authors = [
  "digitaljeff",
  "aimaster",
  "promptwizard",
  "creativepro",
  "techguru",
  "designlab",
  "contentking",
  "automator",
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
    title: "Descubra Conteúdo Incrível",
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
    description: "Aprenda como criar e compartilhar conteúdo incrível",
  },
  stats: {
    title: "Suas Estatísticas",
    description: "Acompanhe o desempenho e engajamento do seu conteúdo",
  },
};

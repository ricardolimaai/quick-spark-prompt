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
  "Turn ChatGPT into your personal AI business coach",
  "Create a personalized workout routine",
  "Write a Complete Book in One Click",
  "FitnessGPT v2: One-Click Personal Trainer",
  "Mastering Instagram Growth with ChatGPT",
  "Create Your Customized Work-Life Balance Schedule",
  "Use the 80/20 principle to learn faster than ever",
  "GODMODE CHEATCODE",
  "God-Tier Super Prompt",
  "Calculate BMI, export exercise and eating schedule",
  "AristotleGPT | Learn Anything",
  "Lose Weight Eating the Food You Enjoy",
  "Fully SEO Optimized Article including FAQs",
  "Turn ChatGPT into your personal AI business coach",
  "Personalized Workout Plan Creation",
  "One-Click Personal Trainer",
  "Boost your insta post",
  "Social media content planner",
  "Create your own course with just one click",
  "One-Click Business Coach",
  "Powerful script for 30 second short video",
  "ChatGPT: Your Personal 24/7 CMO",
  "Startup Your Business In One Click",
  "Create A Detailed Monthly Content Calendar",
  "Tiktok viral video creator",
  "Advertisement and Marketing Strategy Generator",
  "Food Photographer Cheat Code",
  "Commercial Food Photography prompts",
  "2D Chibi-Style Stickers generator",
  "Modern E-commerce Product Shots",
  "3D Detailed Isometric Cars",
  "Ultra-modern Geometry Logos",
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
    title: "Discover Amazing Content",
    description: "Explore prompts, images, automations and more from the community",
  },
  prompts: {
    title: "Discover Prompts",
    description: "Find creative and effective prompts for your AI projects",
  },
  images: {
    title: "Discover AI Images",
    description: "Browse AI-generated images and visual prompts",
  },
  automations: {
    title: "Discover Automations",
    description: "Discover powerful automations to streamline your workflow",
  },
  create: {
    title: "Create New Content",
    description: "Share your prompts, images, and automations with the community",
  },
  docs: {
    title: "Documentation",
    description: "Learn how to create and share amazing content",
  },
  stats: {
    title: "Your Statistics",
    description: "Track your content performance and engagement",
  },
};

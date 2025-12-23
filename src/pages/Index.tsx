import { useState, useMemo } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CategoryBar } from "@/components/CategoryBar";
import { SearchBar } from "@/components/SearchBar";
import { ContentGrid } from "@/components/ContentGrid";
import { categories, generateMockData, sectionConfig } from "@/data/mockData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const mockData = useMemo(() => generateMockData(24), []);

  const filteredData = useMemo(() => {
    let data = mockData;

    // Filter by section
    if (activeSection === "prompts") {
      data = data.filter((item) => item.type === "prompt");
    } else if (activeSection === "images") {
      data = data.filter((item) => item.type === "image");
    } else if (activeSection === "automations") {
      data = data.filter((item) => item.type === "automation");
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      data = data.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.author?.toLowerCase().includes(query)
      );
    }

    return data;
  }, [mockData, activeSection, searchQuery]);

  const config = sectionConfig[activeSection as keyof typeof sectionConfig] || sectionConfig.home;

  // Get categories based on section
  const sectionCategories = useMemo(() => {
    if (activeSection === "images") {
      return ["Todos", "Abstrato", "Anime", "Arquitetura", "Arte", "Cartoon", "Paisagens Urbanas", "Criaturas", "Digital", "Fantasia", "Moda", "Comida", "Terror", "Paisagens", "Minimalismo", "Música", "Mitologia", "Natureza", "Pessoas", "Fotografia", "Realismo", "Ficção Científica", "Espaço", "Surrealismo", "Tecnologia"];
    }
    if (activeSection === "automations") {
      return ["Todos", "Agentes IA", "CMS / CRM", "Colaboração", "Comunicação / TI", "Conteúdo e Arquivos", "Dados", "E-Commerce", "Financeiro", "Marketing", "Produtividade", "QA", "Vendas", "Controle de Tempo", "Fluxo de Trabalho"];
    }
    return categories;
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main className="ml-[60px]">
        {/* Category Bar */}
        <CategoryBar
          categories={sectionCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Content Grid */}
        <ContentGrid
          items={filteredData}
          title={config.title}
          description={config.description}
        />
      </main>
    </div>
  );
};

export default Index;
import { useState, useMemo } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CategoryBar } from "@/components/CategoryBar";
import { SearchBar } from "@/components/SearchBar";
import { ContentGrid } from "@/components/ContentGrid";
import { categories, generateMockData, sectionConfig } from "@/data/mockData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

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
      return ["All", "Abstract", "Anime", "Architecture", "Artwork", "Cartoon", "Cityscapes", "Creatures", "Digital", "Fantasy", "Fashion", "Food", "Horror", "Landscapes", "Minimalism", "Music", "Mythology", "Nature", "People", "Photography", "Realism", "Sci-Fi", "Space", "Surrealism", "Technology"];
    }
    if (activeSection === "automations") {
      return ["All", "AI Agents", "CMS / CRM", "Collaboration", "Communication / IT", "Content & Files", "Data", "E-Commerce", "Financial", "Marketing", "Productivity", "QA", "Sales", "Time-Tracking", "Workflow"];
    }
    return categories;
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isExpanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(!sidebarExpanded)}
      />

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarExpanded ? "ml-[220px]" : "ml-[60px]"}`}>
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

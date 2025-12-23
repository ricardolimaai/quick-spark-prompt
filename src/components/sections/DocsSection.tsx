import { BookOpen, Sparkles, Image, Zap, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const docCategories = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Primeiros Passos",
    articles: [
      { title: "Como criar sua primeira conta", views: 12500 },
      { title: "Navegando pela plataforma", views: 8300 },
      { title: "Entendendo os tipos de conteúdo", views: 6700 },
    ],
  },
  {
    id: "prompts",
    icon: Sparkles,
    title: "Criando Prompts",
    articles: [
      { title: "Anatomia de um bom prompt", views: 15200 },
      { title: "Técnicas avançadas de prompting", views: 11400 },
      { title: "Otimizando para diferentes modelos", views: 9800 },
    ],
  },
  {
    id: "images",
    icon: Image,
    title: "Imagens com IA",
    articles: [
      { title: "Guia de estilos e modificadores", views: 18900 },
      { title: "Criando imagens consistentes", views: 14200 },
      { title: "Upscaling e refinamento", views: 7600 },
    ],
  },
  {
    id: "automations",
    icon: Zap,
    title: "Automações",
    articles: [
      { title: "Introdução a automações", views: 10300 },
      { title: "Conectando ferramentas", views: 8100 },
      { title: "Automações avançadas com IA", views: 6500 },
    ],
  },
];

export const DocsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = docCategories.filter((cat) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      cat.title.toLowerCase().includes(query) ||
      cat.articles.some((a) => a.title.toLowerCase().includes(query))
    );
  });

  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Base de Conhecimento</h1>
        <p className="mt-2 text-muted-foreground">
          Aprenda tudo sobre como criar e compartilhar conteúdo incrível
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar na documentação..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          const isExpanded = selectedCategory === category.id;

          return (
            <div
              key={category.id}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setSelectedCategory(isExpanded ? null : category.id)}
                className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-secondary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c1ff72]">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.articles.length} artigos
                  </p>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="border-t border-border bg-secondary/20 p-4">
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <button className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-secondary">
                          <span className="text-sm text-foreground">{article.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {article.views.toLocaleString()} views
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Popular Articles */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Artigos Populares</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {docCategories
            .flatMap((c) => c.articles)
            .sort((a, b) => b.views - a.views)
            .slice(0, 6)
            .map((article, idx) => (
              <button
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c1ff72] text-sm font-bold text-black">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{article.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {article.views.toLocaleString()} visualizações
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

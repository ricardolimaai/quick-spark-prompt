import { TrendingUp, Eye, Heart, MessageCircle, Sparkles, Image, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    label: "Visualizações Totais",
    value: "124.5K",
    change: "+12.3%",
    isPositive: true,
    icon: Eye,
  },
  {
    label: "Upvotes Recebidos",
    value: "8.2K",
    change: "+8.7%",
    isPositive: true,
    icon: Heart,
  },
  {
    label: "Comentários",
    value: "1.4K",
    change: "-2.1%",
    isPositive: false,
    icon: MessageCircle,
  },
  {
    label: "Taxa de Engajamento",
    value: "6.8%",
    change: "+0.5%",
    isPositive: true,
    icon: TrendingUp,
  },
];

const contentStats = [
  {
    type: "Prompts",
    icon: Sparkles,
    count: 24,
    views: 45200,
    upvotes: 3400,
    color: "bg-purple-500",
  },
  {
    type: "Imagens",
    icon: Image,
    count: 18,
    views: 62300,
    upvotes: 4100,
    color: "bg-pink-500",
  },
  {
    type: "Automações",
    icon: Zap,
    count: 7,
    views: 17000,
    upvotes: 700,
    color: "bg-yellow-500",
  },
];

const topContent = [
  { title: "Transforme o ChatGPT no seu coach pessoal de IA", views: 52400, upvotes: 2100, type: "prompt" },
  { title: "Logos Geométricos Ultra-modernos", views: 38900, upvotes: 1800, type: "image" },
  { title: "Personal Trainer com Um Clique", views: 24300, upvotes: 1200, type: "prompt" },
  { title: "Calendário de Conteúdo Automatizado", views: 18700, upvotes: 890, type: "automation" },
  { title: "Stickers Estilo Chibi 2D", views: 15200, upvotes: 720, type: "image" },
];

export const StatsSection = () => {
  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Sua Biblioteca</h1>
        <p className="mt-2 text-muted-foreground">
          Acompanhe o desempenho do seu conteúdo e engajamento
        </p>
      </div>

      {/* Main Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c1ff72]">
                  <Icon className="h-5 w-5 text-black" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content by Type */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Por Tipo de Conteúdo</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {contentStats.map((content) => {
            const Icon = content.icon;
            return (
              <div
                key={content.type}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${content.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{content.type}</h3>
                    <p className="text-sm text-muted-foreground">{content.count} itens</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {content.views.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Visualizações</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {content.upvotes.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Upvotes</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Content */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Conteúdo com Melhor Desempenho</h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-12 gap-4 border-b border-border bg-secondary/30 px-5 py-3 text-sm font-medium text-muted-foreground">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Título</div>
            <div className="col-span-2 text-right">Visualizações</div>
            <div className="col-span-2 text-right">Curtidas</div>
            <div className="col-span-1 text-right">Tipo</div>
          </div>
          {topContent.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 gap-4 border-b border-border px-5 py-4 text-sm transition-colors last:border-0 hover:bg-secondary/20"
            >
              <div className="col-span-1 font-medium text-muted-foreground">{idx + 1}</div>
              <div className="col-span-6 font-medium text-foreground">{item.title}</div>
              <div className="col-span-2 text-right text-muted-foreground">
                {item.views.toLocaleString()}
              </div>
              <div className="col-span-2 text-right text-muted-foreground">
                {item.upvotes.toLocaleString()}
              </div>
              <div className="col-span-1 text-right">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.type === "prompt"
                      ? "bg-purple-500/20 text-purple-400"
                      : item.type === "image"
                      ? "bg-pink-500/20 text-pink-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {item.type === "prompt" ? "P" : item.type === "image" ? "I" : "A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

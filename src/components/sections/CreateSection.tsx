import { Plus, Sparkles, Image, Zap } from "lucide-react";

export const CreateSection = () => {
  const contentTypes = [
    {
      id: "prompt",
      icon: Sparkles,
      title: "Criar Prompt",
      description: "Compartilhe seus prompts criativos com a comunidade",
      color: "bg-purple-500",
    },
    {
      id: "image",
      icon: Image,
      title: "Criar Imagem",
      description: "Envie suas imagens geradas por IA",
      color: "bg-pink-500",
    },
    {
      id: "automation",
      icon: Zap,
      title: "Criar Automação",
      description: "Compartilhe fluxos de automação poderosos",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Criar Novo Conteúdo</h1>
        <p className="mt-2 text-muted-foreground">
          Escolha o tipo de conteúdo que você deseja criar e compartilhar
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contentTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${type.color}`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {type.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{type.description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary">
                <Plus className="h-4 w-4" />
                <span>Começar</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card/50 p-6">
        <h2 className="text-xl font-semibold text-foreground">Dicas para Criadores</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-[#c1ff72]">✓</span>
            <span>Use títulos descritivos e chamativos para atrair mais visualizações</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c1ff72]">✓</span>
            <span>Adicione tags relevantes para melhorar a descoberta do seu conteúdo</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c1ff72]">✓</span>
            <span>Inclua exemplos de uso para ajudar outros usuários</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#c1ff72]">✓</span>
            <span>Responda comentários e interaja com a comunidade</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

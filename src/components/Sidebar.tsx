import { Home, Sparkles, Image, Zap, Plus, BookOpen, BarChart3, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "home", icon: Home, label: "Início" },
  { id: "prompts", icon: Sparkles, label: "Prompts" },
  { id: "images", icon: Image, label: "Imagens" },
  { id: "automations", icon: Zap, label: "Automações" },
  { id: "create", icon: Plus, label: "Criar" },
  { id: "docs", icon: BookOpen, label: "Documentação" },
  { id: "stats", icon: BarChart3, label: "Estatísticas" },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[60px] border-r border-sidebar-border bg-sidebar flex flex-col items-center py-4">
      {/* Logo */}
      <button 
        onClick={() => onSectionChange("home")}
        className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl transition-transform hover:scale-105 overflow-hidden"
      >
        <img src={logo} alt="Código do Poder" className="h-10 w-10 object-contain" />
      </button>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
              title={item.label}
            >
              <Icon className="h-5 w-5" />
              
              {/* Tooltip */}
              <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-card border border-border px-2 py-1 text-xs text-foreground group-hover:block z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom - Login */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        title="Entrar"
      >
        <LogIn className="h-5 w-5" />
      </button>
    </aside>
  );
};
import { Home, Sparkles, Image, Zap, Plus, BookOpen, BarChart3, LogIn, Code2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}
const menuItems = [{
  id: "home",
  icon: Home,
  label: "Início"
}, {
  id: "prompts",
  icon: Sparkles,
  label: "Prompts"
}, {
  id: "images",
  icon: Image,
  label: "Imagens IA"
}, {
  id: "automations",
  icon: Zap,
  label: "Automações"
}];
const bottomMenuItems = [{
  id: "docs",
  icon: BookOpen,
  label: "Base de Conhecimento"
}, {
  id: "stats",
  icon: BarChart3,
  label: "Biblioteca"
}];
export const Sidebar = ({
  activeSection,
  onSectionChange,
  isExpanded,
  onToggle
}: SidebarProps) => {
  return <aside className={cn("fixed left-0 top-0 z-40 h-screen border-r border-sidebar-border bg-sidebar flex flex-col py-4 transition-all duration-300", isExpanded ? "w-[220px] px-3" : "w-[60px] items-center")}>
      {/* Toggle Button with Code Icon */}
      <button onClick={onToggle} className={cn("mb-4 flex items-center gap-3 rounded-xl transition-all duration-200 hover:bg-sidebar-accent", isExpanded ? "w-full px-2 py-2" : "h-10 w-10 justify-center")}>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c1ff72]">
          <Code2 className="h-5 w-5 text-black" />
        </div>
        {isExpanded && <span className="text-lg leading-tight text-muted-foreground font-mono">
            Prompt Pronto
          </span>}
      </button>

      {/* Main Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {menuItems.map(item => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return <button key={item.id} onClick={() => onSectionChange(item.id)} className={cn("group relative flex items-center gap-3 rounded-xl transition-all duration-200", isExpanded ? "px-3 py-2.5" : "h-10 w-10 justify-center", isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground")} title={!isExpanded ? item.label : undefined}>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c1ff72]">
                <Icon className="h-4 w-4 text-black flex-shrink-0" />
              </div>
              
              {isExpanded && <span className="text-sm font-medium font-mono">{item.label}</span>}
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block z-50">
                  {item.label}
                </span>}
            </button>;
      })}

        {/* Create/Sell Button */}
        <button onClick={() => onSectionChange("create")} className={cn("group relative flex items-center gap-3 rounded-xl bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90", isExpanded ? "px-3 py-2.5 mt-2" : "h-10 w-10 justify-center mt-2")} title={!isExpanded ? "Criar/Vender" : undefined}>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black">
            <Plus className="h-4 w-4 text-[#c1ff72] flex-shrink-0" />
          </div>
          {isExpanded && <>
              <span className="text-sm font-medium flex-1 font-mono">Criar/Vender</span>
              <ChevronRight className="h-4 w-4" />
            </>}
          {!isExpanded && <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block z-50">
              Criar/Vender
            </span>}
        </button>
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col gap-1 mt-4 pt-4 border-t border-sidebar-border">
        {bottomMenuItems.map(item => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return <button key={item.id} onClick={() => onSectionChange(item.id)} className={cn("group relative flex items-center gap-3 rounded-xl transition-all duration-200", isExpanded ? "px-3 py-2.5" : "h-10 w-10 justify-center", isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground")} title={!isExpanded ? item.label : undefined}>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c1ff72]">
                <Icon className="h-4 w-4 text-black flex-shrink-0" />
              </div>
              
              {isExpanded && <span className="font-medium font-mono text-xs">{item.label}</span>}
              
              {!isExpanded && <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block z-50">
                  {item.label}
                </span>}
            </button>;
      })}

        {/* User/Login Section */}
        <button className={cn("group relative flex items-center gap-3 rounded-xl text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground mt-2", isExpanded ? "px-3 py-2.5" : "h-10 w-10 justify-center")} title={!isExpanded ? "Login" : undefined}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c1ff72]">
            <LogIn className="h-4 w-4 text-black" />
          </div>
          {isExpanded && <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Login</span>
              <span className="text-xs text-muted-foreground">Entrar na conta</span>
            </div>}
          {!isExpanded && <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block z-50">
              Login
            </span>}
        </button>
      </div>
    </aside>;
};
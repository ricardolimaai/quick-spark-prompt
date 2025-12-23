import { Home, Sparkles, Image, Zap, Plus, BookOpen, BarChart3, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "prompts", icon: Sparkles, label: "Prompts" },
  { id: "images", icon: Image, label: "Images" },
  { id: "automations", icon: Zap, label: "Automations" },
  { id: "create", icon: Plus, label: "Create" },
  { id: "docs", icon: BookOpen, label: "Documentation" },
  { id: "stats", icon: BarChart3, label: "Statistics" },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[60px] border-r border-sidebar-border bg-sidebar flex flex-col items-center py-4">
      {/* Logo */}
      <button 
        onClick={() => onSectionChange("home")}
        className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105"
      >
        <Sparkles className="h-5 w-5" />
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
              <span className="absolute left-14 hidden whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom - Login */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        title="Login"
      >
        <LogIn className="h-5 w-5" />
      </button>
    </aside>
  );
};

import { useState } from "react";
import { ArrowUp, Bookmark, MessageSquare, Eye } from "lucide-react";
import { Sparkles, Image as ImageIcon, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export type ContentType = "prompt" | "image" | "automation";

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  gradient: string;
  author?: string;
  upvotes: number;
  views: number;
  comments: number;
}

interface ContentCardProps {
  item: ContentItem;
  index: number;
}

const typeConfig = {
  prompt: {
    icon: Sparkles,
    label: "Prompt",
    bgColor: "bg-badge-prompt-bg",
    textColor: "text-badge-prompt",
  },
  image: {
    icon: ImageIcon,
    label: "Imagem",
    bgColor: "bg-badge-image-bg",
    textColor: "text-badge-image",
  },
  automation: {
    icon: Zap,
    label: "Automação",
    bgColor: "bg-badge-automation-bg",
    textColor: "text-badge-automation",
  },
};

// Random aspect ratios for masonry effect
const aspectRatios = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[16/10]",
];

export const ContentCard = ({ item, index }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const config = typeConfig[item.type];
  const Icon = config.icon;
  
  // Deterministic aspect ratio based on index
  const aspectRatio = aspectRatios[index % aspectRatios.length];

  return (
    <div
      className="masonry-item animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover">
        {/* Gradient Background Container */}
        <div 
          className={cn("relative overflow-hidden", aspectRatio)}
          style={{ background: item.gradient }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center text-white">
              <div className="mb-2 text-4xl font-bold opacity-20">
                {item.type === "prompt" && "✨"}
                {item.type === "image" && "🎨"}
                {item.type === "automation" && "⚡"}
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90 line-clamp-3 px-2">
                {item.title}
              </p>
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Badge */}
          <div className="absolute left-3 top-3">
            <span className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium shadow-sm",
              config.bgColor,
              config.textColor
            )}>
              <Icon className="h-3 w-3" />
              {config.label}
            </span>
          </div>

          {/* Hover Actions */}
          <div
            className={cn(
              "absolute right-3 top-3 flex gap-2 transition-all duration-300",
              isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            )}
          >
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition-all hover:bg-white hover:scale-110">
              <ArrowUp className="h-4 w-4" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-all hover:scale-110",
                isBookmarked 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white/90 text-foreground hover:bg-white"
              )}
            >
              <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
            </button>
          </div>

          {/* Stats on hover */}
          <div
            className={cn(
              "absolute bottom-3 left-3 right-3 flex items-center gap-3 text-xs text-white transition-all duration-300",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
          >
            <span className="flex items-center gap-1">
              <ArrowUp className="h-3.5 w-3.5" />
              {formatNumber(item.upvotes)}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {formatNumber(item.views)}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {item.comments}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="line-clamp-2 text-sm font-medium text-foreground leading-snug">
            {item.title}
          </h3>
          {item.author && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span 
                className="h-4 w-4 rounded-full" 
                style={{ background: item.gradient }}
              />
              {item.author}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

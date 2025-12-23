import { ContentCard, ContentItem } from "./ContentCard";

interface ContentGridProps {
  items: ContentItem[];
  title: string;
  description: string;
}

export const ContentGrid = ({ items, title, description }: ContentGridProps) => {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
          <span>💬</span>
          Feedback
        </button>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {items.map((item, index) => (
          <ContentCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

import { Category } from '@/types/marketplace';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryList = ({ categories, selectedCategory, onCategorySelect }: CategoryListProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-palette-btn-bg text-palette-btn-text'
              : 'bg-palette-bg text-palette-primary hover:bg-palette-hover'
          }`}
          onClick={() => onCategorySelect(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}; 
interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-palette-bg text-palette-primary hover:bg-palette-hover'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}; 
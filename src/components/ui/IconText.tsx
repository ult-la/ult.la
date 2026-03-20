import { LucideIcon } from 'lucide-react';

interface IconTextProps {
  icon: LucideIcon;
  text: string | number;
  className?: string;
}

export const IconText = ({ icon: Icon, text, className = '' }: IconTextProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon className="h-4 w-4" />
      {text}
    </div>
  );
}; 
import { MessageCircle } from 'lucide-react';

export const ContactCard = () => {
  return (
    <div className="bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <h3 className="font-semibold text-palette-primary mb-4">Contact Organizer</h3>
      <button className="w-full px-4 py-2 bg-palette-btn-bg text-palette-btn-text rounded-lg hover:bg-palette-btn-bg-hover transition-colors flex items-center justify-center gap-2">
        <MessageCircle className="h-5 w-5" />
        Send Message
      </button>
    </div>
  );
}; 
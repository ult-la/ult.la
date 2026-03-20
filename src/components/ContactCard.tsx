import { MessageCircle } from 'lucide-react';

export const ContactCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Contact Organizer</h3>
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
        <MessageCircle className="h-5 w-5" />
        Send Message
      </button>
    </div>
  );
}; 
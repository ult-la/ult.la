import { Info, Globe, Users } from 'lucide-react';

export const AdditionalInfoCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Additional Information</h3>
      <div className="space-y-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Info className="h-4 w-4" />
          Refund available up to 7 days before event
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Globe className="h-4 w-4" />
          Language: English
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="h-4 w-4" />
          Limited capacity event
        </div>
      </div>
    </div>
  );
}; 
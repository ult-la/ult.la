interface EventAmenitiesProps {
  amenities: string[];
}

export const EventAmenities = ({ amenities }: EventAmenitiesProps) => {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-600">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
}; 
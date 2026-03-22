interface EventAmenitiesProps {
  amenities: string[];
}

export const EventAmenities = ({ amenities }: EventAmenitiesProps) => {
  return (
    <div className="mt-6 bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <h2 className="text-xl font-semibold text-palette-primary mb-4">What's Included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 text-palette-secondary">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
}; 
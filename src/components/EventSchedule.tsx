interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  description?: string;
}

interface EventScheduleProps {
  schedule: ScheduleItem[];
}

export const EventSchedule = ({ schedule }: EventScheduleProps) => {
  return (
    <div className="mt-6 bg-palette-card rounded-xl shadow-sm border border-palette-border p-6">
      <h2 className="text-xl font-semibold text-palette-primary mb-4">Event Schedule</h2>
      <div className="space-y-6">
        {schedule.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-sm text-palette-tertiary">
              {item.time}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-palette-primary">{item.title}</h4>
              {'speaker' in item && (
                <div className="text-sm text-palette-secondary mt-1">
                  {item.speaker} • {item.role}
                </div>
              )}
              {'description' in item && (
                <div className="text-sm text-palette-tertiary mt-1">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
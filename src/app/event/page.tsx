"use client";
import React, { useState } from "react";
import { EventHeader } from "@/components/EventHeader";
import { EventDetails } from "@/components/EventDetails";
import { EventSchedule } from "@/components/EventSchedule";
import { EventAmenities } from "@/components/EventAmenities";
import { OrganizerCard } from "@/components/OrganizerCard";
import { ContactCard } from "@/components/ContactCard";
import { AdditionalInfoCard } from "@/components/AdditionalInfoCard";
import eventsData from "@/data/events.json";
import type { Event } from "@/data/types";

const Event = () => {
  const [isAttending, setIsAttending] = useState(false);
  const [isReminded, setIsReminded] = useState(false);

  // Get the first event for now - in a real app, you'd get the event by ID from the URL
  const event = eventsData.events[0] as Event;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <EventHeader
            title={event.title}
            image={event.image}
            category={event.category}
            privacy={event.privacy}
            price={event.price}
            isAttending={isAttending}
            onAttendingChange={setIsAttending}
          />

          <EventDetails
            date={event.date}
            endDate={event.endDate}
            location={event.location}
            address={event.address}
            attendees={event.attendees}
            interested={event.interested}
            isReminded={isReminded}
            onReminderChange={setIsReminded}
          />

          {/* Event Description */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About This Event
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {event.description}
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <EventSchedule schedule={event.schedule} />
          <EventAmenities amenities={event.amenities} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <OrganizerCard organizer={event.organizer} />
          <ContactCard />
          <AdditionalInfoCard />
        </div>
      </div>
    </div>
  );
};

export default Event;

import React, { useState } from 'react';
    import { Calendar, FileText, MessageSquare, Video, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';

    function MedicalTimeline({ events, onEventClick, selectedEvent }) {
      const [searchTerm, setSearchTerm] = useState('');
      const [filterType, setFilterType] = useState('all'); // 'all', 'appointment', 'lab_result', 'doctor_note', 'telehealth'
      const [filterDateRange, setFilterDateRange] = useState({ start: '', end: '' });

      const filteredEvents = events
        .filter((event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.details.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((event) => filterType === 'all' || event.type === filterType)
        .filter((event) => {
          if (filterDateRange.start && filterDateRange.end) {
            const eventDate = new Date(event.date);
            const startDate = new Date(filterDateRange.start);
            const endDate = new Date(filterDateRange.end);
            return eventDate >= startDate && eventDate <= endDate;
          }
          return true;
        });

      return (
        <div>
          <div className="flex items-center mb-4">
            <div className="relative w-full mr-2">
              <Search className="absolute left-2 top-2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search timeline..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative mr-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                className="ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="appointment">Appointments</option>
                <option value="lab_result">Lab Results</option>
                <option value="doctor_note">Doctor Notes</option>
                <option value="telehealth">Telehealth</option>
              </select>
            </div>
            <div className="flex items-center">
                <label htmlFor="start-date" className="mr-2 text-sm">Start Date:</label>
                <input
                  type="date"
                  id="start-date"
                  className="mr-2 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={filterDateRange.start}
                  onChange={(e) => setFilterDateRange({ ...filterDateRange, start: e.target.value })}
                />
                <label htmlFor="end-date" className="mr-2 text-sm">End Date:</label>
                <input
                  type="date"
                  id="end-date"
                  className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={filterDateRange.end}
                  onChange={(e) => setFilterDateRange({ ...filterDateRange, end: e.target.value })}
                />
              </div>
          </div>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-gray-50 p-4 rounded-lg border cursor-pointer hover:bg-gray-100 transition-colors duration-200`}
                onClick={() => onEventClick(event)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {event.type === 'appointment' && <Calendar className="h-5 w-5 text-blue-600 mr-2" />}
                    {event.type === 'lab_result' && <FileText className="h-5 w-5 text-green-600 mr-2" />}
                    {event.type === 'doctor_note' && <MessageSquare className="h-5 w-5 text-gray-600 mr-2" />}
                    {event.type === 'telehealth' && <Video className="h-5 w-5 text-purple-600 mr-2" />}
                    <div>
                      <p className="text-lg font-semibold">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default MedicalTimeline;

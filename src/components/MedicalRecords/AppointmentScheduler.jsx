import React, { useState } from 'react';
    import { Calendar, X, Clock } from 'lucide-react';

    function AppointmentScheduler({ onSchedule, onClose }) {
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
      const [type, setType] = useState('virtual'); // 'virtual' or 'in-person'
      const [details, setDetails] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        onSchedule({ date, time, type, title: type === 'virtual' ? 'Virtual Consultation' : 'In-Person Appointment', details });
      };

      // Basic AI-suggested times (replace with a more sophisticated algorithm)
      const suggestedTimes = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Schedule Appointment</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='mt-2'>
                <label className="block text-sm font-medium text-gray-700">
                    Suggested Times
                </label>
                <div className='flex space-x-2'>
                    {suggestedTimes.map(suggestedTime =>
                        <button type='button' key={suggestedTime} className='bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded' onClick={() => setTime(suggestedTime)}>{suggestedTime}</button>
                    )}
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Appointment Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="virtual">Virtual Consultation</option>
                  <option value="in-person">In-Person Appointment</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                  Reason for Appointment
                </label>
                <textarea
                  name="details"
                  id="details"
                  rows="3"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Briefly describe the reason for your appointment"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default AppointmentScheduler;

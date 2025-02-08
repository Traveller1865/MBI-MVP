import React, { useState } from 'react';
    import { X, Calendar, Clock, Dumbbell } from 'lucide-react';

    function WorkoutForm({ onAddWorkout, onClose }) {
      const [date, setDate] = useState('');
      const [type, setType] = useState('Cardio'); // 'Cardio', 'Strength', 'Yoga', 'Other'
      const [duration, setDuration] = useState('');
      const [notes, setNotes] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        onAddWorkout({ date, type, duration, notes });
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Workout</h2>
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
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Workout Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Cardio">Cardio</option>
                  <option value="Strength">Strength</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Duration (minutes)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes (optional)
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  rows="3"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Felt great, pushed hard!"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Workout
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default WorkoutForm;

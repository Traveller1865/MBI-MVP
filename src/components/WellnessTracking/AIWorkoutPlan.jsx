import React from 'react';
    import { X, Dumbbell } from 'lucide-react';

    function AIWorkoutPlan({ onClose }) {
      // Simulated AI-generated workout plan (replace with actual AI logic)
      const workoutPlan = [
        { day: 'Monday', activity: '30-minute jog', focus: 'Cardio' },
        { day: 'Tuesday', activity: 'Strength training (upper body)', focus: 'Strength' },
        { day: 'Wednesday', activity: 'Rest or light yoga', focus: 'Recovery' },
        { day: 'Thursday', activity: '45-minute cycling', focus: 'Cardio' },
        { day: 'Friday', activity: 'Strength training (lower body)', focus: 'Strength' },
        { day: 'Saturday', activity: '60-minute hike', focus: 'Cardio & Endurance' },
        { day: 'Sunday', activity: 'Rest', focus: 'Recovery' },
      ];

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">AI-Generated Workout Plan</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {workoutPlan.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p className="font-semibold">{item.day}</p>
                  <p className="text-gray-700">{item.activity}</p>
                  <p className="text-sm text-gray-500">Focus: {item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default AIWorkoutPlan;

import React from 'react';
import { Trophy } from 'lucide-react';

function Gamification() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Gamification & Rewards</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
          <div>
            <p className="text-gray-600">Points</p>
            <p className="text-lg font-semibold">Hydration Hero: 300 pts</p>
          </div>
        </div>
        <div>
          <p className="text-gray-600">Challenge</p>
          <p className="text-lg font-semibold">Complete 5 workouts this week</p>
          {/* Placeholder for progress tracker */}
          <div className="h-4 bg-gray-200 rounded-full mt-1">
            <div className="h-full bg-yellow-500 rounded-full" style={{width: '60%'}}></div>
          </div>
        </div>
      </div>
       {/* Placeholder for avatar/visual representation */}
      <div className="mt-4 flex items-center">
        <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
        <p className="text-gray-600">Keep up the great work!</p>
      </div>
    </div>
  );
}

export default Gamification;

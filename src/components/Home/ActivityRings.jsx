import React from 'react';

function ActivityRings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Activity Rings</h3>
      <div className="grid grid-cols-3 gap-6">
        {/* Steps Ring */}
        <div>
          <div className="relative h-24 w-24 mx-auto">
            {/* Placeholder for ring visualization */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-semibold">80%</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-2">Steps</p>
          <p className="text-center text-sm text-gray-500">8,000/10,000</p>
        </div>

        {/* Workouts Ring */}
        <div>
          <div className="relative h-24 w-24 mx-auto">
            {/* Placeholder for ring visualization */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-semibold">75%</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-2">Workouts</p>
          <p className="text-center text-sm text-gray-500">45/60 min</p>
        </div>

        {/* Calories Ring */}
        <div>
          <div className="relative h-24 w-24 mx-auto">
            {/* Placeholder for ring visualization */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 82%)' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-semibold">82%</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-2">Calories</p>
          <p className="text-center text-sm text-gray-500">1,800/2,200</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityRings;

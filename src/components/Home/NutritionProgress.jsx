import React from 'react';
import { Droplet } from 'lucide-react';

function NutritionProgress() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Nutrition Progress</h3>
      <div className="grid grid-cols-2 gap-6">
        {/* Hydration */}
        <div>
          <div className="flex items-center mb-2">
            <Droplet className="h-6 w-6 text-blue-500 mr-2" />
            <p className="text-gray-600 font-semibold">Hydration</p>
          </div>
          <div className="h-8 bg-gray-200 rounded-full">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">1.8/2.5 L</p>
        </div>

        {/* Calorie Intake */}
        <div>
          <p className="text-gray-600 font-semibold">Calorie Intake</p>
          <div className="h-8 bg-gray-200 rounded-full">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '95%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">1,900/2,000 kcal</p>
        </div>
      </div>
    </div>
  );
}

export default NutritionProgress;

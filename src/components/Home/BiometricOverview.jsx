import React from 'react';
import { Heart, Activity as HRVIcon, Moon, AlertTriangle } from 'lucide-react';

function BiometricOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Biometric Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-red-500 mr-2" />
          <div>
            <p className="text-gray-600">Heart Rate</p>
            <p className="text-lg font-semibold">72 bpm <span className="text-xs text-green-500">Normal</span></p>
            {/* Mini progress bar */}
            <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-gradient-to-r from-green-400 to-red-500 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <HRVIcon className="h-6 w-6 text-blue-500 mr-2" />
          <div>
            <p className="text-gray-600">HRV</p>
            <p className="text-lg font-semibold">65 ms</p>
              <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-gradient-to-r from-blue-400 to-green-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Moon className="h-6 w-6 text-indigo-500 mr-2" />
          <div>
            <p className="text-gray-600">Sleep</p>
            <p className="text-lg font-semibold">7.5 hours</p>
              <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
          <div>
            <p className="text-gray-600">Stress Level</p>
            <p className="text-lg font-semibold">Low</p>
              <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-gradient-to-r from-green-400 to-yellow-500 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">Last updated: 2 minutes ago</p>
    </div>
  );
}

export default BiometricOverview;

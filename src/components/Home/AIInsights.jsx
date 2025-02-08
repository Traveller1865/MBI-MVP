import React from 'react';
import { Zap } from 'lucide-react';

function AIInsights() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Health Insights</h3>
      <div className="flex items-center">
        <Zap className="h-6 w-6 text-yellow-500 mr-2" />
        <div>
          <p className="text-gray-600">Recommendation</p>
          <p className="text-lg font-semibold">Consider a 30-minute walk for better recovery.</p>
        </div>
      </div>
    </div>
  );
}

export default AIInsights;

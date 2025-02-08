import React from 'react';
    import { VideoOff, MicOff, PhoneOff } from 'lucide-react'; // Import icons

    function TelehealthWindow() {
      // Placeholder for video stream (replace with actual video conferencing integration)
      return (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 w-96">
          <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
            <p className="text-white">Video Stream Placeholder</p>
          </div>
          <div className="mt-4 flex justify-around">
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
              <VideoOff className="h-6 w-6 text-gray-600" />
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
              <MicOff className="h-6 w-6 text-gray-600" />
            </button>
            <button className="bg-red-600 hover:bg-red-700 p-2 rounded-full">
              <PhoneOff className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      );
    }

    export default TelehealthWindow;

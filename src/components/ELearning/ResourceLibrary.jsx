import React, { useState } from 'react';
    import { Search, FileText } from 'lucide-react';

    function ResourceLibrary() {
      // Simulated resource data (replace with actual data)
      const [resources, setResources] = useState([
        { id: 1, title: 'The Impact of Sleep on Cognitive Function', type: 'research', date: '2023-10-26', abstract: 'This study investigates...' },
        { id: 2, title: 'Dietary Guidelines for Cardiovascular Health', type: 'summary', date: '2023-11-15', abstract: 'A summary of current recommendations...' },
        { id: 3, title: 'Mindfulness and Stress Reduction', type: 'research', date: '2023-12-01', abstract: 'Exploring the effects of mindfulness...' },
      ]);

      const [searchTerm, setSearchTerm] = useState('');

      const filteredResources = resources.filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.abstract.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Resource Library</h2>
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-y-4">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white p-4 rounded-lg border">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-600 mr-2" />
                  <div>
                    <p className="text-lg font-semibold">{resource.title}</p>
                    <p className="text-sm text-gray-500">{resource.date} - {resource.type}</p>
                    <p className="text-gray-700 mt-2">{resource.abstract}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default ResourceLibrary;

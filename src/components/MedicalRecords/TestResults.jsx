import React, { useState } from 'react';
    import { BarChart2, Image, File, Upload, AlertTriangle } from 'lucide-react';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    function TestResults({ results, onResultClick }) {
      const [selectedImage, setSelectedImage] = useState(null);
      const [uploadedFiles, setUploadedFiles] = useState([]);

      const handleImageClick = (image) => {
        setSelectedImage(selectedImage === image ? null : image);
      };

      const handleFileUpload = (e) => {
        const newFiles = [...e.target.files].map(file => ({
          name: file.name,
          url: URL.createObjectURL(file), // Create temporary URL for preview
        }));
        setUploadedFiles([...uploadedFiles, ...newFiles]);
      };

      // Prepare data for the chart (example with Hemoglobin)
      const chartData = results.bloodwork
        .filter(result => result.metric === 'Hemoglobin')
        .map(result => ({
          date: result.date,
          value: result.value,
        }));

      return (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Bloodwork Results</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.bloodwork.map((result) => (
                    <tr key={result.id} className={`${result.status === 'low' ? 'bg-red-50' : result.status === 'high' ? 'bg-red-50' : ''}`} onClick={() => onResultClick(result)}>
                      <td className="px-6 py-4 whitespace-nowrap">{result.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {result.metric}
                        <span className="relative inline-block group">
                          <span className='ml-1'>
                              <AlertTriangle className='h-4 w-4 text-yellow-500 inline-block'/>
                          </span>
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {result.metric} is important for...
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{result.value} {result.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{result.referenceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Bloodwork Trends (Hemoglobin)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Imaging Reports</h3>
            <div className="grid grid-cols-2 gap-4">
              {results.imaging.map((image) => (
                <div key={image.id} className="relative border rounded-lg p-2 cursor-pointer" onClick={() => onResultClick({...image, type: 'imaging'})}>
                  <img src={image.image} alt={image.title} className="w-full h-32 object-cover rounded-md" />
                  <p className="text-lg font-semibold mt-2">{image.title}</p>
                  <p className="text-sm text-gray-500">{image.date}</p>
                  {
                    image.attachments && image.attachments.length > 0 &&
                    <div className='mt-2'>
                        <a className='text-blue-500' href={image.attachments[0].url} target='_blank'>{image.attachments[0].name}</a>
                    </div>
                  }
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Upload Test Results</h3>
               <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      name="file-upload"
                      id="file-upload"
                      className="sr-only"
                      onChange={handleFileUpload}
                      multiple
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md flex items-center"
                    >
                      <Upload className="h-5 w-5 mr-2" />
                      <span>Choose Files</span>
                    </label>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <ul className="mt-2">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  )}
            </div>
          </div>
        </div>
      );
    }

    export default TestResults;

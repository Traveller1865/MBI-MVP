import React, { useState } from 'react';
    import { X, Paperclip, Send } from 'lucide-react';

    function SecureMessaging({ onSendMessage, onClose }) {
      const [message, setMessage] = useState('');
      const [files, setFiles] = useState([]);

      const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
      };

      const handleRemoveFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(message, files);
        setMessage('');
        setFiles([]);
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Secure Messaging</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                  Attach Files
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    name="file-upload"
                    id="file-upload"
                    className="sr-only"
                    onChange={handleFileChange}
                    multiple
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md flex items-center"
                  >
                    <Paperclip className="h-5 w-5 mr-2" />
                    <span>Choose Files</span>
                  </label>
                </div>
                {files.length > 0 && (
                  <ul className="mt-2">
                    {files.map((file, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        {file.name}
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default SecureMessaging;

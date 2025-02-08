import React from 'react';
    import { ChevronDown, ChevronUp, File, MessageSquare, Video, Calendar, AlertTriangle } from 'lucide-react';

    function MedicalEvent({ event, isSelected, onClick }) {
      return (
        <div
          className={`bg-gray-50 p-4 rounded-lg border ${
            isSelected ? 'border-blue-500' : 'border-gray-200'
          } cursor-pointer`}
          onClick={onClick}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {event.type === 'appointment' && <Calendar className="h-5 w-5 text-blue-600 mr-2" />}
              {event.type === 'lab_result' && <File className="h-5 w-5 text-green-600 mr-2" />}
              {event.type === 'doctor_note' && <MessageSquare className="h-5 w-5 text-gray-600 mr-2" />}
              {event.type === 'telehealth' && <Video className="h-5 w-5 text-purple-600 mr-2" />}
              <div>
                <p className="text-lg font-semibold">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
            {isSelected ? (
              <ChevronUp className="h-5 w-5 text-gray-700" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-700" />
            )}
          </div>

          {isSelected && (
            <div className="mt-4">
              <p className="text-gray-700">{event.details}</p>
              {event.aiInsights && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 mt-2 flex items-center">
                  <AlertTriangle className='h-4 w-4 mr-1'/>
                  <span>{event.aiInsights}</span>
                </div>
              )}
              {event.attachments && event.attachments.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold">Attachments:</p>
                  <ul>
                    {event.attachments.map((attachment, index) => (
                      <li key={index} className="text-blue-600 hover:underline">
                        <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                          {attachment.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    export default MedicalEvent;

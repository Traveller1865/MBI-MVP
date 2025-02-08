import React from 'react';
    import { X, File, Calendar, MessageSquare, Video } from 'lucide-react';

    function DetailsPanel({ selectedEvent, onClose, testResults, doctorNotes }) {
      if (!selectedEvent) return null;

      let detailsContent;

      if (selectedEvent.type === 'appointment' || selectedEvent.type === 'telehealth') {
        detailsContent = (
          <>
            <p className="text-gray-700">{selectedEvent.details}</p>
            {selectedEvent.aiInsights && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 mt-2">
                {selectedEvent.aiInsights}
              </div>
            )}
            {selectedEvent.attachments && selectedEvent.attachments.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold">Attachments:</p>
                <ul>
                  {selectedEvent.attachments.map((attachment, index) => (
                    <li key={index} className="text-blue-600 hover:underline">
                      <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                        {attachment.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedEvent.telehealth && <div className='mt-4'>TELEHEALTH PLACEHOLDER</div>}
          </>
        );
    } else if (selectedEvent.type === 'lab_result') {
        const bloodworkResult = testResults.bloodwork.find(result => result.id === selectedEvent.id);
        if(bloodworkResult) {
            detailsContent = (
              <>
                <p><span className='font-semibold'>Metric:</span> {bloodworkResult.metric}</p>
                <p><span className='font-semibold'>Value:</span> {bloodworkResult.value} {bloodworkResult.unit}</p>
                <p><span className='font-semibold'>Reference Range:</span> {bloodworkResult.referenceRange}</p>
                <p><span className='font-semibold'>Status:</span> {bloodworkResult.status}</p>
              </>
            );
        } else {
            detailsContent = <p>No details available for this lab result.</p>
        }

    } else if (selectedEvent.type === 'imaging') {
        detailsContent = (
          <>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full rounded-md" />
            <p className="text-lg font-semibold mt-2">{selectedEvent.title}</p>
            <p className="text-sm text-gray-500">{selectedEvent.date}</p>
            <p className="mt-2">{selectedEvent.findings}</p>
             {
                selectedEvent.attachments && selectedEvent.attachments.length > 0 &&
                <div className='mt-2'>
                    <a className='text-blue-500' href={selectedEvent.attachments[0].url} target='_blank'>{selectedEvent.attachments[0].name}</a>
                </div>
            }
          </>
        );
    } else if (selectedEvent.type === 'doctor_note') {
        const note = doctorNotes.find(n => n.id === selectedEvent.id);
        if(note) {
            detailsContent = (
              <>
                <p className="text-gray-700">{note.note}</p>
                {note.treatmentPlan && (
                  <div className="mt-2">
                    <p className="font-semibold">Treatment Plan:</p>
                    <p className="text-gray-700">{note.treatmentPlan}</p>
                  </div>
                )}
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Download PDF
                </button>
              </>
            );
        } else {
            detailsContent = <p>No details available for this note.</p>
        }
    }

      return (
        <div className="fixed inset-y-0 right-0 w-full md:w-1/2 bg-white shadow-lg z-20 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{selectedEvent.title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">{selectedEvent.date}</p>
            {detailsContent}
          </div>
        </div>
      );
    }

    export default DetailsPanel;

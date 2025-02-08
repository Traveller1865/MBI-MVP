import React, { useState } from 'react';
    import MedicalTimeline from './MedicalRecords/MedicalTimeline';
    import TestResults from './MedicalRecords/TestResults';
    import DoctorNotes from './MedicalRecords/DoctorNotes';
    import AppointmentScheduler from './MedicalRecords/AppointmentScheduler';
    import SecureMessaging from './MedicalRecords/SecureMessaging';
    import TelehealthWindow from './MedicalRecords/TelehealthWindow';
    import DetailsPanel from './MedicalRecords/DetailsPanel';
    import { Calendar, MessageSquare, FileText, BarChart2, Bell, X } from 'lucide-react';

    // Sample data (replace with actual data fetching)
    const initialMedicalEvents = [
      { id: 1, date: '2023-10-26', type: 'appointment', title: 'General Checkup', details: 'Routine checkup.', aiInsights: 'BP slightly elevated.', attachments: [] },
      { id: 2, date: '2023-11-15', type: 'lab_result', title: 'Blood Test', details: 'Cholesterol normal, Vitamin D low.', aiInsights: 'Low Vitamin D.', attachments: [{ name: 'bloodwork.pdf', url: '#' }] },
      { id: 3, date: '2023-12-05', type: 'appointment', title: 'Follow-up', details: 'Discussed lab results.', aiInsights: 'Monitor Vitamin D.', attachments: [] },
      { id: 4, date: '2024-03-10', type: 'telehealth', title: 'Virtual Consultation', details: 'Discussed Vitamin D.', aiInsights: 'Vitamin D improving.', attachments: [], telehealth: true },
      { id: 5, date: '2024-03-15', type: 'doctor_note', title: 'Doctor\'s Note', details: 'Patient feeling better.', aiInsights: null, attachments: [] },
    ];

    const initialTestResults = {
      bloodwork: [
        { id: 1, date: '2023-11-15', metric: 'Hemoglobin', value: 14.5, unit: 'g/dL', referenceRange: '13.5-17.5', status: 'normal' },
        { id: 2, date: '2023-11-15', metric: 'Glucose', value: 95, unit: 'mg/dL', referenceRange: '70-100', status: 'normal' },
        { id: 3, date: '2023-11-15', metric: 'Cholesterol', value: 180, unit: 'mg/dL', referenceRange: '<200', status: 'normal' },
        { id: 4, date: '2023-11-15', metric: 'Vitamin D', value: 25, unit: 'ng/mL', referenceRange: '30-100', status: 'low' },
      ],
      imaging: [
        { id: 1, date: '2023-10-01', type: 'X-ray', title: 'Chest X-ray', findings: 'No abnormalities detected.', image: '/xray-placeholder.jpg', attachments: [{name: 'xray_report.pdf', url: '#'}] },
      ],
    };

    const initialDoctorNotes = [
      { id: 1, date: '2023-10-26', note: 'Patient in good overall health. Advised on diet and exercise.', treatmentPlan: null },
      { id: 2, date: '2023-12-05', note: 'Started Vitamin D supplements.', treatmentPlan: 'Vitamin D 2000 IU daily, follow-up in 3 months.' },
    ];

    function MedicalRecords() {
      const [medicalEvents, setMedicalEvents] = useState(initialMedicalEvents);
      const [testResults, setTestResults] = useState(initialTestResults);
      const [doctorNotes, setDoctorNotes] = useState(initialDoctorNotes);
      const [selectedEvent, setSelectedEvent] = useState(null);
      const [selectedTab, setSelectedTab] = useState('timeline'); // 'timeline', 'testResults', 'doctorNotes'
      const [showScheduler, setShowScheduler] = useState(false);
      const [showMessaging, setShowMessaging] = useState(false);
      const [showDetailsPanel, setShowDetailsPanel] = useState(false);
      const [newResultsAvailable, setNewResultsAvailable] = useState(true);
      const [recentUpdates, setRecentUpdates] = useState([ // Store recent updates
        { id: 1, type: 'testResult', message: 'New bloodwork results available.' },
      ]);

      const handleEventClick = (event) => {
        setSelectedEvent(event);
        setShowDetailsPanel(true);
      };

      const handleCloseDetailsPanel = () => {
        setShowDetailsPanel(false);
        setSelectedEvent(null);
      };

      const handleScheduleAppointment = (appointmentDetails) => {
        const newEvent = {
          id: medicalEvents.length + 1,
          date: appointmentDetails.date,
          type: appointmentDetails.type,
          title: appointmentDetails.title,
          details: appointmentDetails.details,
          aiInsights: null,
          attachments: [],
          telehealth: appointmentDetails.type === 'telehealth',
        };
        setMedicalEvents([...medicalEvents, newEvent].sort((a, b) => new Date(a.date) - new Date(b.date)));
        setShowScheduler(false);
      };

      const handleSendMessage = (message, files) => {
        console.log('Sending message:', message, 'Files:', files);
        setShowMessaging(false);
      };

      const handleDismissNotification = () => {
        setNewResultsAvailable(false);
        // Remove the dismissed notification from recentUpdates (optional)
        setRecentUpdates(recentUpdates.filter(update => update.type !== 'testResult'));
      };

      return (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Medical Records</h1>
            <div className="flex items-center">
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="h-6 w-6 text-gray-500" />
                  {recentUpdates.length > 0 && (
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-2 hidden group-hover:block z-10">
                  <h3 className="text-lg font-semibold mb-2">Recent Updates</h3>
                  {recentUpdates.length > 0 ? (
                    recentUpdates.map(update => (
                      <div key={update.id} className="p-2 border-b last:border-b-0">
                        <p className="text-sm">{update.message}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No recent updates.</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowScheduler(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 ml-4"
              >
                <Calendar className="h-5 w-5" />
                Schedule
              </button>
              <button
                onClick={() => setShowMessaging(true)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 ml-2 hover:bg-gray-300"
              >
                <MessageSquare className="h-5 w-5" />
                Message
              </button>
            </div>
          </div>

          {newResultsAvailable && (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              <span>New test results are available.</span>
              <button className="ml-auto text-blue-600 hover:underline" onClick={handleDismissNotification}>
                Dismiss
              </button>
            </div>
          )}

          <div className="flex-1 flex flex-col">
            <div className="bg-white rounded-lg shadow-md w-full">
              <div className="flex border-b">
                <button
                  onClick={() => setSelectedTab('timeline')}
                  className={`px-6 py-3 hover:bg-gray-100 w-full ${
                    selectedTab === 'timeline' ? 'bg-gray-100 border-b-2 border-blue-600' : ''
                  }`}
                >
                  <FileText className="h-5 w-5 mr-2 inline-block" />
                  Medical Timeline
                </button>
                <button
                  onClick={() => setSelectedTab('testResults')}
                  className={`px-6 py-3 hover:bg-gray-100 w-full ${
                    selectedTab === 'testResults' ? 'bg-gray-100 border-b-2 border-blue-600' : ''
                  }`}
                >
                  <BarChart2 className="h-5 w-5 mr-2 inline-block" />
                  Test Results
                </button>
                <button
                  onClick={() => setSelectedTab('doctorNotes')}
                  className={`px-6 py-3 hover:bg-gray-100 w-full ${
                    selectedTab === 'doctorNotes' ? 'bg-gray-100 border-b-2 border-blue-600' : ''
                  }`}
                >
                  <MessageSquare className="h-5 w-5 mr-2 inline-block" />
                  Doctor Notes
                </button>
              </div>
              <div className="p-4">
                {selectedTab === 'timeline' && (
                  <MedicalTimeline
                    events={medicalEvents}
                    onEventClick={handleEventClick}
                    selectedEvent={selectedEvent}
                  />
                )}
                {selectedTab === 'testResults' && <TestResults results={testResults} onResultClick={handleEventClick} />}
                {selectedTab === 'doctorNotes' && <DoctorNotes notes={doctorNotes} onNoteClick={handleEventClick} />}
              </div>
            </div>
          </div>

          {showDetailsPanel && (
            <DetailsPanel
              selectedEvent={selectedEvent}
              onClose={handleCloseDetailsPanel}
              testResults={testResults}
              doctorNotes={doctorNotes}
            />
          )}

          {showScheduler && (
            <AppointmentScheduler
              onSchedule={handleScheduleAppointment}
              onClose={() => setShowScheduler(false)}
            />
          )}
          {showMessaging && (
            <SecureMessaging
              onSendMessage={handleSendMessage}
              onClose={() => setShowMessaging(false)}
            />
          )}
        </div>
      );
    }

    export default MedicalRecords;

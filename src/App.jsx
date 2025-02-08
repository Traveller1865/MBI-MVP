import React, { useState } from 'react';
import { Activity, FileText, BarChart2, GraduationCap, Users, Settings, ChevronLeft, ChevronRight, Home as HomeIcon, Bell } from 'lucide-react';
import NavItem from './components/common/NavItem';
import Home from './components/Home/Home';
import MedicalRecords from './components/MedicalRecords';
import WellnessTracking from './components/WellnessTracking';
import ELearning from './components/ELearning';
import Community from './components/Community';
import SettingsComponent from './components/Settings';
import NotificationsPanel from './components/Home/NotificationsPanel'
import Footer from './components/common/Footer';
import SidebarQuickActions from './components/common/SidebarQuickActions';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [notificationsCollapsed, setNotificationsCollapsed] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3); // Start with 3 unread notifications

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside
          className={`bg-white border-r border-gray-200 transition-all duration-300 ${
            sidebarCollapsed ? 'w-20' : 'w-64'
          }`}
        >
          <div
            className={`flex items-center gap-3 px-6 py-5 border-b border-gray-200 ${
              sidebarCollapsed ? 'justify-center' : 'justify-between'
            }`}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <Activity className="h-8 w-8 text-blue-600 flex-shrink-0" />
              {!sidebarCollapsed && (
                <div className="flex flex-col">
                  <span className="text-lg font-bold">MBI</span>
                  <span className="text-xs text-gray-500">Health First, Always</span>
                </div>
              )}
            </div>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 hover:bg-gray-100 rounded-lg"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <nav className="p-4">
            <div className="space-y-1">
              <NavItem icon={HomeIcon} label="Home Dashboard" active={activeSection === 'home'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('home')} />
              <NavItem icon={FileText} label="Medical Records" active={activeSection === 'medicalRecords'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('medicalRecords')} />
              <NavItem icon={BarChart2} label="Wellness Tracking" active={activeSection === 'wellnessTracking'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('wellnessTracking')}  />
              <NavItem icon={GraduationCap} label="e-Learning Portal" active={activeSection === 'eLearning'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('eLearning')} />
              <NavItem icon={Users} label="Community" active={activeSection === 'community'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('community')} />
              <NavItem icon={Settings} label="Settings" active={activeSection === 'settings'} collapsed={sidebarCollapsed} onClick={() => setActiveSection('settings')} />
            </div>
            <SidebarQuickActions collapsed={sidebarCollapsed} />
          </nav>
        </aside>

        <main className="flex-1 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold">
                  {activeSection === 'home' && 'Home Dashboard'}
                  {activeSection === 'medicalRecords' && 'Medical Records'}
                  {activeSection === 'wellnessTracking' && 'Wellness Tracking'}
                  {activeSection === 'eLearning' && 'e-Learning Portal'}
                  {activeSection === 'community' && 'Community'}
                  {activeSection === 'settings' && 'Settings'}
              </h1>
              <div className="flex items-center gap-4">
                  <button
                      onClick={() => {setNotificationsCollapsed(!notificationsCollapsed); setNotificationCount(0);}}
                      className="relative p-2 hover:bg-gray-100 rounded-full"
                  >
                      <Bell className="h-6 w-6 text-gray-500" />
                      {notificationCount > 0 && (
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                      )}
                  </button>
                  {/* User Profile Icon Placeholder */}
                  <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              </div>
          </div>
          
          <div className="p-6">
            {activeSection === 'home' && <Home />}
            {activeSection === 'medicalRecords' && <MedicalRecords />}
            {activeSection === 'wellnessTracking' && <WellnessTracking />}
            {activeSection === 'eLearning' && <ELearning />}
            {activeSection === 'community' && <Community />}
            {activeSection === 'settings' && <SettingsComponent />}
          </div>
        </main>
        {/* Notifications Sidebar */}
              <NotificationsPanel collapsed={notificationsCollapsed} />

      </div>
      <Footer />
    </div>
  );
}

export default App;

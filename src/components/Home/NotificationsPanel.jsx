import React, { useState } from 'react';

function NotificationsPanel({ collapsed }) {
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'appointment', message: 'Reminder: Doctor appointment tomorrow at 10 AM.' },
        { id: 2, type: 'result', message: 'Your lab results are available.' },
        { id: 3, type: 'wellness', message: 'Time for your daily walk!' },
    ]);

    return (
        <div
            className={`bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${collapsed ? 'w-0 p-0' : 'w-72 p-4'
                }`}
        >
            <h3 className="text-lg font-semibold mb-3">Notifications</h3>
            <div className="space-y-2">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="p-2 rounded-md border border-gray-200 bg-white"
                    >
                        <p className="text-sm">{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationsPanel;

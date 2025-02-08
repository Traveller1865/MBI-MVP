import React from 'react';

function QuickAction({ icon: Icon, label, onClick, primary }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors duration-200 ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className={`h-5 w-5 ${primary ? 'text-white' : 'text-gray-500'} flex-shrink-0`} />
      <span className="text-sm">{label}</span>
    </button>
  );
}

export default QuickAction;

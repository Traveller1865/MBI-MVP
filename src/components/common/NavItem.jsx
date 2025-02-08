import React from 'react';

function NavItem({ icon: Icon, label, active, collapsed, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
        active
          ? 'bg-blue-100 text-blue-600'
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-gray-500'} flex-shrink-0`} />
      {!collapsed && <span className="text-sm">{label}</span>}
    </a>
  );
}

export default NavItem;

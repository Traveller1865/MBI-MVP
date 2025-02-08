import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-6 sticky bottom-0">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>
        <p>&copy; {new Date().getFullYear()} MBI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

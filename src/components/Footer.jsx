import React from 'react';

function Footer({ config }) {
  return (
    <footer className="bg-gray-900 text-white text-center py-4" data-testid="footer">
      <p>&copy; {new Date().getFullYear()} {config.businessName}</p>
    </footer>
  );
}

export default Footer;

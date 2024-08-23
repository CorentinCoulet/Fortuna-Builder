import React from 'react';
import '../styles/components/InternalNavbar.scss';

interface InternalNavbarProps {
  setActiveSection: (section: string) => void;
}

const InternalNavbar: React.FC<InternalNavbarProps> = ({ setActiveSection }) => {
  return (
    <nav className="internal-navbar">
      <ul>
        <li onClick={() => setActiveSection('recherche')}>Recherches</li>
        <li onClick={() => setActiveSection('aptitudes')}>Aptitudes</li>
        <li onClick={() => setActiveSection('sorts')}>Sorts</li>
        <li onClick={() => setActiveSection('enchantement')}>Enchantement</li>
        <li onClick={() => setActiveSection('recap')}>Récap</li>
      </ul>
    </nav>
  );
};

export default InternalNavbar;

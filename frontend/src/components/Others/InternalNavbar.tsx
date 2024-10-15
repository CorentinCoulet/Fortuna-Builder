import React, { useState, useEffect } from 'react';
import '../../styles/components/Others/InternalNavbar.scss';

interface InternalNavbarProps {
  setActiveSection: (section: string) => void;
}

const InternalNavbar: React.FC<InternalNavbarProps> = ({ setActiveSection }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 400);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="internal-navbar">
      <ul>
        <li onClick={() => setActiveSection('recherche')}>Recherche</li>
        <li onClick={() => setActiveSection('aptitudes')}>{isSmallScreen ? 'Apti.' : 'Aptitudes'}</li>
        <li onClick={() => setActiveSection('sorts')}>Sorts</li>
        <li onClick={() => setActiveSection('enchantement')}>{isSmallScreen ? 'Enchant.' : 'Enchantement'}</li>
        <li onClick={() => setActiveSection('recap')}>Récap</li>
      </ul>
    </nav>
  );
};

export default InternalNavbar;

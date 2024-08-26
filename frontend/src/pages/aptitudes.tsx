import React from 'react';
import Intel from '../components/Aptitudes/Intel';
import Strength from '../components/Aptitudes/Strength';
import Agility from '../components/Aptitudes/Agility';
import Chance from '../components/Aptitudes/Chance';
import Major from '../components/Aptitudes/Major';
import RecapApt from '../components/Aptitudes/RecapApt';

const Aptitudes: React.FC = () => {
  return (
    <div className='aptitudes'>
      <Intel />
      <Strength />
      <Agility />
      <Chance />
      <Major />
      <RecapApt />
    </div>
  );
};

export default Aptitudes;

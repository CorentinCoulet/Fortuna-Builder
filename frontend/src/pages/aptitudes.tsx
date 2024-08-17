import React from 'react';
import Intel from '../components/Intel';
import Strength from '../components/Strength';
import Agility from '../components/Agility';
import Chance from '../components/Chance';
import Major from '../components/Major';
import RecapApt from '../components/RecapApt';

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

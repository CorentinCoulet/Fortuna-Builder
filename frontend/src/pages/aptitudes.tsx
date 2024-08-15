import React from 'react';
import Intel from '../components/Intel';
import Strength from '../components/Strength';
import Agility from '../components/Agility';
import Chance from '../components/Chance';
import Major from '../components/Major';

const Aptitudes: React.FC = () => {
  return (
    <div>
      <Intel />
      <Strength />
      <Agility />
      <Chance />
      <Major />
    </div>
  );
};

export default Aptitudes;

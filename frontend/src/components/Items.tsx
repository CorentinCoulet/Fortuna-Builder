import '../styles/components/Items.scss';
import { Equipments } from '../asset';
import React from 'react';
  
const Items: React.FC = () => {
    return (
      <div className="items-container">
        {Equipments.map((item, index) => (
          <img loading="lazy" key={index} src={item.src} alt={item.alt} className="item-image" />
        ))}
      </div>
    );
  };
  
  export default Items;
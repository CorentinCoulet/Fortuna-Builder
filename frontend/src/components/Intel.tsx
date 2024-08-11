import React, { useEffect, useState } from "react";
import { nameCategories, nameCategoriesHover, aptLogos, selectors } from "../asset";
import '../styles/components/Intel.scss';

const intel: number[] = [];
for (let i = 2; i < 231; i += 4) {
  intel.push(i);
}

const Intel: React.FC = () => {
  /*
        2 6 10 14 18 22 26 30 34 38 42 46 INTEL
        3 7 11 15 19 23 27 31 35 39 43 47 FORCE
        4 8 12 16 20 24 28 32 36 40 44 48 AGILITE
        5 9 13 17 21 25
        25 75 125 175 MAJEUR

        173 -> 
    */

  const [valueCount, setValueCount] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const lvlClass = document.querySelector("#lvl") as HTMLInputElement | null;
    if (lvlClass) {
      const lvlValue = parseInt(lvlClass.value, 10);
      const index = intel.findIndex((value) => value >= lvlValue);
      const closestIndex =
        index === -1 ? intel.length - 1 : index === 0 ? 0 : index - 1;
      const newValueCount = closestIndex + 1;
      setValueCount(newValueCount);
    }
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div 
        className="intel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <div>
        <div>
          <p>INTELLIGENCE</p>
          <span>{valueCount}</span>
        </div>
        <div>
            <img 
                src={hovered ? nameCategoriesHover[1].src : nameCategories[1].src} 
                alt={hovered ? nameCategoriesHover[1].alt : nameCategories[1].alt} 
            />
        </div>
      </div>
      <div>
        {Object.values(aptLogos[1]).map((logo, index) => (
            <div>
                <div>
                   <img key={index} src={logo.src} alt={logo.alt} />
                   <p>{logo.alt}</p>
                </div>
                <div>
                    <div>    
                    {Object.values(selectors).map((selector, selectorIndex) => (
                        <div key={selectorIndex} className="selector-item">
                        <img src={selector.src} alt={selector.alt} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Intel;

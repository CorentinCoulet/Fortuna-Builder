import React, { useEffect, useState } from 'react';
import Deck from '../components/Deck';
import SpellsClasses from '../components/SpellsClasses';

interface Spell {
  src: string;
  alt: string;
}

interface Spells {
  [key: string]: { [key: string]: Spell };
}

const Spells: React.FC = () => {
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [spells, setSpells] = useState<Spells>({});

    useEffect(() => {
        const selectedImageAlt = document.querySelector('.sect1 img')?.getAttribute('alt');
        
        if (selectedImageAlt) {
            setSelectedClass(selectedImageAlt);
        }
    }, []);

    useEffect(() => {
        if (selectedClass) {
            import(`../../scripts/generateSpellsImports.js`)
                .then(module => {
                    const commonSpells = module.CommonSpells;
                    const classSpellsKey = `${selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}Spells`;
                    const classSpells = module[classSpellsKey] || {};

                    setSpells({ ...commonSpells, ...classSpells });
                })
                .catch(err => console.error(err));
        }
    }, [selectedClass]);
    return (
        <div>
            <Deck />
            <SpellsClasses
                spells={spells}
            />
        </div>
    );
};

export default Spells;

import React from 'react';

interface Spell {
    src: string;
    alt: string;
    key?: string;
    name?: string;
    effects?: string;
    details?: string;
}

interface SpellsClassesInformationsProps {
    spell: Spell | null;
}

const SpellsClassesInformations: React.FC<SpellsClassesInformationsProps> = ({ spell }) => {
    if (!spell) return (
        <div className='spell-description'>
            <p>Sélectionnez un sort pour voir les détails.</p>
        </div>
    );

    return (
        <div className='spell-description'>
            <h2>{spell.name}</h2>
            <img src={spell.src} alt={spell.alt} />
            <p>{spell.effects}</p>
            <p>{spell.details}</p>
        </div>
    );
};

export default SpellsClassesInformations;

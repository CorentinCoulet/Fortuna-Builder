import React from 'react';

interface Spell {
    src: string;
    alt: string;
}

interface SpellsClassesProps {
    spells: {
        [key: string]: { [key: string]: Spell };
    };
}

const SpellsClasses: React.FC<SpellsClassesProps> = ({ spells }) => {
    const renderSpellsSection = (title: string, spellsSection: { [key: string]: Spell }) => {
        if (Object.keys(spellsSection).length === 0) return null;

        return (
            <section>
                <h2>{title}</h2>
                {Object.entries(spellsSection).map(([key, spell]) => (
                    <div key={key}>
                        <img src={spell.src} alt={spell.alt} />
                    </div>
                ))}
            </section>
        );
    };

    return (
        <div>
            <div>
                <p>Sorts</p>
            </div>
            <div>
                <section>
                    {Object.keys(spells).filter(key => key !== 'active' && key !== 'passive').map(key => 
                        renderSpellsSection('', spells[key])
                    )}
                </section>
                <section>
                    {renderSpellsSection('', spells.active || {})}
                </section>
                <section>
                    {renderSpellsSection('', spells.passive || {})}
                </section>    
            </div>
        </div>
    );
};

export default SpellsClasses;

import React from 'react';
import '../styles/components/SpellsClasses.scss';

interface Spell {
    src: string;
    alt: string;
}

interface SpellsClassesProps {
    spells: {
        [key: string]: { [key: string]: Spell };
    },
    commonSpells: {
        [key: string]: { [key: string]: Spell };
    },
    onSpellSelect: (spell: Spell, type: 'active' | 'passive') => void;
}

const SpellsClasses: React.FC<SpellsClassesProps> = ({
    spells,
    commonSpells,
    onSpellSelect,
}) => {
    const handleSpellDoubleClick = (spell: Spell, type: 'active' | 'passive') => {
        onSpellSelect(spell, type);
    };

    const renderSpellsSection = (sectionKey: string, spellsSection: { [key: string]: Spell }, type: 'active' | 'passive') => {
        if (Object.keys(spellsSection).length === 0) return null;

        return (
            <section>
                {Object.entries(spellsSection).map(([key, spell]) => (
                    <div
                        key={`${sectionKey}-${key}`}
                        onDoubleClick={() => handleSpellDoubleClick(spell, type)}
                    >
                        <img
                            src={spell.src}
                            alt={spell.alt}
                        />
                    </div>
                ))}
            </section>
        );
    };

    const renderCombinedSpellsSection = (key: string, type: 'active' | 'passive') => {
        const classSpellsSection = spells[key] || {};
        const commonSpellsSection = commonSpells[key] || {};

        return (
            <section>
                {renderSpellsSection(key, classSpellsSection, type)}
                {renderSpellsSection(`common-${key}`, commonSpellsSection, type)}
            </section>
        );
    };

    return (
        <div className='spellsClasses'>
            <div>
                <p>Sorts</p>
            </div>
            <div>
                <div>
                    {Object.keys(spells).filter(key => key !== 'active' && key !== 'passive').map(key =>
                        renderSpellsSection(key, spells[key], 'active')
                    )}
                </div>
                <div className='spells-active'>
                    {renderCombinedSpellsSection('active', 'active')}
                </div>
                <div className='spells-passive'>
                    {renderCombinedSpellsSection('passive', 'passive')}
                </div>
            </div>
        </div>
    );
};

export default SpellsClasses;

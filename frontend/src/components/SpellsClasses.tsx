import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import '../styles/components/SpellsClasses.scss';
import { setSelectedClass } from '../features/components/spellsSlice.ts';

interface Spell {
    src: string;
    alt: string;
    key?: string;
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

    const dispatch = useDispatch();
    useEffect(() => {
        // Sélectionner l'élément image par sa classe
        const imageElement = document.querySelector('.imgClasses');

        if (imageElement && imageElement instanceof HTMLImageElement) {
            const altText = imageElement.alt;

            // Dispatch l'action pour mettre à jour selectedClass avec l'attribut alt
            dispatch(setSelectedClass(altText));
        }
    }, [dispatch]);

    const handleSpellDoubleClick = (spell: Spell, type: 'active' | 'passive') => {
        onSpellSelect(spell, type);
    };

    const renderSpellsSection = (sectionKey: string, spellsSection: { [key: string]: Spell }, type: 'active' | 'passive') => {
        if (Object.keys(spellsSection).length === 0) return null;

        return (
            <section>
                {Object.entries(spellsSection).map(([key, spell], index) => (
                    <div
                        key={spell.key || `${sectionKey}-${key}-${spell.src}-${index}`}
                        onDoubleClick={() => handleSpellDoubleClick(spell, type)}
                    >
                        <img
                            loading="lazy"
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

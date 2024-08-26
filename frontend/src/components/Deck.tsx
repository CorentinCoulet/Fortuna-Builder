import React, { useEffect } from 'react';
import EmptyCase from '../assets/sorts/deck.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Deck.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { clearAllSpells } from '../features/components/spellsSlice';

interface Spell {
    src: string;
    alt: string;
}

interface DeckProps {
    isReadOnly?: boolean;
}

const Deck: React.FC<DeckProps> = ({ isReadOnly = false }) => {
    const dispatch = useDispatch<AppDispatch>();

    const activeSpells = useSelector((state: RootState) => state.spells.activeSpells);
    const passiveSpells = useSelector((state: RootState) => state.spells.passiveSpells);

    useEffect(() => {
        if (!isReadOnly) {
            const imgClasses = document.querySelector('.imgClasses');
            if (imgClasses && imgClasses instanceof HTMLImageElement) {
                const observer = new MutationObserver((mutationsList) => {
                    for (const mutation of mutationsList) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'alt') {
                            dispatch(clearAllSpells());
                        }
                    }
                });

                observer.observe(imgClasses, { attributes: true });
                return () => {
                    observer.disconnect();
                };
            }
        }
    }, [dispatch, isReadOnly]);

    const renderSpellImage = (spell: Spell, index: number) => (
        <img
            loading="lazy"
            key={`${spell.src}-${spell.alt}-${index}`}
            src={spell.src}
            alt={spell.alt}
        />
    );

    const handleClearAllSpells = () => {
        if (!isReadOnly) {
            dispatch(clearAllSpells());
            localStorage.removeItem('activeSpells');
            localStorage.removeItem('passiveSpells');
        }
    };

    return (
        <div className="deck">
            <div>
                <p>Deck</p>
                <div>
                    {!isReadOnly && (
                        <>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={handleClearAllSpells} />
                            <FontAwesomeIcon icon={faCopy} />
                        </>
                    )}
                </div>
            </div>
            <div>
                <div className="active">
                    {Array.from({ length: 12 }).map((_, index) => {
                        const spell = activeSpells[index];
                        return spell ? renderSpellImage(spell, index) : <img loading="lazy" key={`empty-active-${index}`} src={EmptyCase} alt="Case vide" />;
                    })}
                </div>
                <div className="passive">
                    {Array.from({ length: 6 }).map((_, index) => {
                        const spell = passiveSpells[index];
                        return spell ? renderSpellImage(spell, index) : <img loading="lazy" key={`empty-passive-${index}`} src={EmptyCase} alt="Case vide" />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Deck;
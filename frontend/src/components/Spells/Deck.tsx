import React, { useEffect } from "react";
import EmptyCase from "../../assets/sorts/deck.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import "../../styles/components/Deck.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  clearAllSpells,
  addActiveSpell,
  addPassiveSpell,
  removeActiveSpell,
  removePassiveSpell,
} from "../../features/components/spellsSlice";

interface Spell {
  src: string;
  alt: string;
}

interface DeckProps {
  isReadOnly?: boolean;
}

const Deck: React.FC<DeckProps> = ({ isReadOnly = false }) => {
  const dispatch = useDispatch<AppDispatch>();

  const activeSpells = useSelector(
    (state: RootState) => state.spells.activeSpells
  );
  const passiveSpells = useSelector(
    (state: RootState) => state.spells.passiveSpells
  );

  useEffect(() => {
    if (!isReadOnly) {
      const imgClasses = document.querySelector(".imgClasses");
      if (imgClasses && imgClasses instanceof HTMLImageElement) {
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "alt"
            ) {
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

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    dropType: "active" | "passive",
    dropIndex: number
  ) => {
    event.preventDefault();
    const spellData = event.dataTransfer.getData("spellData");

    if (!spellData) {
        return;
    }

    try {
        const { spell, type } = JSON.parse(spellData) as { 
            spell: Spell; 
            type: "active" | "passive" 
        };
        if (type === dropType) {
          if (dropType === "active" && activeSpells[dropIndex]) {
            dispatch(removeActiveSpell(activeSpells[dropIndex]));
          } else if (dropType === "passive" && passiveSpells[dropIndex]) {
            dispatch(removePassiveSpell(passiveSpells[dropIndex]));
          }

          if (dropType === "active") {
            dispatch(addActiveSpell({ spell, index: dropIndex }));
          } else if (dropType === "passive") {
            dispatch(addPassiveSpell({ spell, index: dropIndex }));
          }
        } else {
          console.warn(`Cannot drop a ${type} spell into a ${dropType} slot.`);
        }
    } catch (error) {
        console.error("Failed to parse spellData:", error);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRightClick = (
    event: React.MouseEvent<HTMLDivElement>,
    spell: Spell,
    type: "active" | "passive"
  ) => {
    event.preventDefault();
    if (type === "active") {
      dispatch(removeActiveSpell(spell));
    } else if (type === "passive") {
      dispatch(removePassiveSpell(spell));
    }
  };

  const renderSpellImage = (
    spell: Spell,
    index: number,
    type: "active" | "passive"
  ) => (
    <div
      key={`${spell.src}-${index}`}
      onDrop={(e) => handleDrop(e, type, index)}
      onDragOver={handleDragOver}
      onContextMenu={(e) => handleRightClick(e, spell, type)}
    >
      <img src={spell.src} alt={spell.alt} />
    </div>
  );

  const renderEmptyCase = (index: number, type: "active" | "passive") => (
    <div
      key={`empty-${type}-${index}`}
      onDrop={(e) => handleDrop(e, type, index)}
      onDragOver={handleDragOver}
    >
      <img loading="lazy" src={EmptyCase} alt="Case vide" />
    </div>
  );

  const handleClearAllSpells = () => {
    if (!isReadOnly) {
      dispatch(clearAllSpells());
      localStorage.removeItem("activeSpells");
      localStorage.removeItem("passiveSpells");
    }
  };

  return (
    <div className="deck">
      <div>
        <p>Deck</p>
        <div>
          {!isReadOnly && (
            <>
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={handleClearAllSpells}
              />
              {/* <FontAwesomeIcon icon={faCopy} /> */}
            </>
          )}
        </div>
      </div>
      <div>
        <div className="active">
          {Array.from({ length: 12 }).map((_, index) => {
            const spell = activeSpells[index];
            return spell
              ? renderSpellImage(spell, index, "active")
              : renderEmptyCase(index, "active");
          })}
        </div>
        <div className="passive">
          {Array.from({ length: 6 }).map((_, index) => {
            const spell = passiveSpells[index];
            return spell
              ? renderSpellImage(spell, index, "passive")
              : renderEmptyCase(index, "passive");
          })}
        </div>
      </div>
    </div>
  );
};

export default Deck;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/components/SpellsClasses.scss";
import { setSelectedClass } from "../../features/components/spellsSlice.ts";
import { RootState } from "../../store.ts";
import SpellsClassesInformations from "./SpellsClassesInformations.tsx";


interface Spell {
  src: string;
  alt: string;
  key?: string;
  name?: string;
  effects?: string;
  details?: string;
}

interface SpellsClassesProps {
  spells: {
    [key: string]: { [key: string]: Spell };
  };
  commonSpells: {
    [key: string]: { [key: string]: Spell };
  };
  onSpellSelect: (
    spell: Spell,
    type: "active" | "passive",
    index: number
  ) => void;
  onSpellClick: (spell: Spell) => void;
  onSpellDrag: (spell: Spell) => void;
}

const SpellsClasses: React.FC<SpellsClassesProps> = ({
  spells,
  commonSpells,
  onSpellSelect,
  onSpellClick,
  onSpellDrag,
}) => {
  const dispatch = useDispatch();
  const usedSpells = useSelector((state: RootState) => state.spells.usedSpells);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  React.useEffect(() => {
    const imageElement = document.querySelector(".imgClasses");
    if (imageElement && imageElement instanceof HTMLImageElement) {
      const altText = imageElement.alt;
      dispatch(setSelectedClass(altText));
    }
  }, [dispatch]);
  
  const handleSpellClick = (spell: Spell) => {
    setSelectedSpell(spell);
  };

  const handleSpellDoubleClick = (spell: Spell) => {
    if (!usedSpells.includes(spell.src)) {
      onSpellClick(spell);
    }
  };

  const handleSpellDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    spell: Spell,
    type: "active" | "passive"
  ) => {
    if (!usedSpells.includes(spell.src)) {
      const spellData = JSON.stringify({ spell, type });
      event.dataTransfer.setData("spellData", spellData);
      onSpellDrag(spell);
    }
  };

  const renderSpellsSection = (
    sectionKey: string,
    spellsSection: { [key: string]: Spell },
    type: "active" | "passive"
  ) => {
    if (Object.keys(spellsSection).length === 0) return null;

    return (
      <section>
        {Object.entries(spellsSection).map(([key, spell], index) => {
          const isUsed = usedSpells.includes(spell.src);
          return (
            <div
              key={spell.key || `${sectionKey}-${key}-${spell.src}-${index}`}
              draggable={!isUsed}
              onDragStart={(e) => handleSpellDragStart(e, spell, type)}
              onClick={() => handleSpellClick(spell)}
              onDoubleClickCapture={() => handleSpellDoubleClick(spell)}
              onDoubleClick={() => !isUsed && onSpellSelect(spell, type, index)}
              className={isUsed ? "grayed-out" : ""}
            >
              <img loading="lazy" src={spell.src} alt={spell.alt} />
            </div>
          );
        })}
      </section>
    );
  };

  const renderCombinedSpellsSection = (
    key: string,
    type: "active" | "passive"
  ) => {
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
    <div className="spellsClasses">
      <div>
        <p>Sorts</p>
      </div>
      <div>
        <div>
          {Object.keys(spells)
            .filter((key) => key !== "active" && key !== "passive")
            .map((key) => renderSpellsSection(key, spells[key], "active"))}
        </div>
        <div className="spells-active">
          {renderCombinedSpellsSection("active", "active")}
        </div>
        <div className="spells-passive">
          {renderCombinedSpellsSection("passive", "passive")}
        </div>
      </div>
      <SpellsClassesInformations spell={selectedSpell} />
    </div>
  );
};

export default SpellsClasses;

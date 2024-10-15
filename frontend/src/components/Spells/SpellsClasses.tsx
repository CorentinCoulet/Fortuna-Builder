import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/components/Spells/SpellsClasses.scss";
import { setSelectedClass } from "../../features/components/Spells/spellsSlice.ts";
import { RootState } from "../../store.ts";
// import SpellsClassesInformations from "./SpellsClassesInformations.tsx";

interface Spell {
  number: string;
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
  // const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [hoveredSpell, setHoveredSpell] = useState<string | null>(null);

  React.useEffect(() => {
    const imageElement = document.querySelector(".imgClasses");
    if (imageElement && imageElement instanceof HTMLImageElement) {
      const altText = imageElement.alt;
      dispatch(setSelectedClass(altText));
    }
  }, [dispatch]);
  
  // const handleSpellClick = (spell: Spell) => {
  //   setSelectedSpell(spell);
  // };

  const handleSpellDoubleClick = (spell: Spell) => {
    if (!usedSpells.includes(spell.number)) {
      onSpellClick(spell);
    }
  };

  const handleSpellDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    spell: Spell,
    type: "active" | "passive"
  ) => {
    if (!usedSpells.includes(spell.number)) {
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
      <section key={sectionKey}>
        {Object.entries(spellsSection).map(([key, spell], index) => {
          const isUsed = usedSpells.includes(spell.number);
          return (
            <div
              key={`${sectionKey}-${spell.number}`}
              draggable={!isUsed}
              onDragStart={(e) => handleSpellDragStart(e, spell, type)}
              // onClick={() => handleSpellClick(spell)}
              onMouseEnter={() => setHoveredSpell(spell.number)}
              onMouseLeave={() => setHoveredSpell(null)}
              onDoubleClickCapture={() => handleSpellDoubleClick(spell)}
              onDoubleClick={() => !isUsed && onSpellSelect(spell, type, index)}
              className={isUsed ? "spell grayed-out" : "spell"}
            >
              <img loading="lazy" src={spell.src} alt={spell.alt} />
              {hoveredSpell === spell.number && (
                <div className="popup">
                  {spell.alt}
                </div>
              )}
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
      <section key={key}>
        {renderSpellsSection(`class-${key}`, classSpellsSection, type)}
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
            .map((key) => (
              <div key={key}>
                {renderSpellsSection(key, spells[key], "active")}
              </div>
            ))}
          {renderCombinedSpellsSection("active", "active")}
        </div>
        <div className="spells-passive">
          {renderCombinedSpellsSection("passive", "passive")}
        </div>
      </div>
      {/* <SpellsClassesInformations spell={selectedSpell} /> */}
    </div>
  );
};

export default SpellsClasses;

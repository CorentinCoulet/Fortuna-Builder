import React, { useEffect, useState } from "react";
import Deck from "../components/Deck";
import SpellsClasses from "../components/SpellsClasses";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Spell {
  src: string;
  alt: string;
}

interface Spells {
  [key: string]: { [key: string]: Spell };
}

const Spells: React.FC = () => {
  const selectedImage = useSelector(
    (state: RootState) => state.image.selectedImage
  );
  const [spells, setSpells] = useState<Spells>({});
  const [commonSpells, setCommonSpells] = useState<Spells>({});
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [activeSpells, setActiveSpells] = useState<Spell[]>([]);
  const [passiveSpells, setPassiveSpells] = useState<Spell[]>([]);

  useEffect(() => {
    const savedActiveSpells = localStorage.getItem("activeSpells");
    const savedPassiveSpells = localStorage.getItem("passiveSpells");

    if (savedActiveSpells) {
      setActiveSpells(JSON.parse(savedActiveSpells));
    }

    if (savedPassiveSpells) {
      setPassiveSpells(JSON.parse(savedPassiveSpells));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeSpells", JSON.stringify(activeSpells));
    localStorage.setItem("passiveSpells", JSON.stringify(passiveSpells));
  }, [activeSpells, passiveSpells]);

  useEffect(() => {
    if (selectedImage) {
      const className = selectedImage.split("/").pop()?.split(".")[0] || "";
      setSelectedClass(className.charAt(0).toUpperCase() + className.slice(1));
    }
  }, [selectedImage]);

  useEffect(() => {
    if (selectedClass) {
      Promise.all([
        import(`../../scripts/generateSpellsImports.js`).then((module) => ({
          ...(module[selectedClass + "Spells"] || {}),
        })),
        import(`../../scripts/generateSpellsImports.js`).then(
          (module) => module.CommonSpells || {}
        ),
      ])
        .then(([classSpells, commonSpells]) => {
          setSpells(classSpells);
          setCommonSpells(commonSpells);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedClass]);

  const handleSpellSelect = (spell: Spell, type: "active" | "passive") => {
    const imageElement = document.querySelector(
      `.spellsClasses img[src="${spell.src}"]`
    ) as HTMLImageElement;
    const isSelected = imageElement?.classList.contains("selected");
    const selectedElementCount = document.querySelectorAll('.spellsClasses div:first-child img.selected').length;
    const selectedActiveCount = document.querySelectorAll('.spellsClasses .spells-active img.selected').length;
    const selectedPassiveCount = document.querySelectorAll('.spellsClasses .spells-passive img.selected').length;
    if (isSelected) {
      imageElement.classList.remove("selected");
      if (type === "active") {
        setActiveSpells((prev) => 
            prev.filter((s) => s.src !== spell.src || s.alt !== spell.alt)
          );
      } else {
        setPassiveSpells((prev) => 
            prev.filter((s) => s.src !== spell.src || s.alt !== spell.alt)
          );
      }
      
    } else {
        if(
            type === 'active' && 
            activeSpells.length < 12 && 
            (selectedElementCount + selectedActiveCount) < 12){
            imageElement.classList.add('selected');
            setActiveSpells((prev) => [...prev, spell]);       
        } else if(
            type === 'passive' && 
            passiveSpells.length < 6 && 
            selectedPassiveCount < 6){
            imageElement.classList.add('selected');
            setPassiveSpells((prev) => [...prev, spell]);
        }
    }
  };

  const handleClearAllSpells = () => {
    document.querySelectorAll('.spellsClasses img.selected').forEach((img) => {
        img.classList.remove('selected');
    });
    setActiveSpells([]);
    setPassiveSpells([]);
    localStorage.removeItem('activeSpells');
    localStorage.removeItem('passiveSpells');
  }

  return (
    <div>
        <Deck 
            activeSpells={activeSpells} 
            passiveSpells={passiveSpells} 
            onClearAllSpells={handleClearAllSpells}
        />
        <SpellsClasses
            spells={spells}
            commonSpells={commonSpells}
            onSpellSelect={handleSpellSelect}
        />
    </div>
  );
};

export default Spells;

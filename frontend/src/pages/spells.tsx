import React, { useEffect, useState } from "react";
import Deck from "../components/Deck";
import SpellsClasses from "../components/SpellsClasses";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  setSelectedClass,
  addActiveSpell,
  removeActiveSpell,
  addPassiveSpell,
  removePassiveSpell,
  loadSpellsFromStorage,
} from "../features/components/spellsSlice.ts";

interface Spell {
  src: string;
  alt: string;
}

interface Spells {
  [key: string]: { [key: string]: Spell };
}

const Spells: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedClass = useSelector((state: RootState) => state.spells.selectedClass);
  const activeSpells = useSelector((state: RootState) => state.spells.activeSpells);
  const passiveSpells = useSelector((state: RootState) => state.spells.passiveSpells);
  const selectedImage = useSelector(
    (state: RootState) => state.image.selectedImage
  );
  const [spells, setSpells] = useState<Spells>({});
  const [commonSpells, setCommonSpells] = useState<Spells>({});


  useEffect(() => {
    const savedActiveSpells = localStorage.getItem("activeSpells");
    const savedPassiveSpells = localStorage.getItem("passiveSpells");

    if (savedActiveSpells && savedPassiveSpells) {
      dispatch(
        loadSpellsFromStorage({
          selectedClass,
          activeSpells: JSON.parse(savedActiveSpells),
          passiveSpells: JSON.parse(savedPassiveSpells),
        })
      );
    }
  }, [dispatch, selectedClass]);

  useEffect(() => {
    localStorage.setItem("activeSpells", JSON.stringify(activeSpells));
    localStorage.setItem("passiveSpells", JSON.stringify(passiveSpells));
  }, [activeSpells, passiveSpells]);

  useEffect(() => {
    if (selectedImage) {
      const className = selectedImage.split("/").pop()?.split(".")[0] || "";
      dispatch(setSelectedClass(className.charAt(0).toUpperCase() + className.slice(1)));
    }
  }, [dispatch, selectedImage]);

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
        dispatch(removeActiveSpell(spell));
      } else {
        dispatch(removePassiveSpell(spell));
      }
      
    } else {
        if(
            type === 'active' && 
            activeSpells.length < 12 && 
            (selectedElementCount + selectedActiveCount) < 12){
            imageElement.classList.add('selected');
            dispatch(addActiveSpell(spell));       
        } else if(
            type === 'passive' && 
            passiveSpells.length < 6 && 
            selectedPassiveCount < 6){
            imageElement.classList.add('selected');
            dispatch(addPassiveSpell(spell));
        }
    }
  };

  return (
    <div>
        <Deck />
        <SpellsClasses
            spells={spells}
            commonSpells={commonSpells}
            onSpellSelect={handleSpellSelect}
        />
    </div>
  );
};

export default Spells;

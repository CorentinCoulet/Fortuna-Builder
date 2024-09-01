import React, { useCallback, useEffect, useState } from "react";
import Deck from "../components/Spells/Deck";
import SpellsClasses from "../components/Spells/SpellsClasses";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  setSelectedClass,
  addActiveSpell,
  removeActiveSpell,
  addPassiveSpell,
  removePassiveSpell,
  loadSpellsFromStorage,
  setSelectedSpell,
  spellDrag,
} from "../features/components/spellsSlice.ts";

interface Spell {
  src: string;
  alt: string;
  name?: string;
  effects?: string;
  details?: string;
}

interface Spells {
  [key: string]: { [key: string]: Spell };
}

const Spells: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedClass = useSelector((state: RootState) => state.spells.selectedClass);
  const activeSpells = useSelector((state: RootState) => state.spells.activeSpells);
  const passiveSpells = useSelector((state: RootState) => state.spells.passiveSpells);
  const usedSpells = useSelector((state: RootState) => state.spells.usedSpells);
  const selectedImage = useSelector((state: RootState) => state.image.selectedImage);
  const [spells, setSpells] = useState<Spells>({});
  const [commonSpells, setCommonSpells] = useState<Spells>({});

  useEffect(() => {
    const savedActiveSpells = localStorage.getItem("activeSpells");
    const savedPassiveSpells = localStorage.getItem("passiveSpells");

    if (savedActiveSpells && savedPassiveSpells) {
      const parsedActiveSpells = JSON.parse(savedActiveSpells);
      const parsedPassiveSpells = JSON.parse(savedPassiveSpells);

      const newUsedSpells = [
        ...parsedActiveSpells.filter((spell: Spell | null) => spell !== null).map((spell: Spell) => spell.src),
        ...parsedPassiveSpells.filter((spell: Spell | null) => spell !== null).map((spell: Spell) => spell.src),
      ];

      dispatch(
        loadSpellsFromStorage({
          selectedClass,
          activeSpells: parsedActiveSpells,
          passiveSpells: parsedPassiveSpells,
          selectedSpell: null,
          draggedSpell: null,
          usedSpells: newUsedSpells,
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

  const handleSpellSelect = useCallback(
    (spell: Spell, type: "active" | "passive", index: number) => {
      const isSpellActiveSelected = activeSpells.some(s => s?.src === spell.src);
      const isSpellPassiveSelected = passiveSpells.some(s => s?.src === spell.src);

      if (type === "active") {
        if (isSpellActiveSelected) {
          dispatch(removeActiveSpell(spell));
        } else {
          dispatch(addActiveSpell({ spell, index }));
        }
      } else if (type === "passive") {
        if (isSpellPassiveSelected) {
          dispatch(removePassiveSpell(spell));
        } else {
          dispatch(addPassiveSpell({ spell, index }));
        }
      }
    },
    [dispatch, activeSpells, passiveSpells]
  );

  const handleSpellClick = useCallback(
    (spell: Spell) => {
      if (!usedSpells.includes(spell.src)) {
        dispatch(setSelectedSpell(spell));
      }
    },
    [dispatch, usedSpells]
  );

  const handleSpellDrag = useCallback(
    (spell: Spell) => {
      if (!usedSpells.includes(spell.src)) {
        dispatch(spellDrag(spell));
      }
    },
    [dispatch, usedSpells]
  );

  return (
    <div>
        <Deck />
        <SpellsClasses
            spells={spells}
            commonSpells={commonSpells}
            onSpellSelect={handleSpellSelect}
            onSpellClick={handleSpellClick}
            onSpellDrag={handleSpellDrag}
        />
    </div>
  );
};

export default Spells;

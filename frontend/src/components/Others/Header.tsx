import React, { useEffect, useState } from "react";
import "../../styles/components/Others/Header.scss";
import Logo from "../../assets/logo-fortuna-V2.webp";
import Login from "../../assets/login.webp";
import Logout from "../../assets/logout.webp";
import Parameters from "../../assets/params.webp";
import Reset from "../../assets/resetIcon.webp";

import { clearAllSpells } from "../../features/components/Spells/spellsSlice";
import { resetAllPoints as resetPointIntel } from "../../features/components/Aptitudes/aptitudeIntelSlice";
import { resetAllPoints as resetPointStrength } from "../../features/components/Aptitudes/aptitudeStrengthSlice";
import { resetAllPoints as resetPointAgility } from "../../features/components/Aptitudes/aptitudeAgilitySlice";
import { resetAllPoints as resetPointChance } from "../../features/components/Aptitudes/aptitudeChanceSlice";
import { resetAllPoints as resetPointMajor } from "../../features/components/Aptitudes/aptitudeMajorSlice";
import { resetAllValues } from "../../features/components/Builder/editableValuesSlice";
import {  } from "../../features/components/Sublimations/sublimationsSlice";
import { useDispatch } from "react-redux";

import { setEquippedEpicSublimation, setEquippedRelicSublimation, setEquippedNormalSublimation } from "../../features/components/Sublimations/sublimationsSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsMenuOpen(false);
  };

  const handleResetClick = () => {
    dispatch(setEquippedEpicSublimation(null));
    dispatch(setEquippedRelicSublimation(null));
    dispatch(setEquippedNormalSublimation(null));

    dispatch(clearAllSpells());
    dispatch(resetPointIntel());
    dispatch(resetPointStrength());
    dispatch(resetPointAgility());
    dispatch(resetPointChance());
    dispatch(resetPointMajor());
    dispatch(resetAllValues());

    setIsMenuOpen(false); 
  };

  const handleSettingsClick = () => {
    console.log("Paramètres ouverts");
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-side">
        <img src={Logo} alt="Fortuna Logo" className="logo" />
        <p>Fortuna Builder</p>
      </div>

      <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="burger-icon" onClick={toggleMenu}>
          ☰ 
        </button>
        {isMenuOpen && (
          <div className="menu-content">
            <button className="menu-button" onClick={handleResetClick}>
              Reset
            </button>

            <button className="menu-button" onClick={handleSettingsClick}>
              Paramètres
            </button>

            <button className="menu-button" onClick={handleLoginClick}>
              {isLoggedIn ? "Mon Compte" : "Se Connecter"}
            </button>
          </div>
        )}
      </div>

      <div className="button-group">
        <button className="reset-button" onClick={handleResetClick}>
          <img src={Reset} alt="Reset" className="icon reset" />
        </button>

        <button className="settings-button" onClick={handleSettingsClick}>
          <img src={Parameters} alt="Paramètres" className="icon parameters" />
        </button>

        <button className="login-button" onClick={handleLoginClick}>
          <img
            src={isLoggedIn ? Logout : Login}
            alt={isLoggedIn ? "Mon Compte" : "Se Connecter"}
            className="icon logIcon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

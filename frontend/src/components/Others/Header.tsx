import React, { useState } from "react";
import "../../styles/components/Others/Header.scss";
import Logo from "../../assets/logo-fortuna-V2.webp";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleResetClick = () => {
    console.log("Reset action triggered");
  };

  const handleSettingsClick = () => {
    console.log("Paramètres ouverts");
  };

  return (
    <div className="header">
      <img src={Logo} alt="Fortuna Logo" className="logo" />

      <div>
        <button className="reset-button" onClick={handleResetClick}>
          Reset
        </button>

        <button className="settings-button" onClick={handleSettingsClick}>
          Paramètres
        </button>

        <button className="login-button" onClick={handleLoginClick}>
          {isLoggedIn ? "Mon Compte" : "Se Connecter"}
        </button>
      </div>

      {/*
      <button className="language-button">
        Langue
      </button>
      */}
    </div>
  );
};

export default Header;

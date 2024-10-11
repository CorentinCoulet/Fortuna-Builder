import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import ClearNotification from "./ClearNotification";

import {
  setEquippedEpicSublimation,
  setEquippedRelicSublimation,
  setEquippedNormalSublimation,
} from "../../features/components/Sublimations/sublimationsSlice";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isBurgerModalOpen, setIsBurgerModalOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  const handleLoginClick = () => {
    setIsBurgerModalOpen(false);
    setAuthMode(0);
    setAuthModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
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

    setIsBurgerModalOpen(false);

    setNotification("Le builder a été vidé avec succès !");
  };

  const handleSettingsClick = () => {
    setIsBurgerModalOpen(false);
  };

  const toggleBurgerModal = () => {
    setIsBurgerModalOpen(!isBurgerModalOpen);
  };

  return (
    <>
      <header className="header">
        <div className="left-side">
          <img src={Logo} alt="Fortuna Logo" className="logo" />
          <span className="site-name">Fortuna Builder</span>
        </div>

        <div className="burger-menu">
          <button className="burger-icon" onClick={toggleBurgerModal}>
            ☰
          </button>
        </div>

        <div className="button-group">
          <button className="reset-button" onClick={handleResetClick}>
            <img loading="lazy" src={Reset} alt="Reset" className="icon reset" />
          </button>

          {isLoggedIn && (
            <button className="settings-button" onClick={handleSettingsClick}>
              <img
                loading="lazy"
                src={Parameters}
                alt="Paramètres"
                className="icon parameters"
              />
            </button>
          )}

          {!isLoggedIn ? (
            <button className="login-button" onClick={handleLoginClick}>
              <img loading="lazy" src={Login} alt="Se Connecter" className="icon logIcon" />
            </button>
          ) : (
            <button className="logout-button" onClick={handleLogoutClick}>
              <img loading="lazy" src={Logout} alt="Mon Compte" className="icon logIcon" />
            </button>
          )}
        </div>
      </header>

      <Modal
        isOpen={isBurgerModalOpen}
        onRequestClose={toggleBurgerModal}
        overlayClassName="modal-overlay"
        className="burger-modal"
      >
        <div className="menu-content">
          <button className="menu-button" onClick={handleResetClick}>
            Reset
          </button>

          {isLoggedIn && (
            <button className="menu-button" onClick={handleSettingsClick}>
              Paramètres
            </button>
          )}

          {!isLoggedIn ? (
            <button className="login-button" onClick={handleLoginClick}>
              <img
                loading="lazy"
                src={Login}
                alt="Se Connecter"
                className="icon logIcon"
              />
            </button>
          ) : (
            <button className="logout-button" onClick={handleLogoutClick}>
              <img
                loading="lazy"
                src={Logout}
                alt="Mon Compte"
                className="icon logIcon"
              />
            </button>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={authModalOpen}
        onRequestClose={() => setAuthModalOpen(false)}
        overlayClassName="modal-overlay"
        className="authentification-modal"
      >
        <div className="authentification-banner">
          <h3>{authMode === 0 ? "Connexion" : "Inscription"}</h3>
        </div>
        <div className="authentification-content">
          {authMode === 0 ? <LoginForm /> : <SignInForm />}
          <p className="redirection-message">
            {authMode === 0 ? (
              <>
                Vous n'avez pas de compte ?{" "}
                <span onClick={() => setAuthMode(1)}>
                  Inscrivez-vous
                </span>
              </>
            ) : (
              <>
                Vous êtes déjà inscrit ?{" "}
                <span onClick={() => setAuthMode(0)}>
                  Connectez-vous
                </span>
              </>
            )}
          </p>
        </div>
      </Modal>

      {notification && (
        <ClearNotification
          message={notification}
          onClose={() => setNotification(null)}
          className="clear-notification"
        />
      )}
    </>
  );
};

export default Header;
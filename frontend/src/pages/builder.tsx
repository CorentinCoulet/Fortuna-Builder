import React, { useState } from "react";
import ClassInformations from "../components/Builder/ClassInformations";
import Items from "../components/Searching/Items";
import Recherche from "../pages/search";
import Aptitudes from "../pages/aptitudes";
import Sorts from "../pages/spells";
import Enchantement from "../pages/enchantment";
import Recap from "../pages/recap";
import InternalNavbar from "../components/Others/InternalNavbar";
import Header from "../components/Others/Header";
import Footer from "../components/Others/Footer";
import "../styles/pages/Builder.scss";

const Builder: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("recherche");

  const renderSection = () => {
    switch (activeSection) {
      case "recherche":
        return <Recherche />;
      case "aptitudes":
        return <Aptitudes />;
      case "sorts":
        return <Sorts />;
      case "enchantement":
        return <Enchantement />;
      case "recap":
        return <Recap />;
      default:
        return <Recherche />;
    }
  };

  return (
    <div className="builder-page">
      <Header />
      <div>
        <ClassInformations />
        <Items />
        <div>
          <InternalNavbar setActiveSection={setActiveSection} />
          <div className="section-content">{renderSection()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Builder;

// Accueil.js
import React from "react";
import { useTheme } from "./ThemeContext";
import lamp from "./lamp.jfif";
import franceFlag from "./fr.jfif";
import englishFlag from "./en.jfif";
import arabicFlag from "./ar.jfif";
import koreanFlag from "./cr.jfif";
import "./modedarklight.css";
import "./Acuiel.css";
import "./language.css";
import { useLanguage } from "./LanguageContexte";
import data from "./data";

export const Accueil = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    // Add logic for changing language
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>{data[language].Title}</h1>
      <p>{data[language].Txt}</p>
      <div className="button-container">
        <button className="flag-button" onClick={() => handleLanguageChange("FR")}>
          <img src={franceFlag} alt="French Flag" />
        </button>
        <button className="flag-button" onClick={() => handleLanguageChange("EN")}>
          <img src={englishFlag} alt="English Flag" />
        </button>
        <button className="flag-button" onClick={() => handleLanguageChange("AR")}>
          <img src={arabicFlag} alt="Arabic Flag" />
        </button>
        <button className="flag-button" onClick={() => handleLanguageChange("CR")}>
          <img src={koreanFlag} alt="Korean Flag" />
        </button>
        <button className="sun-button" onClick={toggleTheme}>
          <img src={lamp} alt="Sun" />
        </button>

      </div>
    </div>
  );
};

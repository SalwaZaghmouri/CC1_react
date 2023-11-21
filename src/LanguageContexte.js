// LanguageContext.js
import React, { createContext, useContext, useState } from "react";

const LanguageContexte = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("FR"); // Default language is French

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContexte.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContexte.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContexte);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// app/contexts/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "he";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    aboutResearch: "About the Research",
    methodology: "Methodology",
    findings: "Findings",
    implications: "Implications",
    contact: "Contact",

    // Site title
    siteTitle: "Distracted Driving Research",
    siteSubtitle: "Risk Factors in Driver Distraction",

    // Page titles
    pageTitle: "Distracted Driving Research - Risk Factors Study",
    pageDescription:
      "Academic research on risk factors that increase the likelihood of distracted driving",
  },
  he: {
    // Navigation
    home: "בית",
    aboutResearch: "אודות המחקר",
    methodology: "מתודולוגיה",
    findings: "ממצאים",
    implications: "השלכות",
    contact: "צור קשר",

    // Site title
    siteTitle: "מחקר נהיגה מוסחת",
    siteSubtitle: "גורמי סיכון בהסחת דעת בנהיגה",

    // Page titles
    pageTitle: "מחקר נהיגה מוסחת - גורמי סיכון בנהיגה",
    pageDescription:
      "מחקר אקדמי על גורמי סיכון המגבירים את הסיכוי לנהיגה מוסחת",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "he" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

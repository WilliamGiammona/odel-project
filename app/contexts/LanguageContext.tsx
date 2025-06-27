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
    methodology: "Methodology",
    findings: "About",
    implications: "Implications",
    model: "Model",

    // Site title
    siteTitle: "Distracted Driving Research",
    siteSubtitle: "Risk Factors in Driver Distraction",

    // Page titles
    pageTitle: "Distracted Driving Research - Risk Factors Study",
    pageDescription:
      "Academic research on risk factors that increase the likelihood of distracted driving",

    // Hero Section
    heroTitle: "Understanding",
    heroTitleHighlight: "Distracted Driving",
    heroSubtitle:
      "Groundbreaking research identifying key risk factors that contribute to driver distraction and road safety",
    heroCrashStat: "of crashes involve distracted driving",
    heroLivesStat: "lives lost in 2021 due to distraction",
    heroTimeStat: "average time eyes off road when texting",
    heroStatSec: "sec",
    heroModelBtn: "Explore the Model",
    heroMethodologyBtn: "View Methodology",
    heroContext:
      "A comprehensive study conducted with Israeli drivers to understand behavioral patterns and risk factors",
  },
  he: {
    // Navigation
    home: "בית",
    aboutResearch: "מחקר",
    methodology: "מתודולוגיה",
    findings: "אודות",
    implications: "השלכות",
    model: "מודל",

    // Site title
    siteTitle: "מחקר נהיגה מוסחת",
    siteSubtitle: "גורמי סיכון בהסחת דעת בנהיגה",

    // Page titles
    pageTitle: "מחקר נהיגה מוסחת - גורמי סיכון בנהיגה",
    pageDescription:
      "מחקר אקדמי על גורמי סיכון המגבירים את הסיכוי לנהיגה מוסחת",

    // Hero Section
    heroTitle: "הבנת",
    heroTitleHighlight: "נהיגה מוסחת",
    heroSubtitle:
      "מחקר פורץ דרך המזהה גורמי סיכון מרכזיים התורמים להסחת דעת בנהיגה ולבטיחות בדרכים",
    heroCrashStat: "מהתאונות כוללות נהיגה מוסחת",
    heroLivesStat: "חיים אבדו ב-2021 עקב הסחת דעת",
    heroTimeStat: "זמן ממוצע שהעיניים לא על הכביש בעת הודעה",
    heroStatSec: "שניות",
    heroModelBtn: "חקור את המודל",
    heroMethodologyBtn: "צפה במתודולוגיה",
    heroContext:
      "מחקר מקיף שנערך עם נהגים ישראלים להבנת דפוסי התנהגות וגורמי סיכון",
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

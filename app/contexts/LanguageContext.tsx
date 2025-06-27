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
    aboutResearch: "Research",
    methodology: "Methodology",
    findings: "About",
    implications: "Implications",
    contact: "Contact",

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
    heroExploreBtn: "Explore the Research",
    heroMethodologyBtn: "View Methodology",
    heroContext:
      "A comprehensive study conducted with Israeli drivers to understand behavioral patterns and risk factors",

    // Footer
    footerAboutTitle: "About This Research",
    footerAboutText:
      "This study examines the behavioral and environmental factors that contribute to distracted driving among Israeli drivers.",
    footerQuickLinks: "Quick Links",
    footerContactTitle: "Contact",
    footerContactEmail: "Email",
    footerContactPhone: "Phone",
    footerRights: "All rights reserved",
    footerDeveloped: "Research conducted at",
    footerUniversity: "Ruppin Academic Center",
    footerDepartment: "Department of Psychology",
  },
  he: {
    // Navigation
    home: "בית",
    aboutResearch: "מחקר",
    methodology: "מתודולוגיה",
    findings: "אודות",
    implications: "השלכות",
    contact: "צור קשר",

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
    heroExploreBtn: "חקור את המחקר",
    heroMethodologyBtn: "צפה במתודולוגיה",
    heroContext:
      "מחקר מקיף שנערך עם נהגים ישראלים להבנת דפוסי התנהגות וגורמי סיכון",

    // Footer
    footerAboutTitle: "אודות המחקר",
    footerAboutText:
      "מחקר זה בוחן את הגורמים ההתנהגותיים והסביבתיים התורמים לנהיגה מוסחת בקרב נהגים ישראלים.",
    footerQuickLinks: "קישורים מהירים",
    footerContactTitle: "יצירת קשר",
    footerContactEmail: "דוא״ל",
    footerContactPhone: "טלפון",
    footerRights: "כל הזכויות שמורות",
    footerDeveloped: "המחקר נערך ב",
    footerUniversity: "המרכז האקדמי רופין",
    footerDepartment: "החוג לפסיכולוגיה",
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

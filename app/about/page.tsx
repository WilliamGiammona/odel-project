// app/about/page.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 flex-grow flex flex-col">
      <div className="max-w-4xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {language === "en" ? "About the Researchers" : "אודות החוקרים"}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            {language === "en"
              ? "Our research team brings together concepts from the fields of psychology, statistics, and machine learning to investigate the complex factors that contribute to distracted driving."
              : "צוות המחקר שלנו מאגד מושגים מתחומי הפסיכולוגיה, הסטטיסטיקה ולמידת מכונה כדי לחקור את הגורמים המורכבים התורמים לנהיגה מוסחת."}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Odel Lipschitz */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2">
              {language === "en" ? "Odel Lipschitz" : "אודל ליפשיץ"}
            </h3>
            <p className="text-blue-600 mb-3">
              {language === "en"
                ? "Undergraduate Student Researcher"
                : "חוקרת - סטודנטית לתואר ראשון"}
            </p>
            <p className="text-gray-700">
              {language === "en"
                ? "Odel Lipschitz is an undergraduate student in psychology at Ruppin Academic Center."
                : "אודל ליפשיץ היא סטודנטית לתואר ראשון בפסיכולוגיה במרכז האקדמי רופין."}
            </p>
          </div>

          {/* Noga Albert */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2">
              {language === "en" ? "Noga Albert" : "נוגה אלברט"}
            </h3>
            <p className="text-blue-600 mb-3">
              {language === "en"
                ? "Undergraduate Student Researcher"
                : "חוקרת - סטודנטית לתואר ראשון"}
            </p>
            <p className="text-gray-700">
              {language === "en"
                ? "Noga Albert is an undergraduate student in psychology at Ruppin Academic Center."
                : "נוגה אלברט היא סטודנטית לתואר ראשון בפסיכולוגיה במרכז האקדמי רופין."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

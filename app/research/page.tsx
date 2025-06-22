// app/research/page.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function ResearchPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "Research Overview" : "סקירת המחקר"}
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Background" : "רקע"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "Distracted driving has become one of the leading causes of road accidents worldwide. With the proliferation of smartphones and in-vehicle technologies, understanding the factors that contribute to driver distraction is more critical than ever."
              : "נהיגה מוסחת הפכה לאחד הגורמים המובילים לתאונות דרכים ברחבי העולם. עם התפשטות הסמארטפונים והטכנולוגיות ברכב, הבנת הגורמים התורמים להסחת דעת של הנהג קריטית מאי פעם."}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Research Objectives" : "מטרות המחקר"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              {language === "en"
                ? "Identify key risk factors for distracted driving among Israeli drivers"
                : "זיהוי גורמי סיכון מרכזיים לנהיגה מוסחת בקרב נהגים ישראלים"}
            </li>
            <li>
              {language === "en"
                ? "Analyze behavioral patterns associated with driver distraction"
                : "ניתוח דפוסי התנהגות הקשורים להסחת דעת בנהיגה"}
            </li>
            <li>
              {language === "en"
                ? "Develop evidence-based recommendations for road safety policies"
                : "פיתוח המלצות מבוססות ראיות למדיניות בטיחות בדרכים"}
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Research Questions" : "שאלות המחקר"}
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                {language === "en"
                  ? "What are the primary factors that lead to distracted driving behaviors?"
                  : "מהם הגורמים העיקריים המובילים להתנהגויות נהיגה מוסחת?"}
              </li>
              <li>
                {language === "en"
                  ? "How do demographic variables influence susceptibility to driving distractions?"
                  : "כיצד משתנים דמוגרפיים משפיעים על הרגישות להסחות דעת בנהיגה?"}
              </li>
              <li>
                {language === "en"
                  ? "What role does technology play in modern driving distraction patterns?"
                  : "מה תפקידה של הטכנולוגיה בדפוסי הסחת דעת מודרניים בנהיגה?"}
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

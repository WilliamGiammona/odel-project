"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function MethodologyPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "Research Methodology" : "מתודולוגיית המחקר"}
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Study Design" : "תכנון המחקר"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {language === "en"
              ? "This research employs a mixed-methods approach, combining quantitative surveys with qualitative interviews to gain comprehensive insights into distracted driving behaviors."
              : "מחקר זה משתמש בגישת שיטות מעורבות, המשלבת סקרים כמותיים עם ראיונות איכותניים כדי להשיג תובנות מקיפות על התנהגויות נהיגה מוסחת."}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Participants" : "משתתפים"}
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>
                  {language === "en" ? "Sample Size:" : "גודל מדגם:"}
                </strong>{" "}
                {language === "en"
                  ? "500 Israeli drivers"
                  : "500 נהגים ישראלים"}
              </li>
              <li>
                <strong>
                  {language === "en" ? "Age Range:" : "טווח גילאים:"}
                </strong>{" "}
                18-65
              </li>
              <li>
                <strong>
                  {language === "en"
                    ? "Gender Distribution:"
                    : "התפלגות מגדרית:"}
                </strong>{" "}
                {language === "en" ? "Balanced representation" : "ייצוג מאוזן"}
              </li>
              <li>
                <strong>{language === "en" ? "Experience:" : "ניסיון:"}</strong>{" "}
                {language === "en"
                  ? "Minimum 2 years driving experience"
                  : "מינימום שנתיים ניסיון נהיגה"}
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? "Data Collection Methods"
              : "שיטות איסוף נתונים"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en" ? "Quantitative Phase" : "שלב כמותי"}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {language === "en" ? "Online surveys" : "סקרים מקוונים"}
                </li>
                <li>
                  {language === "en"
                    ? "Driving behavior questionnaires"
                    : "שאלוני התנהגות נהיגה"}
                </li>
                <li>
                  {language === "en"
                    ? "Risk assessment scales"
                    : "סולמות הערכת סיכון"}
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en" ? "Qualitative Phase" : "שלב איכותני"}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  {language === "en" ? "In-depth interviews" : "ראיונות עומק"}
                </li>
                <li>{language === "en" ? "Focus groups" : "קבוצות מיקוד"}</li>
                <li>
                  {language === "en" ? "Observational studies" : "מחקרי תצפית"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Data Analysis" : "ניתוח נתונים"}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {language === "en"
              ? "Statistical analysis will be conducted using SPSS and R, including descriptive statistics, regression analysis, and factor analysis. Qualitative data will be analyzed using thematic analysis techniques."
              : "ניתוח סטטיסטי יבוצע באמצעות SPSS ו-R, כולל סטטיסטיקה תיאורית, ניתוח רגרסיה וניתוח גורמים. נתונים איכותניים ינותחו באמצעות טכניקות ניתוח תמטי."}
          </p>
        </section>
      </div>
    </div>
  );
}

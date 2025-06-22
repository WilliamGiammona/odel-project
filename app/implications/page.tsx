"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function ImplicationsPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "Research Implications" : "השלכות המחקר"}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            {language === "en"
              ? "The findings from this research have significant implications for road safety policy, driver education, and the development of technological interventions to reduce distracted driving."
              : "הממצאים ממחקר זה בעלי השלכות משמעותיות למדיניות בטיחות בדרכים, חינוך נהגים ופיתוח התערבויות טכנולוגיות להפחתת נהיגה מוסחת."}
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {language === "en" ? "Policy Recommendations" : "המלצות מדיניות"}
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "1. Enhanced Enforcement"
                  : "1. אכיפה משופרת"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Implement stricter enforcement of laws against mobile phone use while driving, including the use of advanced detection technologies."
                  : "יישום אכיפה מחמירה יותר של חוקים נגד שימוש בטלפון נייד בזמן נהיגה, כולל שימוש בטכנולוגיות זיהוי מתקדמות."}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "2. Educational Programs"
                  : "2. תוכניות חינוכיות"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Develop comprehensive educational programs for new and experienced drivers focusing on the risks of distracted driving."
                  : "פיתוח תוכניות חינוכיות מקיפות לנהגים חדשים ומנוסים המתמקדות בסיכונים של נהיגה מוסחת."}
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "3. Technology Solutions"
                  : "3. פתרונות טכנולוגיים"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Promote the development and adoption of driver assistance systems that can detect and prevent distracted driving behaviors."
                  : "קידום פיתוח ואימוץ מערכות סיוע לנהג שיכולות לזהות ולמנוע התנהגויות נהיגה מוסחת."}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {language === "en" ? "Practical Applications" : "יישומים מעשיים"}
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              {language === "en"
                ? "Integration of findings into driver licensing curricula and testing procedures"
                : "שילוב הממצאים בתוכניות הלימוד ובהליכי הבחינה לרישיון נהיגה"}
            </li>
            <li>
              {language === "en"
                ? "Development of mobile applications that promote safe driving habits"
                : "פיתוח אפליקציות ניידות המקדמות הרגלי נהיגה בטוחים"}
            </li>
            <li>
              {language === "en"
                ? "Corporate fleet management programs incorporating distraction prevention strategies"
                : "תוכניות ניהול צי רכב ארגוני המשלבות אסטרטגיות למניעת הסחת דעת"}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {language === "en"
              ? "Future Research Directions"
              : "כיווני מחקר עתידיים"}
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              {language === "en"
                ? "This research opens several avenues for future investigation:"
                : "מחקר זה פותח מספר אפיקים לחקירה עתידית:"}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                {language === "en"
                  ? "Long-term effectiveness of intervention strategies"
                  : "יעילות ארוכת טווח של אסטרטגיות התערבות"}
              </li>
              <li>
                {language === "en"
                  ? "Cross-cultural comparisons of distracted driving behaviors"
                  : "השוואות בין-תרבותיות של התנהגויות נהיגה מוסחת"}
              </li>
              <li>
                {language === "en"
                  ? "Impact of autonomous vehicle technology on driver attention"
                  : "השפעת טכנולוגיית רכב אוטונומי על קשב הנהג"}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

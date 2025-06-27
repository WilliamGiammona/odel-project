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
              ? "Distracted driving is a significant contributor to traffic accidents, especially in environments with widespread access to digital technology. In Israel, drivers face a range of potential distractions, from smartphone use to cognitive overload. Identifying the most predictive factors of distraction can support more targeted interventions and policies."
              : "נהיגה מוסחת היא גורם משמעותי לתאונות דרכים, במיוחד בסביבות עם גישה נרחבת לטכנולוגיה דיגיטלית. בישראל, נהגים מתמודדים עם מגוון הסחות דעת פוטנציאליות, משימוש בסמארטפון ועד עומס קוגניטיבי. זיהוי הגורמים המנבאים ביותר של הסחת דעת יכול לתמוך בהתערבויות וממדיניות ממוקדות יותר."}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Research Objectives" : "מטרות המחקר"}
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              {language === "en"
                ? "Identify and evaluate the most influential independent variables contributing to distracted driving using machine learning."
                : "זיהוי והערכת המשתנים הבלתי תלויים המשפיעים ביותר התורמים לנהיגה מוסחת באמצעות למידת מכונה."}
            </li>
            <li>
              {language === "en"
                ? "Apply a Random Forest classifier to model and rank variable importance based on predictive accuracy."
                : "יישום מסווג Random Forest למידול ודירוג חשיבות המשתנים על בסיס דיוק חיזוי."}
            </li>
            <li>
              {language === "en"
                ? "Generate insights that can support data-driven interventions for improving driver focus and road safety."
                : "יצירת תובנות שיכולות לתמוך בהתערבויות מבוססות נתונים לשיפור מיקוד הנהג ובטיחות בדרכים."}
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Research Questions" : "שאלות המחקר"}
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                {language === "en"
                  ? "Which behavioral and psychological variables—such as attention control, routine habits, or media consumption—most accurately predict distracted driving?"
                  : "אילו משתנים התנהגותיים ופסיכולוגיים - כגון שליטה בקשב, הרגלי שגרה או צריכת מדיה - מנבאים בצורה המדויקת ביותר נהיגה מוסחת?"}
              </li>
              <li>
                {language === "en"
                  ? "How do factors such as age, gender, mindfulness traits, and meditation practice correlate with self-reported or observed distraction?"
                  : "כיצד גורמים כגון גיל, מגדר, תכונות מיינדפולנס ותרגול מדיטציה מתואמים עם הסחת דעת מדווחת עצמית או נצפית?"}
              </li>
              <li>
                {language === "en"
                  ? "What are the most important predictors identified by the Random Forest model, and how can these findings inform road safety strategies?"
                  : "מהם המנבאים החשובים ביותר שזוהו על ידי מודל Random Forest, וכיצד ממצאים אלה יכולים להנחות אסטרטגיות בטיחות בדרכים?"}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

// app/implications/page.tsx
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
                  ? "1. Data-Driven Risk Profiling"
                  : "1. פרופיל סיכון מבוסס נתונים"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Use machine learning insights to inform targeted public awareness campaigns based on high-risk profiles (e.g., certain age groups, low mindfulness traits, or frequent multitaskers)."
                  : "שימוש בתובנות למידת מכונה ליידע קמפיינים ממוקדים למודעות ציבורית בהתבסס על פרופילי סיכון גבוה (למשל, קבוצות גיל מסוימות, תכונות מיינדפולנס נמוכות, או ריבוי משימות תכוף)."}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "2. Mindfulness-Based Training"
                  : "2. אימון מבוסס מיינדפולנס"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Incorporate mindfulness and attention-regulation techniques into driver education programs to strengthen cognitive resilience to distraction."
                  : "שילוב טכניקות מיינדפולנס וויסות קשב בתוכניות חינוך לנהגים לחיזוק החוסן הקוגניטיבי בפני הסחת דעת."}
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "3. Behavior-Aware Technology"
                  : "3. טכנולוגיה מודעת התנהגות"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Encourage the integration of in-vehicle systems that monitor driver attention and cognitive load, using behavioral indicators identified as high-risk by the model."
                  : "עידוד שילוב מערכות ברכב המנטרות את קשב הנהג ועומס קוגניטיבי, תוך שימוש במדדים התנהגותיים שזוהו כבעלי סיכון גבוה על ידי המודל."}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {language === "en"
              ? "Future Research Directions"
              : "כיווני מחקר עתידיים"}
          </h2>

          <div className="space-y-4">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "Predictive Validity Across Populations"
                  : "תוקף ניבוי על פני אוכלוסיות"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Replicate the Random Forest analysis across diverse populations (e.g., teens, professional drivers) to test generalizability."
                  : "שכפול ניתוח Random Forest על פני אוכלוסיות מגוונות (למשל, בני נוער, נהגים מקצועיים) לבחינת יכולת הכללה."}
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en" ? "Longitudinal Modeling" : "מידול אורכי"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Track changes in distraction predictors over time to assess the stability and adaptability of intervention strategies."
                  : "מעקב אחר שינויים במנבאי הסחת דעת לאורך זמן להערכת היציבות וההתאמה של אסטרטגיות התערבות."}
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "Mindfulness as a Moderator"
                  : "מיינדפולנס כמתווך"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Explore whether mindfulness moderates the effect of other predictors (e.g., tech usage or age) on distraction risk."
                  : "חקירה האם מיינדפולנס מתווכת את ההשפעה של מנבאים אחרים (למשל, שימוש בטכנולוגיה או גיל) על סיכון הסחת דעת."}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {language === "en"
                  ? "Human-AI Collaboration"
                  : "שיתוף פעולה אדם-AI"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Investigate the use of AI-driven feedback systems that adjust in real-time based on the driver's behavioral profile."
                  : "חקירת השימוש במערכות משוב מונעות AI המתאימות עצמן בזמן אמת בהתבסס על הפרופיל ההתנהגותי של הנהג."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

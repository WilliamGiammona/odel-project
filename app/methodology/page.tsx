// app/methodology/page.tsx
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
          <p className="text-gray-700 leading-relaxed mb-6">
            {language === "en"
              ? "This study employed a quantitative, predictive research design using data from a survey of 169 participants. The objective was to identify the most influential psychological, behavioral, and demographic predictors of distracted driving, using both Linear Regression and Random Forest classification models."
              : "מחקר זה השתמש בתכנון מחקר כמותי וניבויי תוך שימוש בנתונים מסקר של 169 משתתפים. המטרה הייתה לזהות את המנבאים הפסיכולוגיים, ההתנהגותיים והדמוגרפיים המשפיעים ביותר של נהיגה מוסחת, תוך שימוש במודלים של רגרסיה ליניארית וסיווג Random Forest."}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "Dependent Variable" : "משתנה תלוי"}
            </h3>
            <p className="text-gray-700 mb-3">
              {language === "en"
                ? "The outcome variable was binary:"
                : "משתנה התוצאה היה בינארי:"}
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
              <li className="font-semibold">
                {language === "en"
                  ? "Distracted (1) or Not Distracted (0)"
                  : "מוסח (1) או לא מוסח (0)"}
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              {language === "en"
                ? "This classification was derived from participant responses to 7 questions about behaviors in the past 30 days:"
                : "סיווג זה נגזר מתגובות המשתתפים ל-7 שאלות על התנהגויות ב-30 הימים האחרונים:"}
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li>
                {language === "en"
                  ? "Reading text/email while driving"
                  : "קריאת טקסט/אימייל בזמן נהיגה"}
              </li>
              <li>
                {language === "en"
                  ? "Reading text/email while stopped at a red light"
                  : "קריאת טקסט/אימייל בעצירה ברמזור אדום"}
              </li>
              <li>
                {language === "en"
                  ? "Looking at navigation apps while driving"
                  : "הסתכלות באפליקציות ניווט בזמן נהיגה"}
              </li>
              <li>
                {language === "en"
                  ? "Writing text/email while driving"
                  : "כתיבת טקסט/אימייל בזמן נהיגה"}
              </li>
              <li>
                {language === "en"
                  ? "Writing text/email while at a red light"
                  : "כתיבת טקסט/אימייל ברמזור אדום"}
              </li>
              <li>
                {language === "en"
                  ? "Looking at social media while driving"
                  : "הסתכלות ברשתות חברתיות בזמן נהיגה"}
              </li>
              <li>
                {language === "en"
                  ? "Looking at social media while at a red light"
                  : "הסתכלות ברשתות חברתיות ברמזור אדום"}
              </li>
            </ol>
            <p className="text-gray-700 mt-4">
              {language === "en"
                ? "Each question was rated from 1 (Never) to 5 (Always). A total score greater than 21 indicated a distracted driver."
                : "כל שאלה דורגה מ-1 (אף פעם) עד 5 (תמיד). ציון כולל גבוה מ-21 הצביע על נהג מוסח."}
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? "Independent Variables (33 total)"
              : "משתנים בלתי תלויים (33 סה״כ)"}
          </h2>
          <p className="text-gray-700 mb-6">
            {language === "en"
              ? "These included a mix of demographic, mindfulness, and attentional behavior features:"
              : "אלה כללו שילוב של מאפיינים דמוגרפיים, מיינדפולנס והתנהגות קשבית:"}
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">
                {language === "en" ? "Demographics:" : "דמוגרפיה:"}
              </h3>
              <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                <li>{language === "en" ? "Gender" : "מגדר"}</li>
                <li>{language === "en" ? "Age" : "גיל"}</li>
                <li>{language === "en" ? "Marriage Status" : "מצב משפחתי"}</li>
                <li>
                  {language === "en"
                    ? "Income Satisfaction"
                    : "שביעות רצון מהכנסה"}
                </li>
                <li>{language === "en" ? "Education" : "השכלה"}</li>
              </ol>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">
                {language === "en"
                  ? "Attention & Behavior Patterns:"
                  : "דפוסי קשב והתנהגות:"}
              </h3>
              <ol
                className="list-decimal list-inside ml-4 space-y-1 text-gray-700"
                start={6}
              >
                <li>
                  {language === "en"
                    ? "Delayed Emotion Recognition"
                    : "זיהוי רגשות מעוכב"}
                </li>
                <li>
                  {language === "en"
                    ? "Knock Things Over While Not Paying Attention"
                    : "הפלת דברים בזמן חוסר קשב"}
                </li>
                <li>
                  {language === "en"
                    ? "Not Focused on Present"
                    : "לא ממוקד בהווה"}
                </li>
                <li>
                  {language === "en"
                    ? "Walk Quickly Without Awareness"
                    : "הליכה מהירה ללא מודעות"}
                </li>
                <li>
                  {language === "en"
                    ? "Difficulty Feeling Emotional Discomfort"
                    : "קושי בתחושת אי נוחות רגשית"}
                </li>
                <li>
                  {language === "en"
                    ? "Forget Introduction Names"
                    : "שוכח שמות בהיכרות"}
                </li>
                <li>
                  {language === "en"
                    ? "Autopilot Mode While Doing Tasks"
                    : "מצב אוטומטי בביצוע משימות"}
                </li>
                <li>
                  {language === "en"
                    ? "Rushing Activities Without Attention"
                    : "ביצוע פעילויות בחיפזון ללא קשב"}
                </li>
                <li>
                  {language === "en"
                    ? "Focused on Goal, Not on Current Steps"
                    : "ממוקד במטרה, לא בצעדים הנוכחיים"}
                </li>
                <li>
                  {language === "en"
                    ? "Do Tasks Without Awareness"
                    : "ביצוע משימות ללא מודעות"}
                </li>
                <li>
                  {language === "en"
                    ? "Listen While Multitasking"
                    : "הקשבה תוך ביצוע ריבוי משימות"}
                </li>
                <li>
                  {language === "en"
                    ? "Drive on Autopilot to Wrong Destination"
                    : "נהיגה באוטומט ליעד שגוי"}
                </li>
                <li>
                  {language === "en"
                    ? "Focused on Future or Past"
                    : "ממוקד בעתיד או בעבר"}
                </li>
                <li>
                  {language === "en"
                    ? "Doing Tasks While Unfocused"
                    : "ביצוע משימות ללא מיקוד"}
                </li>
                <li>
                  {language === "en"
                    ? "Not Focused While Eating"
                    : "לא ממוקד בזמן אכילה"}
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">
                {language === "en"
                  ? "Mindfulness & Meditation:"
                  : "מיינדפולנס ומדיטציה:"}
              </h3>
              <ol
                className="list-decimal list-inside ml-4 space-y-1 text-gray-700"
                start={21}
              >
                <li>
                  {language === "en"
                    ? "Practice Mindfulness"
                    : "תרגול מיינדפולנס"}
                </li>
                <li>
                  {language === "en"
                    ? "Days Per Week Meditating"
                    : "ימים בשבוע של מדיטציה"}
                </li>
                <li>
                  {language === "en"
                    ? "Average Meditation Duration"
                    : "משך מדיטציה ממוצע"}
                </li>
                <li>
                  {language === "en"
                    ? "How Focused Was Meditation"
                    : "עד כמה הייתה המדיטציה ממוקדת"}
                </li>
                <li>
                  {language === "en"
                    ? "Mind Wandering During Meditation"
                    : "נדודי מחשבות במהלך מדיטציה"}
                </li>
                <li>
                  {language === "en"
                    ? "Receptive Attitude During Meditation"
                    : "גישה קבלנית במהלך מדיטציה"}
                </li>
                <li>
                  {language === "en"
                    ? "Self-Compassion During Meditation"
                    : "חמלה עצמית במהלך מדיטציה"}
                </li>
                <li>
                  {language === "en"
                    ? "Pay Attention During Chores"
                    : "תשומת לב במהלך מטלות"}
                </li>
                <li>
                  {language === "en"
                    ? "Attention While Working or Studying"
                    : "קשב בזמן עבודה או לימודים"}
                </li>
                <li>
                  {language === "en"
                    ? "Ability to Refocus Attention"
                    : "יכולת למקד מחדש קשב"}
                </li>
                <li>
                  {language === "en"
                    ? "Awareness of Thoughts and Feelings"
                    : "מודעות למחשבות ורגשות"}
                </li>
                <li>
                  {language === "en"
                    ? "Healthy Reception of Experience"
                    : "קבלה בריאה של חוויות"}
                </li>
                <li>
                  {language === "en"
                    ? "Compassion Toward Yourself"
                    : "חמלה כלפי עצמך"}
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en" ? "Modeling Approach" : "גישת המידול"}
          </h2>
          <p className="text-gray-700 mb-6">
            {language === "en"
              ? "While linear regression was initially applied to examine linear relationships, it assumes that the effect of each variable is additive and linear—an assumption unlikely to hold across complex cognitive and behavioral traits. Therefore, a Random Forest classifier was employed to:"
              : "בעוד שרגרסיה ליניארית יושמה בתחילה לבחינת קשרים ליניאריים, היא מניחה שההשפעה של כל משתנה היא תוספתית וליניארית - הנחה שלא סביר שתתקיים על פני תכונות קוגניטיביות והתנהגותיות מורכבות. לכן, נעשה שימוש במסווג Random Forest כדי:"}
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 mb-6">
            <li>
              {language === "en"
                ? "Capture non-linear interactions among variables"
                : "ללכוד אינטראקציות לא-ליניאריות בין משתנים"}
            </li>
            <li>
              {language === "en"
                ? "Handle high-dimensional data without overfitting"
                : "לטפל בנתונים רב-ממדיים ללא התאמת יתר"}
            </li>
            <li>
              {language === "en"
                ? "Provide feature importance rankings to identify which variables most strongly predict distracted driving"
                : "לספק דירוג חשיבות תכונות לזיהוי המשתנים המנבאים בחוזקה הרבה ביותר נהיגה מוסחת"}
            </li>
          </ul>
          <p className="text-gray-700">
            {language === "en"
              ? "This machine learning approach allowed for a deeper, more flexible analysis of how individual characteristics contribute to distracted driving behavior."
              : "גישת למידת מכונה זו אפשרה ניתוח עמוק וגמיש יותר של האופן שבו מאפיינים אישיים תורמים להתנהגות נהיגה מוסחת."}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {language === "en"
              ? "What is a Random Forest?"
              : "מהו Random Forest?"}
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            {language === "en"
              ? "It's an ensemble of decision trees, which are themselves ensembles of binary splits."
              : "זהו אנסמבל של עצי החלטה, שכל אחד מהם מורכב בעצמו מפיצולים בינאריים."}
          </p>

          {/* 1. Binary Splits */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "1. Binary Splits" : "1. פיצולים בינאריים"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "A binary split places data into one of two groups based on whether values fall above or below a certain threshold. For example, we could split by gender using a threshold of 1.5 (e.g., 1 for male, 2 for female). Binary splits are the building blocks of decision trees."
                : "פיצול בינארי מחלק את הנתונים לשתי קבוצות לפי אם הערך גבוה או נמוך מסף מסוים. לדוגמה, ניתן לפצל לפי מגדר בעזרת סף של 1.5 (למשל, 1 לגבר, 2 לאישה). פיצולים בינאריים הם אבני הבניין של עצי החלטה."}
            </p>
          </div>

          {/* 2. Decision Trees */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "2. Decision Trees" : "2. עצי החלטה"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "A decision tree is made up of many binary splits arranged in a tree structure. Each internal node splits the data further, and the final prediction is made at the leaf node. However, a single tree can overfit the data and may not generalize well."
                : "עץ החלטה מורכב ממספר פיצולים בינאריים המסודרים במבנה עץ. כל צומת פנימי מבצע פיצול נוסף, והתחזית מתקבלת בעלה. עם זאת, עץ יחיד עלול להיות מותאם יתר על המידה לנתונים ולא להכליל היטב."}
            </p>
          </div>

          {/* 3. Random Forests */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "3. Random Forests" : "3. יערות רנדומליים"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {language === "en"
                ? "A Random Forest is a collection of decision trees, each trained on different random subsets of the data and features. By averaging or voting on predictions from many trees, Random Forests improve accuracy and reduce overfitting compared to a single tree."
                : "Random Forest הוא אוסף של עצי החלטה, שכל אחד מהם מאומן על תת-קבוצה שונה של הנתונים והתכונות. על ידי ממוצע או הצבעה של התחזיות מעצים שונים, Random Forest משפר את הדיוק ומפחית התאמת יתר ביחס לעץ יחיד."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

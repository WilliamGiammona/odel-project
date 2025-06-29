// app/methodology/page.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

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
              ? "This study employed a quantitative, predictive research design using data from a survey of 169 participants, of which a percentage were entered into training data and a percentage into testing data. The objective was to identify the most influential psychological, behavioral, and demographic predictors of distracted driving, using both Linear Regression and Random Forest classification models."
              : "מחקר זה השתמש בתכנון מחקר כמותי וניבויי תוך שימוש בנתונים מסקר של 169 משתתפים, שחלקם הוקצו לנתוני אימון וחלקם לנתוני בדיקה. המטרה הייתה לזהות את המנבאים הפסיכולוגיים, ההתנהגותיים והדמוגרפיים המשפיעים ביותר על נהיגה מוסחת, תוך שימוש במודלים של רגרסיה ליניארית וסיווג Random Forest."}
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
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "A binary split places data into one of two groups based on whether values fall above or below a certain threshold. For example, we could split by gender using a threshold of 1.5 (e.g., 1 for male, 2 for female). Binary splits are the building blocks of decision trees."
                : "פיצול בינארי מחלק את הנתונים לשתי קבוצות לפי אם הערך גבוה או נמוך מסף מסוים. לדוגמה, ניתן לפצל לפי מגדר בעזרת סף של 1.5 (למשל, 1 לגבר, 2 לאישה). פיצולים בינאריים הם אבני הבניין של עצי החלטה."}
            </p>
            <Image
              src="/images/methodology/BinarySplit.png"
              alt={
                language === "en"
                  ? "Visual explanation of a binary split"
                  : "הסבר חזותי לפיצול בינארי"
              }
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* 2. Decision Trees */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "2. Decision Trees" : "2. עצי החלטה"}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "A decision tree is built by repeatedly applying binary splits on features that best separate the data. Each internal node makes a decision based on a feature and threshold, and the leaf nodes represent final classifications."
                : "עץ החלטה נבנה על ידי יישום חוזר של פיצולים בינאריים על תכונות שמפרידות בצורה הטובה ביותר בין הנתונים. כל צומת פנימי מקבל החלטה על סמך תכונה וסף, והעלים מייצגים את הסיווג הסופי."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "To evaluate how well a split separates the data, decision trees use a metric called Gini impurity. Gini measures how often a randomly chosen element would be incorrectly labeled if it were randomly labeled according to the distribution in a node. A Gini of 0 means perfect purity (all samples belong to one class), while 0.5 indicates a 50/50 mix."
                : "כדי להעריך עד כמה הפיצול מפריד היטב בין הקבוצות, עצי החלטה משתמשים במדד בשם Gini impurity. מדד זה מודד את ההסתברות לטעות סיווג אקראית בצומת. ערך Gini של 0 מעיד על טוהר מושלם (כל הדגימות שייכות למחלקה אחת), בעוד שערך של 0.5 מייצג ערבוב של 50/50."}
            </p>
            <div className="flex justify-center my-6">
              <Image
                src="/images/methodology/DecisionTree.png"
                alt={
                  language === "en"
                    ? "Decision tree structure with gini values"
                    : "מבנה עץ החלטה עם ערכי ג'יני"
                }
                width={700}
                height={450}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* 3. Random Forests */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {language === "en" ? "3. Random Forests" : "3. יערות רנדומליים"}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "A Random Forest is a machine learning model that learns patterns in the data by constructing multiple decision trees. Each tree attempts to predict an outcome (like whether a driver is distracted) based on a series of binary decisions using input variables."
                : "Random Forest הוא מודל של למידת מכונה שלומד דפוסים בנתונים על ידי בנייה של עצי החלטה מרובים. כל עץ מנסה לחזות תוצאה (למשל, האם נהג מוסח) על בסיס רצף של החלטות בינאריות לפי משתנים קלט."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "As a machine learning model, it 'learns' by identifying which variables and thresholds are most useful for making accurate predictions. The algorithm adjusts its structure during training to minimize prediction errors on known data."
                : "כמודל של למידת מכונה, הוא 'לומד' על ידי זיהוי אילו משתנים ואילו ערכי סף הכי שימושיים לחיזוי מדויק. האלגוריתם מתאים את המבנה שלו במהלך האימון כדי לצמצם שגיאות חיזוי על סמך נתונים מוכרים."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "During prediction, each tree in the forest produces a result, and the final outcome is determined by majority voting — the most common prediction wins. This ensemble method increases accuracy and reduces overfitting."
                : "בשלב החיזוי, כל עץ ביער מייצר תחזית, והתוצאה הסופית נקבעת על פי הצבעת רוב – התחזית השכיחה ביותר מנצחת. שיטת האנסמבל הזו משפרת את הדיוק ומפחיתה התאמת יתר."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === "en"
                ? "Random Forests are especially powerful when working with complex, high-dimensional data where relationships between variables may be non-linear or difficult to detect with simpler models."
                : "Random Forest נחשב חזק במיוחד כשעובדים עם נתונים מורכבים ורבי-ממדים, שבהם הקשרים בין המשתנים אינם ליניאריים או שקשה לזהותם באמצעות מודלים פשוטים יותר."}
            </p>
            <div className="flex justify-center my-6">
              <Image
                src="/images/methodology/RandomForest.png"
                alt={
                  language === "en"
                    ? "Illustration of Random Forest using multiple decision trees and majority voting"
                    : "תרשים של Random Forest עם עצי החלטה והצבעת רוב"
                }
                width={800}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              {language === "en"
                ? "Why Use Random Forest?"
                : "למה להשתמש ב-Random Forest?"}
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                {language === "en"
                  ? "Reduces overfitting compared to single decision trees"
                  : "מפחית התאמת יתר ביחס לעץ החלטה בודד"}
              </li>
              <li>
                {language === "en"
                  ? "Handles high-dimensional data with many input features"
                  : "מתמודד היטב עם נתונים בעלי ממדים גבוהים"}
              </li>
              <li>
                {language === "en"
                  ? "Works well even when relationships between variables are nonlinear"
                  : "מתאים גם כאשר הקשרים בין המשתנים אינם ליניאריים"}
              </li>
              <li>
                {language === "en"
                  ? "Provides feature importance scores for interpretability"
                  : "מספק דירוג חשיבות של משתנים לצורך הבנה טובה יותר"}
              </li>
            </ul>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">
            {language === "en"
              ? "Model Comparison & Summary"
              : "השוואת מודלים וסיכום"}
          </h2>
          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2 text-gray-700 font-semibold">
                    {language === "en" ? "Aspect" : "היבט"}
                  </th>
                  <th className="text-left px-4 py-2 text-blue-800 font-semibold">
                    {language === "en" ? "Random Forest" : "Random Forest"}
                  </th>
                  <th className="text-left px-4 py-2 text-green-800 font-semibold">
                    {language === "en"
                      ? "Linear Regression"
                      : "רגרסיה ליניארית"}
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 py-2">
                    {language === "en" ? "Model Type" : "סוג המודל"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Ensemble (many decision trees)"
                      : "אנסמבל (רבים עצי החלטה)"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Single linear model"
                      : "מודל ליניארי יחיד"}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Assumes Linearity?"
                      : "האם מניח ליניאריות?"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en" ? "No" : "לא"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en" ? "Yes" : "כן"}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Handles Feature Interactions"
                      : "מתמודד עם אינטראקציות בין משתנים"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en" ? "Yes, naturally" : "כן, באופן טבעי"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "No (needs feature engineering)"
                      : "לא (דורש יצירת משתנים חדשים)"}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Robust to Outliers?"
                      : "עמיד בפני ערכים קיצוניים?"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en" ? "Yes" : "כן"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en" ? "No" : "לא"}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    {language === "en" ? "Interpretability" : "יכולת פירוש"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Provides feature importance but is harder to interpret"
                      : "מספק חשיבות משתנים אך קשה יותר לפירוש"}
                  </td>
                  <td className="px-4 py-2">
                    {language === "en"
                      ? "Highly interpretable coefficients"
                      : "מקדם ליניארי שקל להבין"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

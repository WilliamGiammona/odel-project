"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

export default function ModelPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "Model Results" : "תוצאות המודל"}
        </h1>

        <section className="mb-12">
          <p className="text-gray-700 text-lg mb-6">
            {language === "en"
              ? "This page presents the results of the Random Forest classifier trained to predict distracted driving based on 33 behavioral, demographic, and mindfulness-related variables. Below, you’ll find a snapshot of the model’s performance, feature importance rankings, and interpretability outputs."
              : "עמוד זה מציג את תוצאות מודל ה-Random Forest שאומן לנבא נהיגה מוסחת על בסיס 33 משתנים הקשורים להתנהגות, דמוגרפיה ומיינדפולנס. בהמשך ניתן לראות את דיוק המודל, דירוג חשיבות המשתנים, ופלטים המסייעים לפרשנות."}
          </p>

          {/* Accuracy + Code */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? "1. Model Code & Accuracy"
              : "1. קוד המודל ודיוק"}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === "en"
              ? "The Random Forest classifier was trained using a 75/25 train-test split, where 75% of the dataset was used for training and the remaining 25% was reserved for validation. This split ensures that the model's performance is evaluated on unseen data, providing a realistic assessment of how well it generalizes to new cases. The model consists of 128 decision trees, each trained on a random subset of features and samples, which helps reduce overfitting and improves prediction stability. With a minimum of 5 samples required per leaf node, the model balances complexity with generalization ability. After training, the model achieved an accuracy of approximately 78.1% on the validation set, indicating that it correctly classifies whether a driver is likely to engage in distracted driving behaviors in nearly 4 out of 5 cases. This performance level suggests that the behavioral and mindfulness-related features captured in the survey data provide substantial predictive power for identifying at-risk drivers."
              : "מסווג ה-Random Forest אומן באמצעות חלוקה של 75/25, כאשר 75% מהנתונים שימשו לאימון ו-25% הנותרים נשמרו לוולידציה. חלוקה זו מבטיחה שביצועי המודל נבחנים על נתונים שלא נראו קודם, ומספקת הערכה ריאליסטית של יכולת ההכללה שלו למקרים חדשים. המודל מורכב מ-128 עצי החלטה, כאשר כל עץ מאומן על תת-קבוצה אקראית של משתנים ודגימות, מה שמסייע להפחית התאמת יתר ולשפר את יציבות הניבוי. עם דרישה מינימלית של 5 דגימות לכל צומת עלה, המודל מאזן בין מורכבות ליכולת הכללה. לאחר האימון, המודל השיג דיוק של כ-78.1% על מערך הוולידציה, מה שמצביע על כך שהוא מסווג נכונה האם נהג צפוי להיות מעורב בהתנהגויות נהיגה מוסחת בכמעט 4 מתוך 5 מקרים. רמת ביצועים זו מעידה שהמשתנים ההתנהגותיים והקשורים למיינדפולנס שנאספו בנתוני הסקר מספקים כוח ניבוי משמעותי לזיהוי נהגים בסיכון."}
          </p>
          <Image
            src="/images/model/accuracy.png"
            alt={
              language === "en" ? "Model code and accuracy" : "קוד המודל ודיוק"
            }
            width={900}
            height={500}
            className="rounded-lg shadow mb-10"
          />

          {/* Feature Importance */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? "2. Feature Importance Ranking"
              : "2. דירוג חשיבות משתנים"}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === "en"
              ? "The feature importance graph below reveals which variables the Random Forest model found most useful for predicting distracted driving. Feature importance values range from 0 to approximately 0.12, representing each variable's contribution to the model's decision-making process. The top predictors are dominated by mindfulness-related behaviors, with 'Rushing Activities Not Focused' showing the highest importance score (~0.12), followed by 'Age' (~0.10). This suggests that drivers who frequently rush through activities without paying attention are at significantly higher risk for distracted driving. The prominence of mindfulness variables like 'Doing Tasks While Not Focused,' 'Not Focused While Eating,' and operating on 'Autopilot' mode indicates that general attention patterns in daily life strongly correlate with driving behavior. Demographic factors like age and education also play important roles, while traditional factors like gender and marital status show minimal predictive power."
              : "גרף חשיבות המשתנים להלן חושף אילו משתנים מודל ה-Random Forest מצא כמועילים ביותר לניבוי נהיגה מוסחת. ערכי חשיבות המשתנים נעים בין 0 לכ-0.12, ומייצגים את תרומת כל משתנה לתהליך קבלת ההחלטות של המודל. המנבאים המובילים נשלטים על ידי התנהגויות הקשורות למיינדפולנס, כאשר 'ביצוע פעילויות בחיפזון ללא קשב' מציג את ציון החשיבות הגבוה ביותר (~0.12), ואחריו 'גיל' (~0.10). זה מצביע על כך שנהגים הממהרים לעתים קרובות בפעילויות מבלי לשים לב נמצאים בסיכון גבוה משמעותית לנהיגה מוסחת. הבולטות של משתני מיינדפולנס כמו 'ביצוע משימות ללא מיקוד', 'חוסר מיקוד בזמן אכילה', ותפקוד במצב 'טייס אוטומטי' מעידה שדפוסי קשב כלליים בחיי היומיום מתואמים חזק עם התנהגות נהיגה. גורמים דמוגרפיים כמו גיל והשכלה גם ממלאים תפקידים חשובים, בעוד שגורמים מסורתיים כמו מגדר ומצב משפחתי מראים כוח ניבוי מינימלי."}
          </p>
          <p className="text-gray-700 mb-4">
            {language === "en"
              ? "The most predictive variables were:"
              : "המשתנים החזקים ביותר בניבוי היו:"}
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>
              {language === "en"
                ? "Rushing Activities Without Attention"
                : "ביצוע פעילויות בחיפזון ללא קשב"}
            </li>
            <li>{language === "en" ? "Age" : "גיל"}</li>
            <li>
              {language === "en"
                ? "Doing Tasks While Not Focused"
                : "ביצוע משימות ללא מיקוד"}
            </li>
          </ul>
          <Image
            src="/images/model/VariableRanking.png"
            alt={
              language === "en"
                ? "Top feature importances graph"
                : "גרף חשיבות המשתנים"
            }
            width={900}
            height={600}
            className="rounded-lg shadow mb-10"
          />
        </section>
      </div>
    </div>
  );
}

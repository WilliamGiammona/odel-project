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
              ? "The most predictive variables were:"
              : "המשתנים החזקים ביותר בניבוי היו:"}
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Rushing Activities Without Attention</li>
            <li>Age</li>
            <li>Doing Tasks While Not Focused</li>
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

          {/* Linear Coefficients (for comparison) */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? "3. Linear Model Coefficients"
              : "3. מקדמי המודל הליניארי"}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === "en"
              ? "Although the focus of this study was on non-linear modeling, we also examined linear coefficients for comparison and interpretability. The graphic below shows the weight assigned to each variable in the linear regression model."
              : "למרות שהמחקר התמקד במידול לא-ליניארי, בחנו גם את המקדמים של המודל הליניארי לצורך פירוש והשוואה. הגרף להלן מציג את המשקל שהוקצה לכל משתנה במודל הרגרסיה הליניארית."}
          </p>
          <Image
            src="/images/model/VariableCoefficients.png"
            alt={
              language === "en"
                ? "Linear regression coefficients"
                : "מקדמי רגרסיה ליניארית"
            }
            width={900}
            height={600}
            className="rounded-lg shadow"
          />
        </section>
      </div>
    </div>
  );
}

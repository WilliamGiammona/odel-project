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
              ? "The Random Forest was trained on 75% of the dataset and evaluated on the remaining 25%. The model achieved an accuracy of approximately 78.1%."
              : "המודל אומן על 75% מנתוני המחקר ונבדק על 25% הנותרים. הדיוק שהתקבל היה כ-78.1%."}
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
            <li>Not Focused While Eating</li>
            <li>Focused On Goal, Not Current Steps</li>
            <li>Not Focused On Present</li>
            <li>Knock Things Over While Not Paying Attention</li>
            <li>Do Tasks Without Awareness</li>
            <li>Education</li>
            <li>Autopilot Mode</li>
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

"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const initialState = {
  Gender: 1,
  Age: 25,
  Marriage_Status: 1,
  Income_Satisfaction: 1,
  Education: 3,
  Delayed_Emotion_Recognition: 2,
  Knock_Things_Over_Not_Paying_Attention: 2,
  Not_Focused_On_Present: 2,
  Walk_Quickly_Not_Focused_On_Surroundings: 2,
  Difficulty_Feeling_Tension_Or_Emotional_Discomfort: 2,
  Forget_Introduction_Names: 2,
  Autopilot: 2,
  Rushing_Activities_Not_Focused: 2,
  Focused_On_Goal_Not_Current_Steps: 2,
  Do_Tasks_Without_Awareness: 2,
  Listen_While_Multitasking: 2,
  Drive_On_Autopilot_Incorrect_Destination: 2,
  Focused_On_Future_And_Past: 2,
  Doing_Tasks_While_Not_Focused: 2,
  Not_Focused_While_Eating: 2,
  Practice_Mindfulness: 1,
  How_Many_Days_Per_Week_Meditatoin: 3,
  Average_Meditation_Duration: 2,
  How_Focused_Was_Meditation: 3,
  Did_Mind_Wander_Meditation: 3,
  Receptive_Attitude_Towards_Experience_Meditation: 3,
  Gentle_With_Yourself_During_Meditation: 3,
  Pay_Attention_To_Chores: 3,
  Pay_Attention_While_Working_Or_Studying: 3,
  Able_To_Refocus_Attention: 3,
  Awareness_Of_Thoughts_Or_Feelings: 3,
  Healthy_Reception: 3,
  Compassionate_To_Yourself: 3,
};

const fieldGroups = {
  Demographics: [
    "Gender",
    "Age",
    "Marriage_Status",
    "Income_Satisfaction",
    "Education",
  ],
  Attention: [
    "Delayed_Emotion_Recognition",
    "Knock_Things_Over_Not_Paying_Attention",
    "Not_Focused_On_Present",
    "Walk_Quickly_Not_Focused_On_Surroundings",
    "Difficulty_Feeling_Tension_Or_Emotional_Discomfort",
    "Forget_Introduction_Names",
    "Autopilot",
    "Rushing_Activities_Not_Focused",
    "Focused_On_Goal_Not_Current_Steps",
    "Do_Tasks_Without_Awareness",
    "Listen_While_Multitasking",
    "Drive_On_Autopilot_Incorrect_Destination",
    "Focused_On_Future_And_Past",
    "Doing_Tasks_While_Not_Focused",
    "Not_Focused_While_Eating",
  ],
  Mindfulness_Practice: [
    "Practice_Mindfulness",
    "How_Many_Days_Per_Week_Meditatoin",
    "Average_Meditation_Duration",
  ],
  Mindfulness_Quality: [
    "How_Focused_Was_Meditation",
    "Did_Mind_Wander_Meditation",
    "Receptive_Attitude_Towards_Experience_Meditation",
    "Gentle_With_Yourself_During_Meditation",
    "Pay_Attention_To_Chores",
    "Pay_Attention_While_Working_Or_Studying",
    "Able_To_Refocus_Attention",
    "Awareness_Of_Thoughts_Or_Feelings",
    "Healthy_Reception",
    "Compassionate_To_Yourself",
  ],
};

const labels: Record<string, { en: string; he: string }> = Object.fromEntries(
  Object.entries({
    Gender: ["Gender", "מגדר"],
    Age: ["Age", "גיל"],
    Marriage_Status: ["Marital Status", "מצב משפחתי"],
    Income_Satisfaction: ["Income Satisfaction", "שביעות רצון מהכנסה"],
    Education: ["Education", "השכלה"],
    Practice_Mindfulness: ["Practice Mindfulness", "האם אתה מתרגל מיינדפולנס"],
    How_Many_Days_Per_Week_Meditatoin: [
      "Days of Meditation per Week",
      "ימי מדיטציה בשבוע",
    ],
    Average_Meditation_Duration: ["Meditation Duration", "משך מדיטציה"],
    How_Focused_Was_Meditation: [
      "How Focused Was Meditation",
      "כמה היית מרוכז במדיטציה",
    ],
    Did_Mind_Wander_Meditation: [
      "Did Mind Wander During Meditation",
      "האם המחשבות נדדו במדיטציה",
    ],
    Receptive_Attitude_Towards_Experience_Meditation: [
      "Receptive Attitude During Meditation",
      "עמדה פתוחה כלפי החוויה במדיטציה",
    ],
    Gentle_With_Yourself_During_Meditation: [
      "Gentle With Yourself During Meditation",
      "עדינות כלפי עצמך במדיטציה",
    ],
    Pay_Attention_To_Chores: [
      "Pay Attention to Chores",
      "קשב בזמן מטלות שגרתיות",
    ],
    Pay_Attention_While_Working_Or_Studying: [
      "Attention While Working or Studying",
      "קשב בעבודה או בלימודים",
    ],
    Able_To_Refocus_Attention: [
      "Able to Refocus Attention",
      "יכולת להחזיר את הקשב",
    ],
    Awareness_Of_Thoughts_Or_Feelings: [
      "Awareness of Thoughts or Feelings",
      "מודעות למחשבות או רגשות",
    ],
    Healthy_Reception: [
      "Healthy Reception of Inner Experience",
      "קבלה בריאה של חוויות פנימיות",
    ],
    Compassionate_To_Yourself: ["Compassionate to Yourself", "חמלה כלפי עצמך"],
    Delayed_Emotion_Recognition: [
      "Delayed Emotion Recognition",
      "זיהוי רגשות באיחור",
    ],
    Knock_Things_Over_Not_Paying_Attention: [
      "Knock Things Over When Distracted",
      "הפלת חפצים עקב חוסר קשב",
    ],
    Not_Focused_On_Present: [
      "Not Focused on the Present",
      "חוסר מיקוד ברגע הנוכחי",
    ],
    Walk_Quickly_Not_Focused_On_Surroundings: [
      "Walk Quickly Without Awareness",
      "הליכה מהירה בלי תשומת לב לסביבה",
    ],
    Difficulty_Feeling_Tension_Or_Emotional_Discomfort: [
      "Difficulty Noticing Emotional Tension",
      "קושי בזיהוי מתחים רגשיים",
    ],
    Forget_Introduction_Names: [
      "Forget Names After Introductions",
      "שכחת שמות לאחר היכרות",
    ],
    Autopilot: ["Operate on Autopilot", "פעולה על טייס אוטומטי"],
    Rushing_Activities_Not_Focused: [
      "Rush Activities Without Focus",
      "ביצוע פעולות במהירות בלי מיקוד",
    ],
    Focused_On_Goal_Not_Current_Steps: [
      "Focus Only on Goal",
      "מיקוד במטרה ולא בצעדים",
    ],
    Do_Tasks_Without_Awareness: [
      "Do Tasks Without Awareness",
      "ביצוע משימות בלי מודעות",
    ],
    Listen_While_Multitasking: [
      "Listen While Multitasking",
      "האזנה תוך כדי ביצוע משימות אחרות",
    ],
    Drive_On_Autopilot_Incorrect_Destination: [
      "Drive to Wrong Place on Autopilot",
      "הגעה ליעד שגוי על טייס אוטומטי",
    ],
    Focused_On_Future_And_Past: [
      "Focused on Future or Past",
      "מיקוד בעבר או בעתיד",
    ],
    Doing_Tasks_While_Not_Focused: [
      "Doing Tasks Without Focus",
      "עשיית משימות ללא ריכוז",
    ],
    Not_Focused_While_Eating: [
      "Not Focused While Eating",
      "חוסר מיקוד בזמן אכילה",
    ],
  }).map(([k, [en, he]]) => [k, { en, he }])
);

const likertOptions = [
  { value: 1, label: "Always", he: "תמיד" },
  { value: 2, label: "Often", he: "לעיתים קרובות" },
  { value: 3, label: "Sometimes", he: "לפעמים" },
  { value: 4, label: "Rarely", he: "לעיתים נדירות" },
  { value: 5, label: "Never", he: "אף פעם" },
];

const attentionLikertOptions = [
  { value: 1, label: "Rarely", he: "לעיתים נדירות" },
  { value: 2, label: "Sometimes", he: "לפעמים" },
  { value: 3, label: "Often", he: "לעיתים קרובות" },
  { value: 4, label: "Always", he: "תמיד" },
];

const dropdownOptions: Record<
  string,
  { value: number; label: string; he: string }[]
> = {
  Gender: [
    { value: 1, label: "Male", he: "זכר" },
    { value: 2, label: "Female", he: "נקבה" },
  ],
  Marriage_Status: [
    { value: 1, label: "Single", he: "רווק/ה" },
    { value: 2, label: "Married / In a Relationship", he: "נשוי/ה או בזוגיות" },
  ],
  Education: [
    { value: 1, label: "Elementary", he: "יסודי" },
    { value: 2, label: "Highschool", he: "תיכון" },
    { value: 3, label: "Associates Degree", he: "תואר עמית" },
    { value: 4, label: "Bachelors", he: "תואר ראשון" },
    { value: 5, label: "Masters", he: "תואר שני" },
    { value: 6, label: "Doctorate", he: "דוקטורט" },
  ],
  Income_Satisfaction: [
    { value: 1, label: "Live comfortably", he: "חיים בנוחות" },
    { value: 2, label: "Get by", he: "מסתדרים" },
    { value: 3, label: "Struggle", he: "מתקשים" },
    { value: 4, label: "Struggle a lot", he: "קושי רב" },
  ],
  Practice_Mindfulness: [
    { value: 1, label: "Yes", he: "כן" },
    { value: 2, label: "No", he: "לא" },
  ],
  Average_Meditation_Duration: [
    { value: 1, label: "1–5 minutes", he: "1–5 דקות" },
    { value: 2, label: "5–10 minutes", he: "5–10 דקות" },
    { value: 3, label: "10+ minutes", he: "10+ דקות" },
  ],
  How_Many_Days_Per_Week_Meditatoin: [
    { value: 0, label: "0 days", he: "0 ימים" },
    { value: 1, label: "1 day", he: "יום אחד" },
    { value: 2, label: "2 days", he: "יומיים" },
    { value: 3, label: "3 days", he: "שלושה ימים" },
    { value: 4, label: "4 days", he: "ארבעה ימים" },
    { value: 5, label: "5 days", he: "חמישה ימים" },
    { value: 6, label: "6 days", he: "שישה ימים" },
    { value: 7, label: "7 days", he: "שבעה ימים" },
  ],
};

[...fieldGroups.Attention, ...fieldGroups.Mindfulness_Quality].forEach(
  (key) => {
    if (fieldGroups.Attention.includes(key)) {
      dropdownOptions[key] = attentionLikertOptions;
    } else {
      dropdownOptions[key] = likertOptions;
    }
  }
);

interface PredictionResult {
  prediction?: number;
  confidence?: number;
  error?: string;
}

export default function ModelInputForm() {
  const [inputs, setInputs] = useState(initialState);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    if (inputs.Age < 18 || inputs.Age > 100) {
      alert(
        language === "en"
          ? "Please enter a valid age between 18 and 100"
          : "אנא הזן גיל תקף בין 18 ל-100"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const parsedInputs = Object.fromEntries(
        Object.entries(inputs).map(([key, value]) => [
          key,
          key === "Age"
            ? Math.max(0, Math.min(120, Number(value)))
            : Number(value),
        ])
      );

      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInputs),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setInputs(initialState);
    setResult(null);
  };

  return (
    <div className="space-y-10 mt-10">
      {Object.entries(fieldGroups).map(([groupTitle, fields]) => (
        <div key={groupTitle}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {language === "en"
              ? groupTitle.replaceAll("_", " ")
              : groupTitle === "Demographics"
              ? "נתונים דמוגרפיים"
              : groupTitle === "Attention"
              ? "התנהגות וקשב"
              : groupTitle === "Mindfulness_Practice"
              ? "תרגול מיינדפולנס"
              : "איכות מיינדפולנס"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1">
                  {labels[key]?.[language === "en" ? "en" : "he"] ||
                    key.replaceAll("_", " ")}
                </label>
                {dropdownOptions[key] ? (
                  <select
                    value={inputs[key as keyof typeof inputs]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {dropdownOptions[key].map((option) => (
                      <option key={option.value} value={option.value}>
                        {language === "en"
                          ? option.label
                          : option.he || option.label}
                      </option>
                    ))}
                  </select>
                ) : key === "Age" ? (
                  <>
                    <input
                      type="range"
                      min={18}
                      max={100}
                      step={1}
                      value={inputs.Age}
                      onChange={(e) => handleChange("Age", e.target.value)}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      {inputs.Age} {language === "en" ? "years old" : "שנים"}
                    </p>
                  </>
                ) : (
                  <input
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={inputs[key as keyof typeof inputs]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex space-x-4">
        <button
          onClick={handleSubmit}
          disabled={isLoading || result !== null}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          {isLoading
            ? language === "en"
              ? "Predicting..."
              : "מנבא..."
            : language === "en"
            ? "Predict"
            : "נבא"}
        </button>
        <button
          onClick={handleReset}
          className="mt-6 bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 cursor-pointer transition-colors"
        >
          {language === "en" ? "Reset" : "אפס"}
        </button>
      </div>

      {result && (
        <div className="mt-6 p-6 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">
            {language === "en" ? "Prediction Result" : "תוצאת החיזוי"}
          </h4>
          {result.error ? (
            <p className="text-red-600">
              {language === "en" ? "Error:" : "שגיאה:"} {result.error}
            </p>
          ) : (
            <>
              <p className="text-xl text-gray-800 font-medium">
                {result.prediction === 1
                  ? language === "en"
                    ? "⚠️ High Risk of Distracted Driving"
                    : "⚠️ סיכון גבוה לנהיגה מוסחת"
                  : language === "en"
                  ? "✅ Low Risk of Distracted Driving"
                  : "✅ סיכון נמוך לנהיגה מוסחת"}
              </p>
              {result.confidence && (
                <p className="text-sm text-gray-600 mt-2">
                  {language === "en" ? "Confidence:" : "רמת ביטחון:"}{" "}
                  {(result.confidence * 100).toFixed(1)}%
                </p>
              )}
              <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-sm text-gray-700">
                  {language === "en"
                    ? "This prediction is based on machine learning analysis of behavioral patterns. Always prioritize road safety and avoid distractions while driving."
                    : "חיזוי זה מבוסס על ניתוח למידת מכונה של דפוסי התנהגות. תמיד תעדיפו בטיחות בדרכים והימנעו מהסחות דעת בזמן נהיגה."}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

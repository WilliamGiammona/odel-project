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
    Gender: ["Gender (1=Male, 2=Female)", "מגדר (1=זכר, 2=נקבה)"],
    Age: ["Age", "גיל"],
    Marriage_Status: [
      "Marital Status (1=Single, 2=Married)",
      "מצב משפחתי (1=רווק/ה, 2=נשוי/ה)",
    ],
    Income_Satisfaction: ["Income Satisfaction", "שביעות רצון מהכנסה"],
    Education: [
      "Education (1=Elementary → 6=Doctorate)",
      "השכלה (1=יסודי → 6=דוקטורט)",
    ],
    Practice_Mindfulness: [
      "Practice Mindfulness (1=Yes, 2=No)",
      "האם אתה מתרגל מיינדפולנס (1=כן, 2=לא)",
    ],
    How_Many_Days_Per_Week_Meditatoin: [
      "Days of Meditation per Week",
      "ימי מדיטציה בשבוע",
    ],
    Average_Meditation_Duration: [
      "Meditation Duration (1=1–5 min, 2=5–10, 3=10+)",
      "משך מדיטציה (1=1–5 דקות, 2=5–10, 3=10+)",
    ],
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
    dropdownOptions[key] = likertOptions;
  }
);

export default function ModelInputForm() {
  const [inputs, setInputs] = useState(initialState);
  const [result, setResult] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleChange = (key: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const parsedInputs = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [
        key,
        key === "Age"
          ? Math.max(0, Math.min(120, Number(value)))
          : Number(value),
      ])
    );

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedInputs),
    });
    const data = await res.json();
    setResult(
      data.prediction !== undefined
        ? `Prediction: ${data.prediction}`
        : `Error: ${data.error}`
    );
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
                    className="border p-2 w-full rounded"
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
                      min={0}
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
                    className="border p-2 w-full rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        {language === "en" ? "Predict" : "נבא"}
      </button>
      {result && (
        <p className="mt-4 text-xl font-semibold text-gray-800">{result}</p>
      )}
    </div>
  );
}

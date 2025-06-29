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

const fieldGroups: Record<string, string[]> = {
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

const labels: Record<string, { en: string; he: string }> = {
  Gender: { en: "Gender (1=Male, 2=Female)", he: "מגדר (1=זכר, 2=נקבה)" },
  Age: { en: "Age", he: "גיל" },
  Marriage_Status: {
    en: "Marital Status (1=Single, 2=Married)",
    he: "מצב משפחתי (1=רווק/ה, 2=נשוי/בקשר)",
  },
  Income_Satisfaction: {
    en: "Income Satisfaction",
    he: "שביעות רצון מהכנסה",
  },
  Education: {
    en: "Education (1=Elementary → 6=Doctorate)",
    he: "השכלה (1=יסודי → 6=דוקטורט)",
  },
  How_Many_Days_Per_Week_Meditatoin: {
    en: "Days of Meditation per Week",
    he: "מספר ימי מדיטציה בשבוע",
  },
  Average_Meditation_Duration: {
    en: "Meditation Duration (1=1–5 min, 2=5–10, 3=10+)",
    he: "משך מדיטציה ממוצע",
  },
  Practice_Mindfulness: {
    en: "Practice Mindfulness (1=Yes, 2=No)",
    he: "האם אתה מתרגל מיינדפולנס (1=כן, 2=לא)",
  },
};

const dropdownOptions: Record<
  string,
  { value: number; label: string; he?: string }[]
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
    { value: 3, label: "10+ minutes", he: "יותר מ־10 דקות" },
  ],
};

export default function ModelInputForm() {
  const [inputs, setInputs] = useState(initialState);
  const [result, setResult] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleChange = (key: string, value: string) => {
    setInputs({ ...inputs, [key]: Number(value) });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
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
                ) : (
                  <input
                    type="number"
                    value={inputs[key as keyof typeof inputs]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="border p-2 w-full rounded"
                    min={0}
                    max={
                      key.includes("How_Many_Days")
                        ? 7
                        : key.includes("Was_Meditation")
                        ? 5
                        : 4
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {language === "en" ? "Predict" : "נבא"}
      </button>
      {result && (
        <p className="mt-4 text-xl font-semibold text-gray-800">{result}</p>
      )}
    </div>
  );
}

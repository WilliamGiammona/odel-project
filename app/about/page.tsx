"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "About the Researchers" : "אודות החוקרים"}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            {language === "en"
              ? "Our research team brings together experts in psychology, behavioral science, and road safety to investigate the complex factors contributing to distracted driving."
              : "צוות המחקר שלנו מאגד מומחים בפסיכולוגיה, מדעי ההתנהגות ובטיחות בדרכים כדי לחקור את הגורמים המורכבים התורמים לנהיגה מוסחת."}
          </p>
        </div>

        <div className="space-y-8">
          {/* Lead Researcher */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">
                    {language === "en" ? "Photo" : "תמונה"}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">
                  {language === "en" ? "Dr. [Name]" : "ד״ר [שם]"}
                </h3>
                <p className="text-blue-600 mb-3">
                  {language === "en" ? "Lead Researcher" : "חוקר ראשי"}
                </p>
                <p className="text-gray-700 mb-4">
                  {language === "en"
                    ? "Dr. [Name] is a senior lecturer in the Department of Psychology at Ruppin Academic Center, specializing in cognitive psychology and human factors in transportation."
                    : "ד״ר [שם] הוא מרצה בכיר בחוג לפסיכולוגיה במרכז האקדמי רופין, המתמחה בפסיכולוגיה קוגניטיבית וגורמי אנוש בתחבורה."}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>
                    {language === "en" ? "Research Interests:" : "תחומי עניין:"}
                  </strong>{" "}
                  {language === "en"
                    ? "Driver behavior, attention and distraction, road safety interventions"
                    : "התנהגות נהגים, קשב והסחת דעת, התערבויות לבטיחות בדרכים"}
                </p>
              </div>
            </div>
          </div>

          {/* Research Assistant */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">
                    {language === "en" ? "Photo" : "תמונה"}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">
                  {language === "en" ? "[Student Name]" : "[שם הסטודנט]"}
                </h3>
                <p className="text-blue-600 mb-3">
                  {language === "en"
                    ? "Graduate Research Assistant"
                    : "עוזר מחקר - תואר שני"}
                </p>
                <p className="text-gray-700 mb-4">
                  {language === "en"
                    ? "[Student Name] is a master's student in psychology at Ruppin Academic Center, focusing on applied research in traffic psychology and driver behavior."
                    : "[שם הסטודנט] הוא סטודנט לתואר שני בפסיכולוגיה במרכז האקדמי רופין, המתמקד במחקר יישומי בפסיכולוגיית תעבורה והתנהגות נהגים."}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>
                    {language === "en" ? "Thesis Topic:" : "נושא התזה:"}
                  </strong>{" "}
                  {language === "en"
                    ? "Risk factors in distracted driving among young Israeli drivers"
                    : "גורמי סיכון בנהיגה מוסחת בקרב נהגים צעירים ישראלים"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            {language === "en"
              ? "Contact the Research Team"
              : "צור קשר עם צוות המחקר"}
          </h3>
          <p className="text-gray-700">
            {language === "en"
              ? "For inquiries about this research or potential collaborations, please contact us at:"
              : "לפניות בנוגע למחקר זה או לשיתופי פעולה אפשריים, אנא צרו קשר:"}
          </p>
          <p className="mt-2">
            <a
              href="mailto:research@ruppin.ac.il"
              className="text-blue-600 hover:underline"
            >
              research@ruppin.ac.il
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

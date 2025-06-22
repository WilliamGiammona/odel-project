"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to a backend service
    alert(
      language === "en" ? "Thank you for your message!" : "תודה על הודעתך!"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {language === "en" ? "Contact Us" : "צור קשר"}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {language === "en" ? "Get in Touch" : "יצירת קשר"}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === "en" ? "Research Team" : "צוות המחקר"}
                </h3>
                <p className="text-gray-700">
                  {language === "en"
                    ? "Department of Psychology"
                    : "החוג לפסיכולוגיה"}
                  <br />
                  {language === "en"
                    ? "Ruppin Academic Center"
                    : "המרכז האקדמי רופין"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === "en" ? "Email" : "דוא״ל"}
                </h3>
                <a
                  href="mailto:research@ruppin.ac.il"
                  className="text-blue-600 hover:underline"
                >
                  research@ruppin.ac.il
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === "en" ? "Phone" : "טלפון"}
                </h3>
                <a
                  href="tel:+97298981111"
                  className="text-blue-600 hover:underline"
                >
                  +972-9-898-1111
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === "en" ? "Address" : "כתובת"}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {language === "en"
                    ? "Ruppin Academic Center\nEmek Hefer 4025000\nIsrael"
                    : "המרכז האקדמי רופין\nעמק חפר 4025000\nישראל"}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {language === "en" ? "Send us a Message" : "שלח לנו הודעה"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "en" ? "Your Name" : "שמך"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "en" ? "Email Address" : "כתובת דוא״ל"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "en" ? "Subject" : "נושא"}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">
                    {language === "en" ? "Select a subject" : "בחר נושא"}
                  </option>
                  <option value="general">
                    {language === "en" ? "General Inquiry" : "פנייה כללית"}
                  </option>
                  <option value="research">
                    {language === "en"
                      ? "Research Collaboration"
                      : "שיתוף פעולה מחקרי"}
                  </option>
                  <option value="media">
                    {language === "en" ? "Media Request" : "בקשת מדיה"}
                  </option>
                  <option value="participation">
                    {language === "en"
                      ? "Study Participation"
                      : "השתתפות במחקר"}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "en" ? "Message" : "הודעה"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {language === "en" ? "Send Message" : "שלח הודעה"}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {language === "en" ? "Find Us" : "מצא אותנו"}
          </h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              {language === "en" ? "Map placeholder" : "מפה"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

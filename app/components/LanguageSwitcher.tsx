// app/components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
          language === "en"
            ? "bg-blue-100 text-blue-700"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label="Switch to English"
      >
        <span className="text-lg">🇬🇧</span>
        <span className="text-sm font-medium">EN</span>
      </button>
      <button
        onClick={() => setLanguage("he")}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
          language === "he"
            ? "bg-blue-100 text-blue-700"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label="Switch to Hebrew"
      >
        <span className="text-lg">🇮🇱</span>
        <span className="text-sm font-medium">עב</span>
      </button>
    </div>
  );
}

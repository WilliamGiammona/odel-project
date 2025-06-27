// app/components/HeroSection.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t("heroTitle")}{" "}
            <span className="text-blue-600">{t("heroTitleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            {t("heroSubtitle")}
          </p>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                8%
              </div>
              <p className="text-gray-600">{t("heroCrashStat")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                3,275
              </div>
              <p className="text-gray-600">{t("heroLivesStat")}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                4.6 {t("heroStatSec")}
              </div>
              <p className="text-gray-600">{t("heroTimeStat")}</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("heroExploreBtn")}
              <svg
                className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              {t("heroMethodologyBtn")}
            </Link>
          </div>

          {/* Research Context */}
          <div className="mt-12 text-sm text-gray-600">{t("heroContext")}</div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}

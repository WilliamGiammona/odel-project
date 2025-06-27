// app/components/Footer.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm">
          © {currentYear} {t("footerUniversity")}. {t("footerRights")}.
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: t("home") },
    { href: "/research", label: t("aboutResearch") },
    { href: "/methodology", label: t("methodology") },
    { href: "/about", label: t("findings") },
    { href: "/implications", label: t("implications") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t("footerAboutTitle")}
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {t("footerAboutText")}
            </p>
            <div className="text-sm">
              <p>{t("footerDeveloped")}</p>
              <p className="font-semibold text-white">
                {t("footerUniversity")}
              </p>
              <p>{t("footerDepartment")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t("footerQuickLinks")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                  {index < quickLinks.length - 1 && (
                    <span className="text-gray-500 ml-4">|</span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t("footerContactTitle")}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">
                  {t("footerContactEmail")}:{" "}
                </span>
                <a
                  href="mailto:research@ruppin.ac.il"
                  className="hover:text-white transition-colors"
                >
                  research@ruppin.ac.il
                </a>
              </div>
              <div>
                <span className="text-gray-400">
                  {t("footerContactPhone")}:{" "}
                </span>
                <a
                  href="tel:+97298981111"
                  className="hover:text-white transition-colors"
                >
                  +972-9-898-1111
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} {t("footerUniversity")}. {t("footerRights")}.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors mx-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors mx-2"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

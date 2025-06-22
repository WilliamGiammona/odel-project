"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/research", label: t("aboutResearch") },
    { href: "/methodology", label: t("methodology") },
    { href: "/about", label: t("findings") },
    { href: "/implications", label: t("implications") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              {t("siteTitle")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 ${
                    pathname === item.href
                      ? "text-blue-600 border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center px-3 py-2 rounded text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

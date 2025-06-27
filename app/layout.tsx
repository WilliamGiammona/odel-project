// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Distracted Driving Research - Risk Factors Study",
  description:
    "Academic research on risk factors that increase the likelihood of distracted driving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <LanguageProvider>
          <Navigation />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

"use client";

import { Download } from "lucide-react";

import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary["navbar"];
};

export default function Navbar({ locale, dictionary }: NavbarProps) {
  const navItems = [
    { id: "hero", label: dictionary.nav.home },
    { id: "about", label: dictionary.nav.about },
    { id: "projects", label: dictionary.nav.projects },
    { id: "experience", label: dictionary.nav.experience },
    { id: "contact", label: dictionary.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const cvFileName = locale === "fr" ? "cv_francais.pdf" : "cv_anglais.pdf";
    const link = document.createElement("a");
    link.href = `/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-logo">AI</div>
          <div className="nav-title">
            <span className="nav-title-main">Natej Ghodbane</span>
            <span className="nav-title-sub">{dictionary.brandRole}</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link clean-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="nav-cta-button"
            onClick={handleDownloadCV}
            title={dictionary.downloadCvTitle}
          >
            <Download size={16} />
            {dictionary.downloadCv}
          </button>
          <LanguageSwitcher
            currentLocale={locale}
            label={dictionary.languageSwitcher.label}
            englishLabel={dictionary.languageSwitcher.english}
            frenchLabel={dictionary.languageSwitcher.french}
          />
        </nav>
      </div>
    </header>
  );
}

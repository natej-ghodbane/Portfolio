"use client";

import { Download } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Natej_Ghodbane_CV.pdf";
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
            <span className="nav-title-sub">Data Science & AI Engineer</span>
          </div>
        </div>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
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
            title="Download CV as PDF"
          >
            <Download size={16} />
            CV
          </button>
        </nav>
      </div>
    </header>
  );
}

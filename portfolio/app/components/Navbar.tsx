"use client";

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
              className="nav-link"
              type="button"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

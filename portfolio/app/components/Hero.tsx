import type { Dictionary } from "@/lib/get-dictionary";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

export default function Hero({ dictionary }: HeroProps) {
  return (
    <section id="hero" className="hero section">
      <div>
        <div className="hero-badge-row">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>{dictionary.badge}</span>
          </div>
        </div>

        <h1 className="hero-title">
          {dictionary.titleStart}{" "}
          <span className="hero-highlight">{dictionary.titleHighlight}</span>{" "}
          {dictionary.titleEnd}
        </h1>

        <p className="hero-subtitle">{dictionary.subtitle}</p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn-primary">
            {dictionary.viewProjects}
          </a>
          <a href="#contact" className="btn-ghost">
            {dictionary.collaborate}
          </a>
        </div>

        <div className="hero-meta-row">
          <div className="hero-meta-item">
            <span className="hero-meta-label">{dictionary.focusLabel}</span>
            <span className="hero-meta-value">{dictionary.focusValue}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{dictionary.stackLabel}</span>
            <span className="hero-meta-value">{dictionary.stackValue}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{dictionary.locationLabel}</span>
            <span className="hero-meta-value">{dictionary.locationValue}</span>
          </div>
        </div>
      </div>

      <div className="hero-profile-card">
        <div className="profile-avatar">
          <img src="/profile.jpg" alt="Natej Ghodbane" className="avatar-image" />
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">Natej Ghodbane</h3>
          <p className="profile-role">{dictionary.profileRole}</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">4+</div>
              <div className="stat-label">{dictionary.stats.projects}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2+</div>
              <div className="stat-label">{dictionary.stats.years}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">{dictionary.stats.dedicated}</div>
            </div>
          </div>

          <div className="profile-skills">
            <span className="skill-badge">Machine Learning</span>
            <span className="skill-badge">Deep Learning</span>
            <span className="skill-badge">MLOps</span>
          </div>
        </div>
      </div>
    </section>
  );
}

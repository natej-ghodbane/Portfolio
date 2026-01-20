export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div>
        <div className="hero-badge-row">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>AI & Data</span>
          </div>
        </div>

        <h1 className="hero-title">
          Designing <span className="hero-highlight">intelligent systems</span>{" "}
          that learn from data & create impact.
        </h1>

        <p className="hero-subtitle">
          I'm a Data Science & AI Engineer focused on turning real-world
          problems into deployable ML solutions. Explore my portfolio to see
          projects leveraging machine learning, deep learning, and MLOps.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn-primary">
            View featured projects
          </a>
          <a href="#contact" className="btn-ghost">
            Let's collaborate
          </a>
        </div>

        <div className="hero-meta-row">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Focus</span>
            <span className="hero-meta-value">ML, Deep Learning, MLOps</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Stack</span>
            <span className="hero-meta-value">
              Python • TensorFlow • PyTorch • Next.js
            </span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Location</span>
            <span className="hero-meta-value">Rades • Tunisia</span>
          </div>
        </div>
      </div>

      <div className="hero-profile-card">
        <div className="profile-avatar">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGwRqImJW2fzA/profile-displayphoto-crop_800_800/B4DZtgAJQRJUAI-/0/1766842210252?e=1770249600&v=beta&t=JQefbl0tR7oeRDx1JyueBn-5GhGv4ZD7kCAZrNRwS-E" alt="Natej Ghodbane" className="avatar-image" />
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">Natej Ghodbane</h3>
          <p className="profile-role">Data Science & AI Engineer</p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Dedicated</div>
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

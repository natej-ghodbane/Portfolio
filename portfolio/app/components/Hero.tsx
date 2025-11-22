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

      <div className="hero-orb">
        <div className="orb-core">
          <div className="orb-grid" />
          <div className="orb-inner-content">
            <div className="orb-title">Model Studio</div>
            <div className="orb-main">
              <span>Data</span>
              <span>Science</span>
              <span className="hero-highlight">+ AI</span>
            </div>

            <p className="orb-caption">
              From raw data to production-ready models: EDA, feature engineering,
              training, evaluation and deployment pipelines.
            </p>

            <div className="orb-tags">
              <span className="orb-tag">Machine Learning</span>
              <span className="orb-tag">Deep Learning</span>
              <span className="orb-tag">MLOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

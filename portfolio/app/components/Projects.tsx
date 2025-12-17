export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">Selected work</div>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {/* Project 1 – MLOps Churn Prediction */}
        <article className="project-card">
          <div>
            <div className="project-pill">MLOps • AI</div>
            <h3 className="project-title">Churn Prediction MLOps Platform</h3>
            <p className="project-desc">
              End-to-end MLOps platform for customer churn prediction with
              automated training, MLflow experiment tracking, FastAPI inference,
              Streamlit dashboard, and Dockerized CI/CD pipeline.
            </p>

            <div className="project-tech-row">
              <span className="project-tech">Python</span>
              <span className="project-tech">XGBoost</span>
              <span className="project-tech">MLflow</span>
              <span className="project-tech">FastAPI</span>
              <span className="project-tech">Streamlit</span>
              <span className="project-tech">Docker</span>
              <span className="project-tech">Jenkins</span>
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/natej-ghodbane/MLOps"
              target="_blank"
              className="project-link"
            >
              GitHub
            </a>
          </div>
        </article>

        {/* Project 2 – Agri-Hope */}
        <article className="project-card">
          <div>
            <div className="project-pill">AI + Web</div>
            <h3 className="project-title">Agri-Hope Marketplace</h3>
            <p className="project-desc">
              Full-stack marketplace for small farmers with an integrated AI
              assistant.
            </p>

            <div className="project-tech-row">
              <span className="project-tech">Next.js</span>
              <span className="project-tech">NestJS</span>
              <span className="project-tech">MongoDB</span>
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://wie-act-esprit.vercel.app"
              target="_blank"
              className="project-link"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

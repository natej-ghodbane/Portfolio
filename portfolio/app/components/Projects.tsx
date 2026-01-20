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
              Streamlit dashboard, ELK Stack, and Dockerized CI/CD pipeline.
            </p>

            <div className="project-tech-row">
              <span className="project-tech">Python</span>
              <span className="project-tech">XGBoost</span>
              <span className="project-tech">MLflow</span>
              <span className="project-tech">FastAPI</span>
              <span className="project-tech">Streamlit</span>
              <span className="project-tech">Docker</span>
              <span className="project-tech">Jenkins</span>
              <span className="project-tech">ELK Stack</span>
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

        {/* Project 3 – Breast Cancer Prediction Platform */}
        <article className="project-card">
          <div>
            <div className="project-pill">ML • XAI</div>
            <h3 className="project-title">Breast Cancer Prediction Platform</h3>
            <p className="project-desc">
              End-to-end ML platform for breast cancer prediction developed using CRISP-DM methodology with model interpretability via SHAP, FastAPI backend, and interactive Next.js frontend.
            </p>

            <ul className="project-features">
              <li>ML Models: Logistic Regression, SVM, Random Forest, MLP, XGBoost</li>
              <li>Explainable AI (XAI) using SHAP for prediction interpretation</li>
              <li>FastAPI backend with inference API</li>
              <li>Interactive Next.js web interface</li>
            </ul>

            <div className="project-tech-row">
              <span className="project-tech">Python</span>
              <span className="project-tech">scikit-learn</span>
              <span className="project-tech">XGBoost</span>
              <span className="project-tech">SHAP</span>
              <span className="project-tech">FastAPI</span>
              <span className="project-tech">Next.js</span>
            </div>
          </div>

          <div className="project-links">
            <a
              href="https://vimeo.com/1156500095?share=copy&fl=sv&fe=ci"
              target="_blank"
              className="project-link"
            >
              Demo Video
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

import type { Dictionary } from "@/lib/get-dictionary";
import ImageGallery from "./ImageGallery";

type ProjectsProps = {
  dictionary: Dictionary["projects"];
};

export default function Projects({ dictionary }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">{dictionary.kicker}</div>
        <h2 className="section-title">{dictionary.title}</h2>
      </div>

      <div className="projects-grid">
        {/* Project 1 – MLOps Churn Prediction */}
        <article className="project-card">
          <div>
            <div className="project-pill">{dictionary.cards.mlops.pill}</div>
            <h3 className="project-title">{dictionary.cards.mlops.title}</h3>
            <p className="project-desc">{dictionary.cards.mlops.description}</p>

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
              rel="noopener noreferrer"
              className="project-link"
            >
              {dictionary.cards.mlops.linkLabel}
            </a>
          </div>
        </article>

        {/* Project 2 – Restaurant Rating Dashboard */}
        <article className="project-card project-card-with-gallery">
          <div className="project-card-content">
            <div className="project-pill">{dictionary.cards.restaurantRating.pill}</div>
            <h3 className="project-title">
              {dictionary.cards.restaurantRating.title}
            </h3>
            <p className="project-desc">
              {dictionary.cards.restaurantRating.description}
            </p>

            <ul className="project-features">
              {dictionary.cards.restaurantRating.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="project-tech-row">
              <span className="project-tech">Power BI</span>
              <span className="project-tech">DAX</span>
              <span className="project-tech">Python</span>
              <span className="project-tech">Pandas</span>
              <span className="project-tech">Scikit-learn</span>
              <span className="project-tech">Seaborn</span>
              <span className="project-tech">Data Visualization</span>
            </div>
          </div>

          <div className="project-hover-gallery">
            <ImageGallery variant="hover" />
          </div>

          <div className="project-links">
            <a
              href="https://vimeo.com/1188407986?share=copy&fl=sv&fe=ci#t=0"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {dictionary.cards.restaurantRating.linkLabel}
            </a>
          </div>
        </article>

        {/* Project 3 – Breast Cancer Prediction Platform */}
        <article className="project-card">
          <div>
            <div className="project-pill">{dictionary.cards.breastCancer.pill}</div>
            <h3 className="project-title">{dictionary.cards.breastCancer.title}</h3>
            <p className="project-desc">{dictionary.cards.breastCancer.description}</p>

            <ul className="project-features">
              {dictionary.cards.breastCancer.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
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
              rel="noopener noreferrer"
              className="project-link"
            >
              {dictionary.cards.breastCancer.linkLabel}
            </a>
          </div>
        </article>

        {/* Project 4 – Agri-Hope */}
        <article className="project-card">
          <div>
            <div className="project-pill">{dictionary.cards.agriHope.pill}</div>
            <h3 className="project-title">{dictionary.cards.agriHope.title}</h3>
            <p className="project-desc">{dictionary.cards.agriHope.description}</p>

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
              rel="noopener noreferrer"
              className="project-link"
            >
              {dictionary.cards.agriHope.linkLabel}
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

import type { Dictionary } from "@/lib/get-dictionary";

type AboutProps = {
  dictionary: Dictionary["about"];
};

export default function About({ dictionary }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <div className="section-kicker">{dictionary.kicker}</div>
        <h2 className="section-title">{dictionary.title}</h2>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3 className="card-title">{dictionary.whoAmI}</h3>
          <p className="card-subtitle">{dictionary.whoAmISubtitle}</p>

          <p className="text-sm">{dictionary.whoAmIDescription}</p>

        </article>

        <article className="card">
          <h3 className="card-title">{dictionary.coreSkills}</h3>
          <p className="card-subtitle">{dictionary.coreSkillsSubtitle}</p>

          <div className="chips">
            <span className="chip">Python</span>
            <span className="chip">Pandas</span>
            <span className="chip">Scikit-learn</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">PyTorch</span>
            <span className="chip">XGBoost</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Streamlit</span>
            <span className="chip">Flutter</span>
            <span className="chip">Power BI</span>
            <span className="chip">DAX</span>
            <span className="chip">Seaborn</span>
            <span className="chip">Data Visualization</span>
            <span className="chip">SHAP</span>
            <span className="chip">LangGraph</span>
            <span className="chip">NLP</span>
            <span className="chip">RAG</span>
            <span className="chip">SQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MongoDB Atlas</span>
            <span className="chip">Postgres</span>
            <span className="chip">Next.js</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
            <span className="chip">MLOps</span>
            <span className="chip">CI/CD</span>
            <span className="chip">Docker</span>
            <span className="chip">Jenkins</span>
            <span className="chip">MLflow</span>
            <span className="chip">ELK Stack</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <div className="section-kicker">About me</div>
        <h2 className="section-title">Data-driven, user-centric, curious.</h2>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3 className="card-title">Who am I?</h3>
          <p className="card-subtitle">Data Science & AI Engineer • ESPRIT</p>

          <p className="text-sm">
            I build intelligent products that connect math, code and people. I
            work in ML, NLP, recommendation systems and AI-powered web apps.
          </p>

        </article>

        <article className="card">
          <h3 className="card-title">Core Skills</h3>
          <p className="card-subtitle">What I use to craft ideas.</p>

          <div className="chips">
            <span className="chip">Python</span>
            <span className="chip">Pandas</span>
            <span className="chip">Scikit-learn</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">NLP</span>
            <span className="chip">RAG</span>
            <span className="chip">SQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Postgres</span>
            <span className="chip">Next.js</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
            <span className="chip">MLOps</span>
            <span className="chip">CI/CD</span>
            <span className="chip">Docker</span>
            <span className="chip">Jenkins</span>
            <span className="chip">mlflow</span>
            <span className="chip">ELk</span>
          </div>
        </article>
      </div>
    </section>
  );
}

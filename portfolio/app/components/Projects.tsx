export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">Selected work</div>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {/* Project 3 */}
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
            <a href="https://wie-act-esprit.vercel.app" target="_blank" className="project-link">
                Live demo
            </a>
            </div>
        </article>     
      </div>
    </section>
  );
}

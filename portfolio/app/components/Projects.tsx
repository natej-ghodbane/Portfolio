export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">Selected work</div>
        <h2 className="section-title">Projects where data meets product.</h2>
      </div>

      <div className="projects-grid">
        {/* Project 3 */}
        <article className="project-card">
            <div>
            <div className="project-pill">AI + Web</div>
            <h3 className="project-title">Agri-Hope Marketplace</h3>
            <p className="project-desc">
                Full-stack marketplace for small farmers with an integrated AI
                assistant helping with crop decisions and marketplace
                navigation.
            </p>
            <div className="project-tech-row">
                <span className="project-tech">Next.js</span>
                <span className="project-tech">NestJS</span>
                <span className="project-tech">MongoDB</span>
            </div>
            </div>
            <div className="project-links">
            <a href="#" className="project-link">
                Live demo
            </a>
            </div>
        </article>     
      </div>
    </section>
  );
}

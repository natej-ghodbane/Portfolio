export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <div className="section-kicker">Experience</div>
        <h2 className="section-title">
          Learning by building, mentoring and shipping.
        </h2>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3 className="card-title">Timeline</h3>
          <p className="card-subtitle">Highlights from my journey.</p>

          <div className="timeline">
            {/* Item 1 */}
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-title">
                Data Science & AI Engineering Student
              </div>
              <div className="timeline-meta">ESPRIT • Current</div>
              <p className="timeline-desc">
                Coursework & projects in ML, Big Data, cloud, full-stack
                development and software architecture.
              </p>
            </div>

            {/* Item 2 */}
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-title">
                IEEE Student Branch
              </div>
              <div className="timeline-meta">
                 Workshops • Events • Projects
              </div>
                <p className="timeline-desc">
                attended Workshops on Data Science, AI, and Web Development.
                worked on many projects and events as a team member.
              </p>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-title">ML & MLOps Side Projects</div>
              <div className="timeline-meta">
                RAG chatbots • Dashboards
              </div>
              <p className="timeline-desc">
                Built pipelines with proper experimentation, evaluation and
                deployment: versioning, metrics and model reproducibility.
              </p>
            </div>
          </div>
        </article>

        {/* RIGHT SIDE — Goals */}
        <article className="card">
          <h3 className="card-title">What I'm looking for</h3>
          <p className="card-subtitle">Internships • collaborations • research.</p>

          <p className="text-sm">
            I'm interested in internships and collaborations where I can:
          </p>

          <ul className="text-sm" style={{ marginTop: "0.6rem" }}>
            <li>Design and train ML models on real-world datasets.</li>
            <li>Work with data platforms, pipelines and MLOps tools.</li>
            <li>Build AI-powered features inside modern web apps.</li>
            <li>Contribute to open-source or research-oriented work.</li>
          </ul>

          <p className="text-sm" style={{ marginTop: "0.8rem" }}>
            If your team works at the intersection of <b>AI, product and impact</b>,
            I'd love to talk.
          </p>
        </article>
      </div>
    </section>
  );
}

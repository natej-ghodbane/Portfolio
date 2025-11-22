"use client";

export default function contact() {
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Soon ... I'm working on setting up the contact form functionality!"
    );
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Let's build thoughtful AI together.</h2>
      </div>

      <div className="contact-grid">
        {/* LEFT SECTION */}
        <div className="card">
          <p className="contact-item">
            <span className="contact-label">Email</span>
            <br />
            <span className="contact-value">natej.ghodbane@esprit.tn</span>
          </p>

          <p className="contact-item" style={{ marginTop: "0.9rem" }}>
            <span className="contact-label">GitHub</span>
            <br />
            <span className="contact-value">github.com/natej-ghodbane</span>
          </p>

          <p className="contact-item" style={{ marginTop: "0.9rem" }}>
            <span className="contact-label">LinkedIn</span>
            <br />
            <span className="contact-value">
              linkedin.com/in/natejghodbane
            </span>
          </p>

          <p className="contact-item" style={{ marginTop: "1.1rem" }}>
            I usually reply in 24-48 hours.  
            Feel free to share your idea, team or opportunity.
          </p>
        </div>

        {/* RIGHT SECTION — Contact Form */}
        <form className="card contact-form" onSubmit={sendMessage}>
          <div>
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="textarea"
              placeholder="Tell me about your idea, team or opportunity…"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

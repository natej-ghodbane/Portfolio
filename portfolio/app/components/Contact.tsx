"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
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
          {/* EMAIL */}
          <p className="contact-item link-item">
            <span className="contact-label">Email</span>
            <br />
            <a
              href="mailto:natej.ghodbane@esprit.tn"
              className="contact-value link"
            >
              <Mail className="icon" size={18} />
              natej.ghodbane@esprit.tn
            </a>
          </p>

          {/* GITHUB */}
          <p className="contact-item link-item" style={{ marginTop: "0.9rem" }}>
            <span className="contact-label">GitHub</span>
            <br />
            <a
              href="https://github.com/natej-ghodbane"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value link"
            >
              <Github className="icon" size={18} />
              github.com/natej-ghodbane
            </a>
          </p>

          {/* LINKEDIN */}
          <p className="contact-item link-item" style={{ marginTop: "0.9rem" }}>
            <span className="contact-label">LinkedIn</span>
            <br />
            <a
              href="https://linkedin.com/in/natejghodbane"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value link"
            >
              <Linkedin className="icon" size={18} />
              linkedin.com/in/natejghodbane
            </a>
          </p>

          <p className="contact-item" style={{ marginTop: "1.1rem" }}>
            I usually reply in 24-48 hours.
            <br />
            Feel free to share your idea, team or opportunity.
          </p>
        </div>

        {/* RIGHT SECTION — CONTACT FORM */}
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

      {/* Extra Styles */}
      <style jsx>{`
        .link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .icon {
          transition: 0.25s ease;
        }

        .link:hover {
          color: #00eaff;
          text-decoration: underline;
          transform: translateX(3px);
        }

        .link:hover .icon {
          color: #00eaff;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

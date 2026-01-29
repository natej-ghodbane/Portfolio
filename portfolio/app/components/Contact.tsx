"use client";

import { useState, useRef } from "react";
import { Mail, Github, Linkedin, Loader2, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setStatus("sending");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "sending":
        return (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending...
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle size={18} />
            Message Sent!
          </>
        );
      case "error":
        return (
          <>
            <XCircle size={18} />
            Failed to Send
          </>
        );
      default:
        return "Send message";
    }
  };

  const getButtonClass = () => {
    const baseClass = "btn-primary";
    switch (status) {
      case "sending":
        return `${baseClass} btn-sending`;
      case "success":
        return `${baseClass} btn-success`;
      case "error":
        return `${baseClass} btn-error`;
      default:
        return baseClass;
    }
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
        <form ref={formRef} className="card contact-form" onSubmit={sendMessage}>
          <div>
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="from_name"
              className="input"
              placeholder="Your name"
              required
              disabled={status === "sending"}
            />
          </div>

          <div>
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="from_email"
              type="email"
              className="input"
              placeholder="you@example.com"
              required
              disabled={status === "sending"}
            />
          </div>

          <div>
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="Tell me about your idea, team or opportunity…"
              required
              disabled={status === "sending"}
            />
          </div>

          {status === "error" && (
            <p className="error-message">
              Something went wrong. Please try again.
            </p>
          )}

          {status === "success" && (
            <p className="success-message">Thank you! I'll get back to you soon.</p>
          )}

          <button 
            type="submit" 
            className={getButtonClass()}
            disabled={status === "sending"}
          >
            {getButtonContent()}
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

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-sending {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-success {
          background: linear-gradient(135deg, #10b981, #059669) !important;
          border-color: #10b981 !important;
        }

        .btn-error {
          background: linear-gradient(135deg, #ef4444, #dc2626) !important;
          border-color: #ef4444 !important;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.875rem;
          margin: 0;
          padding: 0.5rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 6px;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .success-message {
          color: #10b981;
          font-size: 0.875rem;
          margin: 0;
          padding: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 6px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .input:disabled,
        .textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}

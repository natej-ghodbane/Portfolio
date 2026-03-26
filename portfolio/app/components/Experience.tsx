import type { Dictionary } from "@/lib/get-dictionary";

type ExperienceProps = {
  dictionary: Dictionary["experience"];
};

export default function Experience({ dictionary }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <div className="section-kicker">{dictionary.kicker}</div>
        <h2 className="section-title">{dictionary.title}</h2>
      </div>

      <div className="grid-two">
        <article className="card">
          <h3 className="card-title">{dictionary.timeline}</h3>
          <p className="card-subtitle">{dictionary.timelineSubtitle}</p>

          <div className="timeline">
            {dictionary.items.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-dot" />
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-meta">{item.meta}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        {/* RIGHT SIDE — Goals */}
        <article className="card">
          <h3 className="card-title">{dictionary.lookingFor}</h3>
          <p className="card-subtitle">{dictionary.lookingForSubtitle}</p>

          <p className="text-sm">{dictionary.lookingForIntro}</p>

          <ul className="text-sm" style={{ marginTop: "0.6rem" }}>
            {dictionary.lookingForList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="text-sm" style={{ marginTop: "0.8rem" }}>
            {dictionary.lookingForOutro}
          </p>
        </article>
      </div>
    </section>
  );
}

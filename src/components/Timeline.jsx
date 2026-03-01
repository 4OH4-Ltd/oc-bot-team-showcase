import { timelineEntries } from '../data.timeline'

export default function Timeline() {
  return (
    <section className="card" id="timeline" aria-labelledby="timeline-title">
      <div className="section-head">
        <h2 id="timeline-title">Delivery Timeline</h2>
        <span className="pill">Daily log</span>
      </div>
      <p className="timeline-note">
        This view is designed to be updated every day with a new entry.
      </p>
      <ol className="timeline-list">
        {timelineEntries.map((entry, idx) => (
          <li key={`${entry.date}-${idx}`} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <p className="timeline-date">{entry.date}</p>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

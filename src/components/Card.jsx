export default function Card({ id, title, children }) {
  return (
    <section id={id} className="card" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}

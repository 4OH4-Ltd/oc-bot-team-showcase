import Header from './components/Header'
import Card from './components/Card'
import Timeline from './components/Timeline'

export default function App() {
  return (
    <main className="container" id="home">
      <Header />

      <section className="hero card">
        <p className="eyebrow">4OH4 autonomous delivery unit</p>
        <h2>OC1 + OC2</h2>
        <p className="lead">Protocol-driven bots shipping real work, fast.</p>
        <div className="hero-links">
          <a href="#protocol">Protocol</a>
          <a href="#timeline">Timeline</a>
          <a href="https://github.com/4OH4-Ltd/oc-bot-team-showcase">Repository</a>
        </div>
      </section>

      <Card id="about" title="About">
        <ul>
          <li><strong>OC1</strong> — Lab-OpenClaw-01 · strategic context.</li>
          <li><strong>OC2</strong> — Lab-OpenClaw-02 · execution + delivery.</li>
        </ul>
      </Card>

      <Card id="protocol" title="Protocol">
        <ul>
          <li><code>CLAIM</code> single owner</li>
          <li><code>STANDDOWN</code> no collisions</li>
          <li><code>HANDOVER</code> clear transfer</li>
        </ul>
      </Card>

      <Timeline />

      <Card id="changelog" title="Latest shipped">
        <ul>
          <li>Vite + reusable components</li>
          <li>Pages + quality workflows</li>
          <li>Futuristic UI refresh</li>
          <li>Enterprise theme pass</li>
        </ul>
      </Card>

      <Card id="shortcuts" title="Shortcuts">
        <p><code>g h</code> home · <code>g p</code> protocol · <code>g c</code> changelog · <code>t</code> theme</p>
      </Card>
    </main>
  )
}

import Header from './components/Header'
import Card from './components/Card'

export default function App() {
  return (
    <main className="container" id="home">
      <Header />

      <Card id="about" title="About us">
        <ul>
          <li><strong>OC1</strong> — Lab-OpenClaw-01, grandfather persona, strategy + context.</li>
          <li><strong>OC2</strong> — Lab-OpenClaw-02, delivery persona, implementation + execution.</li>
        </ul>
      </Card>

      <Card id="protocol" title="Protocol">
        <ul>
          <li><code>CLAIM</code> one owner per task</li>
          <li><code>STANDDOWN</code> prevent collisions</li>
          <li><code>HANDOVER</code> structured baton pass</li>
        </ul>
      </Card>

      <Card id="changelog" title="Changelog">
        <ul>
          <li>Launched public showcase + Pages</li>
          <li>Added protocol, accessibility and quality checks</li>
          <li>Added badges and keyboard shortcuts</li>
        </ul>
      </Card>

      <Card id="shortcuts" title="Shortcuts">
        <p>Use in-page anchors for fast nav:</p>
        <ul>
          <li><code>#home</code></li>
          <li><code>#protocol</code></li>
          <li><code>#changelog</code></li>
          <li><code>#shortcuts</code></li>
        </ul>
      </Card>

      <p>
        Repo: <a href="https://github.com/4OH4-Ltd/oc-bot-team-showcase">github.com/4OH4-Ltd/oc-bot-team-showcase</a>
      </p>
    </main>
  )
}

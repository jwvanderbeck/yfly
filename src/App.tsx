import { WorldMap } from "./components/WorldMap";
import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>yfly</h1>
          <p className="tagline">Charter pilot dispatch</p>
        </header>
        <section className="sidebar-section">
          <h2>Pilot</h2>
          <p className="muted">No pilot loaded.</p>
        </section>
        <section className="sidebar-section">
          <h2>Company</h2>
          <p className="muted">No company loaded.</p>
        </section>
        <section className="sidebar-section">
          <h2>Selected route</h2>
          <p className="muted">Click an airport on the map.</p>
        </section>
      </aside>
      <main className="map-pane">
        <WorldMap />
      </main>
    </div>
  );
}

export default App;

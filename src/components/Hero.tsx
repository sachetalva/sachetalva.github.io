import { resumeData } from "../data/resumeData";

interface HeroProps {
  isPaperMode?: boolean;
  isPrint?: boolean;
}

export const Hero = (props: HeroProps) => {
  // Clean initials placeholder avatar (SA for Sachet Alva) matching the design system theme
  const avatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><rect width="100%" height="100%" fill="%23f1f5f9"/><text x="50%" y="52%" font-family="Outfit, Inter, system-ui, sans-serif" font-weight="700" font-size="36" fill="%23475569" dominant-baseline="middle" text-anchor="middle">SA</text></svg>`;

  if (props.isPaperMode) {
    return (
      <div
        class={props.isPrint ? "hero-cell" : "paper-cell hero-cell"}
        id="about"
        style={props.isPrint ? { padding: 0 } : undefined}
      >
        <h2 class="cell-title">About Sachet</h2>
        <p class="hero-description" id="hero-description-text">
          {resumeData.summary}
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" onClick={() => (window as any).downloadResume?.()} aria-label="Print/Export Resume">
            Export PDF
          </button>
          <a href="#contact" class="btn btn-secondary" aria-label="Contact Details">
            Contact
          </a>
        </div>
        <div class="profile-highlights-badges" style={{ display: "flex", "flex-wrap": "wrap", gap: "0.4rem", "margin-top": "1rem" }}>
          <span class="timeline-tag" data-testid="stat-years" style={{ "font-size": "0.75rem", padding: "0.25rem 0.65rem" }}>
            <strong>Experience:</strong> 16+ Years
          </span>
          <span class="timeline-tag" data-testid="stat-team" style={{ "font-size": "0.75rem", padding: "0.25rem 0.65rem" }}>
            <strong>Team Size:</strong> 12+ SDEs
          </span>
          <span class="timeline-tag" data-testid="stat-scale" style={{ "font-size": "0.75rem", padding: "0.25rem 0.65rem" }}>
            <strong>Managing Distributed Systems:</strong> 3+ Years
          </span>
          <span class="timeline-tag" data-testid="stat-platform" style={{ "font-size": "0.75rem", padding: "0.25rem 0.65rem" }}>
            <strong>Core Platform Expertise:</strong> Security & Search
          </span>
        </div>
      </div>
    );
  }

  return (
    <section class="glass-card hero-gateway" id="about" data-testid="hero-gateway-section">
      <div class="hero-content">
        <div class="hero-badge">
          <span>🖥️ Interactive 3D Software Studio</span>
        </div>
        <h1 class="hero-name">{resumeData.name}</h1>
        <div class="hero-title-highlight">
          <span>{resumeData.title}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ "font-size": "1rem", color: "var(--text-secondary)", "font-weight": "500" }}>Amazon SDM</span>
        </div>

        {/* 3D Studio Hotspots Bar */}
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            gap: "0.5rem",
            "margin-bottom": "1.25rem"
          }}
          data-testid="3d-hotspot-bar"
        >
          <a
            href="#projects"
            class="timeline-tag"
            style={{ padding: "0.4rem 0.8rem", "font-weight": "700" }}
          >
            💻 3D Laptop → Software & Architecture
          </a>
          <a
            href="#experience"
            class="timeline-tag"
            style={{ padding: "0.4rem 0.8rem", "font-weight": "700" }}
          >
            📋 3D Whiteboard → Career Timeline
          </a>
          <a
            href="#skills"
            class="timeline-tag"
            style={{ padding: "0.4rem 0.8rem", "font-weight": "700" }}
          >
            🖥️ 3D Monitors → Leadership Matrix
          </a>
        </div>

        <p class="hero-bio">{resumeData.summary}</p>

        <div class="hero-actions" style={{ "margin-bottom": "2rem" }}>
          <a href="#experience" class="btn btn-primary" style={{ padding: "0.7rem 1.5rem", "font-size": "0.85rem" }}>
            Explore Career Journey ↓
          </a>
          <button
            class="btn btn-secondary"
            style={{ padding: "0.7rem 1.5rem", "font-size": "0.85rem" }}
            onClick={() => (window as any).downloadResume?.()}
            aria-label="Print/Export Resume"
          >
            Download Executive PDF
          </button>
        </div>

        <div class="hero-metrics-grid" style={{ "grid-template-columns": "repeat(4, 1fr)" }}>
          <div class="metric-pill" data-testid="stat-years">
            <div class="metric-value">16+</div>
            <div class="metric-label">Years Exp</div>
          </div>
          <div class="metric-pill" data-testid="stat-team">
            <div class="metric-value">12+</div>
            <div class="metric-label">SDE Team Size</div>
          </div>
          <div class="metric-pill" data-testid="stat-scale">
            <div class="metric-value">3+ Yrs</div>
            <div class="metric-label">Managing Distributed Systems</div>
          </div>
          <div class="metric-pill" data-testid="stat-platform">
            <div class="metric-value">Security & Search</div>
            <div class="metric-label">Core Platform Expertise</div>
          </div>
        </div>
      </div>

      <div class="hero-photo-wrapper">
        <img
          src={avatarSvg}
          alt="Sachet J. Alva"
          class="hero-photo-img"
          id="profile-photo-img"
        />
      </div>
    </section>
  );
};

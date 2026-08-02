import { createSignal, For, Show } from "solid-js";
import { InteractiveTerminal } from "./InteractiveTerminal";
import { resumeData } from "../data/resumeData";

export function TypographyStudioWorkspace() {
  const [activeRoleIndex, setActiveRoleIndex] = createSignal<number>(0);
  const [projectCategory, setProjectCategory] = createSignal<"all" | "software" | "management">("all");

  const currentRole = () => resumeData.experience[activeRoleIndex()];

  const chronologicalExperience = () => {
    return resumeData.experience.map((exp, idx) => ({
      ...exp,
      originalIndex: idx
    })).reverse();
  };

  const formatTimelineRole = (role: string) => {
    if (role.toLowerCase().includes("development manager")) return "SDM";
    if (role.toLowerCase().includes("senior software development")) return "Sr. SDE";
    if (role.toLowerCase().includes("specialist software")) return "Specialist SDE";
    return role;
  };

  const filteredProjects = () => {
    const cat = projectCategory();
    if (cat === "all") return resumeData.projects;
    return resumeData.projects.filter((p) => p.category === cat || (cat === "software" && p.category === "cloud"));
  };

  return (
    <main class="container" style={{ "max-width": "1140px", margin: "0 auto", "padding-top": "6rem" }} data-testid="interactive-view-container">
      {/* ------------------------------------------------------------------
          SECTION 01: EXECUTIVE COMMAND HERO
          ------------------------------------------------------------------ */}
      <section class="swiss-panel" id="overview" data-testid="scene-hero" style={{ margin: "0 auto 3.5rem auto", width: "100%" }}>
        <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", "justify-content": "space-between", "align-items": "center", "flex-wrap": "wrap", gap: "1rem", "border-bottom": "1px solid #e2e8f0", "padding-bottom": "1rem" }}>
            <span class="mono-tag">01 // PROFILE</span>
            <span class="mono-tag" style={{ background: "#e0f2fe", color: "#0284c7", border: "1px solid #bae6fd" }}>
              BENGALURU, INDIA
            </span>
          </div>

          <h1 class="hero-name" style={{ "font-size": "clamp(2.5rem, 6vw, 4.5rem)", "font-weight": "900", "letter-spacing": "-0.04em", margin: 0, color: "#0f172a", "text-transform": "uppercase" }}>
            Sachet Alva
          </h1>

          <div style={{ "font-size": "1.35rem", "font-weight": "800", color: "#0284c7", "font-family": "monospace" }}>
            <span>{resumeData.title}</span> // 16+ YEARS OF SOFTWARE ENGINEERING EXPERIENCE
          </div>

          <p style={{ "font-size": "1.05rem", color: "#475569", "line-height": "1.7", "max-width": "840px", margin: 0 }}>
            {resumeData.summary}
          </p>

          <div class="hero-metrics-grid" style={{ "margin-top": "0.5rem" }}>
            <div class="metric-pill" data-testid="stat-years">
              <div class="metric-value">16+ Yrs</div>
              <div class="metric-label">Software Engineering</div>
            </div>
            <div class="metric-pill" data-testid="stat-team">
              <div class="metric-value">12+ SDEs</div>
              <div class="metric-label">Team Size</div>
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

          <div style={{ display: "flex", gap: "1rem", "margin-top": "1rem", "flex-wrap": "wrap" }}>
            <button class="btn btn-primary" onClick={() => (window as any).downloadResume?.()} style={{ padding: "0.85rem 2.25rem", "font-size": "1rem" }}>
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 02: CLI TERMINAL
          ------------------------------------------------------------------ */}
      <section class="swiss-panel" id="terminal" data-testid="scene-monitors" style={{ margin: "0 auto 3.5rem auto", width: "100%" }}>
        <div style={{ "margin-bottom": "2rem" }}>
          <span class="mono-tag" style={{ "margin-bottom": "0.75rem" }}>02 // CLI CONSOLE</span>
          <h2 class="section-main-heading">Interactive Resume Terminal</h2>
          <p class="section-subtext">
            Type standard terminal commands (e.g. 'whoami', 'ls -la', 'cat bio.txt') to explore my professional background in a simulated shell.
          </p>
        </div>

        <InteractiveTerminal />
      </section>

      {/* ------------------------------------------------------------------
          SECTION 03: CAREER TIMELINE
          ------------------------------------------------------------------ */}
      <section class="swiss-panel" id="odyssey" data-testid="scene-whiteboard" style={{ margin: "0 auto 3.5rem auto", width: "100%" }}>
        <div style={{ "margin-bottom": "1.5rem" }}>
          <span class="mono-tag" style={{ "margin-bottom": "0.75rem" }}>03 // CAREER TIMELINE</span>
          <h2 class="section-main-heading">Professional Progression</h2>
          <p class="section-subtext">
            Select a career milestone node to inspect technical contributions and impact.
          </p>
        </div>

        {/* Redesigned Career Timeline Scrubber */}
        <div class="timeline-desktop-scrubber" style={{
          position: "relative",
          width: "100%",
          height: "260px",
          "margin-bottom": "2.5rem",
          "overflow-x": "auto",
          "scrollbar-width": "thin",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          padding: "0 40px"
        }}>
          {/* The main horizontal track line — gradient follows active node */}
          <div style={{
            position: "absolute",
            left: "60px",
            right: "60px",
            height: "4px",
            background: (() => {
              const total = chronologicalExperience().length;
              const activeChronoIdx = chronologicalExperience().findIndex(e => e.originalIndex === activeRoleIndex());
              const pct = total > 1 ? (activeChronoIdx / (total - 1)) * 100 : 50;
              return `linear-gradient(90deg, #cbd5e1 0%, #cbd5e1 ${Math.max(0, pct - 12)}%, #0284c7 ${pct}%, #cbd5e1 ${Math.min(100, pct + 12)}%, #cbd5e1 100%)`;
            })(),
            top: "130px",
            transform: "translateY(-50%)",
            "z-index": 0,
            transition: "background 0.4s ease"
          }} />

          <For each={chronologicalExperience()}>
            {(exp, idx) => {
              const isEven = () => idx() % 2 === 0;
              const isActive = () => activeRoleIndex() === exp.originalIndex;
              const testId = `timeline-node-${exp.company.toLowerCase()}-${exp.originalIndex}`;
              const startDate = exp.duration.split(" – ")[0];
              const simplifiedRole = formatTimelineRole(exp.role);
              const simplifiedCompany = exp.company
                .replace("Amazon Web Services (AWS)", "AWS")
                .replace("Wipro Technologies", "Wipro")
                .replace("Nokia Networks", "Nokia")
                .replace("Alcatel Lucent", "Alcatel");

              return (
                <button
                  onClick={() => setActiveRoleIndex(exp.originalIndex)}
                  data-testid={testId}
                  class="timeline-node-button"
                >
                  {/* Alternating branch annotation container */}
                  <Show
                    when={isEven()}
                    fallback={
                      /* BELOW the line (odd indexes) */
                      <div style={{
                        position: "absolute",
                        top: "130px",
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        width: "180px"
                      }}>
                        <div class="timeline-connector-line" style={{
                          height: "35px",
                          background: isActive() ? "#0284c7" : "transparent",
                          "border-left": isActive() ? "2px solid #0284c7" : "2px dashed #cbd5e1"
                        }} />
                        
                        <div style={{ "margin-top": "0.5rem", "text-align": "center" }}>
                          <div class="timeline-text-label" style={{
                            "font-size": "0.85rem",
                            "font-weight": "800",
                            color: isActive() ? "#0284c7" : "#1e293b"
                          }}>
                            {simplifiedRole}, {simplifiedCompany}
                          </div>
                          <div class="timeline-text-label" style={{
                            "font-size": "0.75rem",
                            "font-weight": "600",
                            color: isActive() ? "#0284c7" : "#64748b",
                            "margin-top": "0.15rem"
                          }}>
                            {startDate}
                          </div>
                        </div>
                      </div>
                    }
                  >
                    {/* ABOVE the line (even indexes) */}
                    <div style={{
                      position: "absolute",
                      bottom: "130px",
                      display: "flex",
                      "flex-direction": "column",
                      "align-items": "center",
                      width: "180px"
                    }}>
                      <div style={{ "margin-bottom": "0.5rem", "text-align": "center" }}>
                        <div class="timeline-text-label" style={{
                          "font-size": "0.85rem",
                          "font-weight": "800",
                          color: isActive() ? "#0284c7" : "#1e293b"
                        }}>
                          {simplifiedRole}, {simplifiedCompany}
                        </div>
                        <div class="timeline-text-label" style={{
                          "font-size": "0.75rem",
                          "font-weight": "600",
                          color: isActive() ? "#0284c7" : "#64748b",
                          "margin-top": "0.15rem"
                        }}>
                          {startDate}
                        </div>
                      </div>

                      <div class="timeline-connector-line" style={{
                        height: "35px",
                        background: isActive() ? "#0284c7" : "transparent",
                        "border-left": isActive() ? "2px solid #0284c7" : "2px dashed #cbd5e1"
                      }} />
                    </div>
                  </Show>

                  {/* Point/Dot on the track line */}
                  <div class="timeline-dot-marker" style={{
                    width: isActive() ? "22px" : "14px",
                    height: isActive() ? "22px" : "14px",
                    background: isActive() ? "#0284c7" : "#ffffff",
                    border: isActive() ? "5px solid #e0f2fe" : "3px solid #cbd5e1",
                    "box-shadow": isActive() ? "0 0 10px rgba(2, 132, 199, 0.4)" : "none"
                  }} />
                </button>
              );
            }}
          </For>
        </div>

        {/* Mobile-Friendly Vertical Timeline Scrubber */}
        <div class="mobile-timeline-scrubber">
          <div class="vertical-timeline-line" />
          <For each={chronologicalExperience()}>
            {(exp) => {
              const isActive = () => activeRoleIndex() === exp.originalIndex;
              const startDate = exp.duration.split(" – ")[0];
              const simplifiedRole = formatTimelineRole(exp.role);
              const simplifiedCompany = exp.company
                .replace("Amazon Web Services (AWS)", "AWS")
                .replace("Wipro Technologies", "Wipro")
                .replace("Nokia Networks", "Nokia")
                .replace("Alcatel Lucent", "Alcatel");
              
              return (
                <button
                  onClick={() => setActiveRoleIndex(exp.originalIndex)}
                  class={`mobile-timeline-node ${isActive() ? "active" : ""}`}
                  data-testid={`mobile-timeline-node-${exp.company.toLowerCase()}-${exp.originalIndex}`}
                >
                  <div class="mobile-timeline-dot" />
                  <div class="mobile-timeline-info">
                    <span class="mobile-timeline-date">{exp.duration}</span>
                    <span class="mobile-timeline-company-role">
                      <strong>{simplifiedCompany}</strong> — {simplifiedRole}
                    </span>
                  </div>
                </button>
              );
            }}
          </For>
        </div>

        {/* Active Role Card */}
        <div style={{ background: "#f8fafc", padding: "2rem", "border-radius": "8px", border: "1px solid #cbd5e1" }}>
          <div style={{ display: "flex", "justify-content": "space-between", "align-items": "flex-start", "flex-wrap": "wrap", gap: "1rem" }}>
            <div>
              <span class="mono-tag" style={{ background: "#0284c7", color: "#ffffff", border: "none" }}>
                {currentRole().duration}
              </span>
              <h3 data-testid="timeline-active-role" style={{ "font-size": "1.65rem", "font-weight": "900", color: "#0f172a", margin: "0.5rem 0 0.25rem 0", "text-transform": "uppercase" }}>
                {currentRole().role}
              </h3>
              <div style={{ "font-size": "1.1rem", "font-weight": "800", color: "#0d9488", "font-family": "monospace" }}>
                ORGANIZATION: {currentRole().company}
              </div>
            </div>
          </div>

          <p style={{ color: "#334155", margin: "1.25rem 0", "line-height": "1.7", "font-size": "1rem" }}>
            {currentRole().summary}
          </p>

          <div style={{ "margin-top": "1.25rem" }}>
            <h4 style={{ "font-size": "0.8rem", "font-weight": "800", color: "#64748b", "text-transform": "uppercase", "letter-spacing": "0.08em", "margin-bottom": "0.75rem", "font-family": "monospace" }}>
              // TECHNICAL IMPACT & BULLETS
            </h4>
            <ul style={{ "padding-left": "1.25rem", margin: 0 }}>
              <For each={currentRole().bullets}>
                {(bullet) => (
                  <li style={{ color: "#334155", "margin-bottom": "0.6rem", "line-height": "1.6" }}>
                    {bullet}
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 04: PROJECTS
          ------------------------------------------------------------------ */}
      <section class="swiss-panel" id="projects" data-testid="scene-projects" style={{ margin: "0 auto 3.5rem auto", width: "100%" }}>
        <div style={{ "margin-bottom": "1.5rem" }}>
          <span class="mono-tag" style={{ "margin-bottom": "0.75rem" }}>04 // PROJECTS</span>
          <h2 class="section-main-heading">Projects</h2>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", margin: "1rem 0 2rem 0", "flex-wrap": "wrap" }}>
          <button
            class={`switcher-btn ${projectCategory() === "all" ? "active" : ""}`}
            onClick={() => setProjectCategory("all")}
          >
            All ({resumeData.projects.length})
          </button>
          <button
            class={`switcher-btn ${projectCategory() === "software" ? "active" : ""}`}
            onClick={() => setProjectCategory("software")}
            aria-label="Show software projects"
          >
            Software Engineering
          </button>
          <button
            class={`switcher-btn ${projectCategory() === "management" ? "active" : ""}`}
            onClick={() => setProjectCategory("management")}
            aria-label="Show management projects"
          >
            Management & Ops
          </button>
        </div>

        <div class="projects-grid">
          <For each={filteredProjects()}>
            {(project) => (
              <div
                class="swiss-panel"
                style={{ padding: "1.75rem" }}
                data-testid={`project-card-${project.title.toLowerCase().replace(/ /g, "-")}`}
              >
                <span class="mono-tag" style={{ color: project.category === "management" ? "#15803d" : "#0284c7" }}>
                  // {project.category === "management" ? "MANAGEMENT" : project.category === "cloud" ? "CLOUD" : "SOFTWARE"}
                </span>

                <h3 style={{ "font-size": "1.25rem", "font-weight": "800", margin: "0.75rem 0 0.5rem 0", color: "#0f172a" }}>
                  {project.title}
                </h3>

                <p style={{ "font-size": "0.95rem", color: "#475569", "line-height": "1.6", "margin-bottom": "1.25rem" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
                  <For each={project.tech}>
                    {(t) => <span class="mono-tag">{t}</span>}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 05: CONNECT
          ------------------------------------------------------------------ */}
      <section class="swiss-panel" id="contact" data-testid="scene-contact" style={{ margin: "0 auto", width: "100%", background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)" }}>
        <div style={{ "max-width": "680px", margin: "0 auto", "text-align": "center" }}>
          <span class="mono-tag" style={{ "margin-bottom": "0.75rem" }}>05 // CONNECT</span>
          <h2 class="section-main-heading" style={{ "font-size": "2.5rem", "margin-bottom": "0.5rem" }}>
            Connect
          </h2>
          <p style={{ color: "#475569", "line-height": "1.7", "margin-bottom": "2rem", "font-size": "1.05rem" }}>
            Connect with me on LinkedIn to chat, collaborate, or share ideas.
          </p>

          <div style={{ display: "flex", "flex-wrap": "wrap", gap: "1.25rem", "justify-content": "center", "margin-bottom": "1.5rem" }}>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" class="btn btn-primary" style={{ padding: "0.85rem 2rem", "font-size": "1rem" }}>
              LinkedIn Profile
            </a>
          </div>

          <div style={{ "font-size": "0.9rem", color: "#64748b", "font-family": "monospace" }}>
            LOCATION: Bengaluru, Karnataka, India
          </div>
        </div>
      </section>
    </main>
  );
}

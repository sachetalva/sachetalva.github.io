import { createSignal, createEffect, Show } from "solid-js";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StudioBackground2D } from "./components/StudioBackground2D";
import { TypographyStudioWorkspace } from "./components/TypographyStudioWorkspace";
import { RotatingNavDial } from "./components/RotatingNavDial";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { resumeData } from "./data/resumeData";

function App() {
  const [theme, setTheme] = createSignal<"light" | "dark">("light");
  const [viewMode, setViewMode] = createSignal<"interactive" | "paper">("interactive");

  createEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("resume-theme", "light");

    (window as any).downloadResume = () => {
      const prevMode = viewMode();
      if (prevMode !== "paper") {
        setViewMode("paper");
      }
      setTimeout(() => {
        window.print();
        if (prevMode !== "paper") {
          setViewMode(prevMode);
        }
      }, 150);
    };
  });

  return (
    <>
      <Header
        theme={theme()}
        setTheme={setTheme}
        viewMode={viewMode()}
        setViewMode={setViewMode}
      />

      <Show
        when={viewMode() === "interactive"}
        fallback={
          <div class="resume-paper" data-testid="paper-view-container">
            {/* SCREEN-ONLY VIEW OF CLASSIC RESUME (Original 3-Row Layout) */}
            <div class="paper-screen-only">
              {/* Paper View Header */}
              <div class="paper-header">
                <div class="header-identity">
                  <h1>{resumeData.name}</h1>
                  <span class="logo-subtitle">{resumeData.title}</span>
                </div>
                <div class="header-nav-box">
                  <div class="header-contact-info">
                    <div class="contact-info-item">
                      <span class="info-label">Location</span>
                      <span class="info-value">Bengaluru, Karnataka, India</span>
                    </div>
                    <div class="contact-info-item">
                      <span class="info-label">LinkedIn</span>
                      <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" class="info-value">linkedin.com/in/sachetalva/</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 1 */}
              <div class="paper-row paper-row-top">
                <Hero isPaperMode={true} />
                <Experience mode="all-full" />
              </div>

              {/* Row 2 */}
              <div class="paper-row paper-row-middle">
                <Skills mode="full" />
                <div class="paper-cell cell-education" id="education">
                  <h2 class="cell-title">Education</h2>
                  <div class="education-content">
                    <div class="edu-item">
                      <h3>B.E. Computer Science</h3>
                      <span class="edu-school">Anjuman Engineering College, VTU</span>
                      <span class="edu-year">2004 – 2008</span>
                    </div>
                    <div class="edu-item" style={{ "margin-top": "1.5rem" }}>
                      <h3>Pre-University (PCMC)</h3>
                      <span class="edu-school">St. Aloysius PU College, Mangalore</span>
                      <span class="edu-year">2002 – 2004</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div class="paper-row paper-row-bottom">
                <Projects />
                <Contact mode="full" />
              </div>
            </div>

            {/* PRINT-ONLY CONCISE PDF LAYOUT */}
            <div class="paper-print-only">
              <div class="paper-header">
                <div class="header-identity">
                  <h1>{resumeData.name}</h1>
                  <span class="logo-subtitle">{resumeData.title}</span>
                </div>
                <div class="header-nav-box">
                  <div class="header-contact-info">
                    <div class="contact-info-item">
                      <span class="info-label">Location</span>
                      <span class="info-value">Bengaluru, Karnataka, India</span>
                    </div>
                    <div class="contact-info-item">
                      <span class="info-label">LinkedIn</span>
                      <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" class="info-value">linkedin.com/in/sachetalva/</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="paper-print-layout">
                {/* Left Column containing Page 1 & Page 2 content */}
                <div class="print-left-col">
                  {/* Page 1 Left Items */}
                  <div class="print-p1-left">
                    <Hero isPaperMode={true} isPrint={true} />
                    <div style={{ "margin-top": "1.5rem" }}>
                      <Skills mode="compressed" />
                    </div>
                  </div>
                  
                  {/* Page 2 Left Items */}
                  <div class="print-p2-left" style={{ "page-break-before": "always", "break-before": "page", "margin-top": "2rem" }}>
                    <div class="cell-education" id="education" style={{ "margin-bottom": "2rem" }}>
                      <h2 class="cell-title">Education</h2>
                      <div class="education-content">
                        <div class="edu-item">
                          <h3>B.E. Computer Science</h3>
                          <span class="edu-school">Anjuman Engineering College, VTU</span>
                          <span class="edu-year">2004 – 2008</span>
                        </div>
                        <div class="edu-item" style={{ "margin-top": "1rem" }}>
                          <h3>Pre-University (PCMC)</h3>
                          <span class="edu-school">St. Aloysius PU College, Mangalore</span>
                          <span class="edu-year">2002 – 2004</span>
                        </div>
                      </div>
                    </div>
                    <Contact mode="compressed" />
                  </div>
                </div>

                {/* Right Column containing continuous Experience */}
                <div class="print-right-col">
                  <Experience mode="print-concise" />
                </div>
              </div>
            </div>
          </div>
        }
      >
        {/* Ambient Minimalist Studio Background */}
        <StudioBackground2D />

        {/* Rotating Interactive Navigation Dial (Bottom Right) */}
        <RotatingNavDial />

        {/* Main Interactive View Typography Workspace */}
        <TypographyStudioWorkspace />
      </Show>

      <footer class="footer" style={{ position: "relative", "z-index": "10", background: "rgba(255, 255, 255, 0.9)" }}>
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

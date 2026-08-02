import { createSignal, Show } from "solid-js";

interface HeaderProps {
  viewMode?: "interactive" | "paper";
  setViewMode?: (mode: "interactive" | "paper") => void;
  theme?: "light" | "dark";
  setTheme?: (theme: "light" | "dark") => void;
}

export const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <header class="header">
      <div class="container header-inner" style={{ "max-width": "1140px" }}>
        <a href="#overview" class="logo" style={{ "font-family": "monospace", "font-weight": "800" }}>
          SACHET ALVA // SDM
        </a>

        <nav class="nav">
          <a href="#overview" class="nav-link" style={{ "font-family": "monospace" }}>
            [01] PROFILE
          </a>
          <a href="#terminal" class="nav-link" style={{ "font-family": "monospace" }}>
            [02] CLI CONSOLE
          </a>
          <a href="#odyssey" class="nav-link" style={{ "font-family": "monospace" }}>
            [03] CAREER TIMELINE
          </a>
          <a href="#projects" class="nav-link" style={{ "font-family": "monospace" }}>
            [04] PROJECTS
          </a>
          <a href="#contact" class="nav-link" style={{ "font-family": "monospace" }}>
            [05] CONNECT
          </a>
        </nav>

        <div class="controls-group" style={{ display: "flex", "align-items": "center", gap: "0.75rem" }}>
          {props.setViewMode && (
            <div class="view-switcher-container" data-testid="view-mode-switcher">
              <button
                class={`switcher-btn ${props.viewMode === "interactive" ? "active" : ""}`}
                onClick={() => props.setViewMode?.("interactive")}
                data-testid="mode-btn-interactive"
              >
                Interactive View
              </button>
              <button
                class={`switcher-btn ${props.viewMode === "paper" ? "active" : ""}`}
                onClick={() => props.setViewMode?.("paper")}
                data-testid="mode-btn-paper"
              >
                Classic Resume
              </button>
            </div>
          )}

          {props.setTheme && (
            <button
              class="theme-toggle-btn"
              id="theme-toggler"
              onClick={() => props.setTheme?.("light")}
              aria-label="Toggle Theme"
              style={{ display: "none" }}
            />
          )}
        </div>

        {/* Mobile Hamburger toggle button */}
        <button
          class="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen())}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          <Show when={isOpen()} fallback={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          }>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Show>
        </button>
      </div>

      {/* Mobile navigation overlay */}
      <Show when={isOpen()}>
        <div class="mobile-menu-overlay" data-testid="mobile-menu-overlay">
          <nav class="mobile-nav">
            <a href="#overview" class="mobile-nav-link" onClick={() => setIsOpen(false)}>
              [01] PROFILE
            </a>
            <a href="#terminal" class="mobile-nav-link" onClick={() => setIsOpen(false)}>
              [02] CLI CONSOLE
            </a>
            <a href="#odyssey" class="mobile-nav-link" onClick={() => setIsOpen(false)}>
              [03] CAREER TIMELINE
            </a>
            <a href="#projects" class="mobile-nav-link" onClick={() => setIsOpen(false)}>
              [04] PROJECTS
            </a>
            <a href="#contact" class="mobile-nav-link" onClick={() => setIsOpen(false)}>
              [05] CONNECT
            </a>
            
            {props.setViewMode && (
              <div class="mobile-view-switcher">
                <div class="view-switcher-container">
                  <button
                    class={`switcher-btn ${props.viewMode === "interactive" ? "active" : ""}`}
                    onClick={() => {
                      props.setViewMode?.("interactive");
                      setIsOpen(false);
                    }}
                    data-testid="mobile-mode-btn-interactive"
                  >
                    Interactive View
                  </button>
                  <button
                    class={`switcher-btn ${props.viewMode === "paper" ? "active" : ""}`}
                    onClick={() => {
                      props.setViewMode?.("paper");
                      setIsOpen(false);
                    }}
                    data-testid="mobile-mode-btn-paper"
                  >
                    Classic Resume
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </Show>
    </header>
  );
};


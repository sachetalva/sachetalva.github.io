interface HeaderProps {
  viewMode?: "interactive" | "paper";
  setViewMode?: (mode: "interactive" | "paper") => void;
  theme?: "light" | "dark";
  setTheme?: (theme: "light" | "dark") => void;
}

export const Header = (props: HeaderProps) => {
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
      </div>
    </header>
  );
};

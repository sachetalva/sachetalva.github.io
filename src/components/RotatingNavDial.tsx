import { onMount, onCleanup, createSignal } from "solid-js";
import { Home, Terminal, Briefcase, Code, Mail } from "./Icons";

export function RotatingNavDial() {
  const [activeSection, setActiveSection] = createSignal<number>(0);

  const sections = [
    { id: "overview", num: "01", name: "PROFILE", icon: Home },
    { id: "terminal", num: "02", name: "CLI CONSOLE", icon: Terminal },
    { id: "odyssey", num: "03", name: "CAREER TIMELINE", icon: Briefcase },
    { id: "projects", num: "04", name: "PROJECTS", icon: Code },
    { id: "contact", num: "05", name: "CONNECT", icon: Mail }
  ];

  const jumpToSection = (index: number) => {
    setActiveSection(index);
    const targetEl = document.getElementById(sections[index].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      const key = parseInt(e.key, 10);
      if (key >= 1 && key <= 5) {
        jumpToSection(key - 1);
      }
    };

    const handleScroll = () => {
      let currentActive = 0;
      sections.forEach((s, idx) => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            currentActive = idx;
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    onCleanup(() => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <aside
      class="neumorphic-dial-widget"
      data-testid="rotating-nav-dial"
      aria-label="Neumorphic Rotary Navigation Dial"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        "z-index": 200,
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        gap: "0.5rem"
      }}
    >
      {/* Active Section Label Pill */}
      <div
        style={{
          background: "#0f172a",
          color: "#38bdf8",
          border: "1px solid #334155",
          padding: "4px 12px",
          "border-radius": "9999px",
          "font-size": "0.72rem",
          "font-family": "monospace",
          "font-weight": "800",
          "box-shadow": "0 4px 12px rgba(15, 23, 42, 0.15)",
          "letter-spacing": "0.05em"
        }}
      >
        [{sections[activeSection()].num}] {sections[activeSection()].name}
      </div>

      {/* Neumorphic Ceramic Outer Housing Disk (160px x 160px, Center = 80, 80) */}
      <div
        style={{
          position: "relative",
          width: "160px",
          height: "160px",
          "border-radius": "50%",
          background: "#f1f5f9",
          "box-shadow": "-6px -6px 16px #ffffff, 6px 6px 16px rgba(15, 23, 42, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          display: "flex",
          "align-items": "center",
          "justify-content": "center"
        }}
      >
        {/* Recessed Concentric Channel Ring (100px) */}
        <div
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            "border-radius": "50%",
            background: "#e2e8f0",
            "box-shadow": "inset -3px -3px 8px #ffffff, inset 3px 3px 8px rgba(15, 23, 42, 0.12)",
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
          }}
        >
          {/* Luminous Active Glowing Blue Arc Overlay (Centered around 12 o'clock, rotated by activeSection * 72deg) */}
          <svg
            width="160"
            height="160"
            style={{
              position: "absolute",
              top: "-30px",
              left: "-30px",
              transform: `rotate(${activeSection() * 72}deg)`,
              "transform-origin": "80px 80px",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              "pointer-events": "none"
            }}
          >
            {/* Luminous Arc (Radius = 50px, Center = 80,80; Spans 60° centered at 12 o'clock: -30° to +30°) */}
            <path
              d="M 55 36.7 A 50 50 0 0 1 105 36.7"
              fill="none"
              stroke="#0284c7"
              stroke-width="6"
              stroke-linecap="round"
              style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
            />
          </svg>

          {/* Elevated Tactile Center Knob (72px) */}
          <div
            style={{
              position: "relative",
              width: "72px",
              height: "72px",
              "border-radius": "50%",
              background: "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
              "box-shadow": "-4px -4px 10px #ffffff, 4px 4px 10px rgba(15, 23, 42, 0.1)",
              border: "1px solid #cbd5e1",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              cursor: "pointer",
              "z-index": 5
            }}
            onClick={() => jumpToSection((activeSection() + 1) % sections.length)}
            title="Click to rotate knob to next section (Keys 1-5)"
          >
            {/* ROTATING ENTIRE KNOB & MARKER DASH (Centered at 12 o'clock, rotated by activeSection * 72deg) */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                "border-radius": "50%",
                transform: `rotate(${activeSection() * 72}deg)`,
                "transform-origin": "50% 50%",
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
            >
              {/* Pill Dash Indicator Line pointing straight up at 12 o'clock */}
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "14px",
                  background: "#0284c7",
                  "border-radius": "2px",
                  "box-shadow": "0 0 8px #38bdf8"
                }}
              />
            </div>

            {/* Inner Cap Code Text */}
            <div
              style={{
                width: "28px",
                height: "28px",
                "border-radius": "50%",
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                color: "#0284c7",
                "font-size": "0.65rem",
                "font-weight": "900",
                "font-family": "monospace",
                "z-index": 6
              }}
            >
              0{activeSection() + 1}
            </div>
          </div>
        </div>

        {/* 5 Outer Perimeter Radial SVG Icon Buttons (Perfectly Centered in Ring Gap at Radius = 65px) */}
        {sections.map((s, idx) => {
          const angleDeg = idx * 72 - 90; // Start 0° at top (12 o'clock)
          const angleRad = (angleDeg * Math.PI) / 180;
          const radius = 65; // Midpoint of outer ring gap (50px channel to 80px outer edge)
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          const isActive = activeSection() === idx;
          const IconComp = s.icon;

          return (
            <button
              onClick={() => jumpToSection(idx)}
              data-testid={`dial-node-${idx + 1}`}
              title={`[${s.num}] ${s.name}`}
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
                width: "24px",
                height: "24px",
                "border-radius": "50%",
                background: "transparent",
                color: isActive ? "#0284c7" : "#94a3b8",
                border: "none",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
                "z-index": 10
              }}
            >
              <IconComp size={16} />
            </button>
          );
        })}
      </div>
    </aside>
  );
}

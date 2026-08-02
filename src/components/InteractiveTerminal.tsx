import { createSignal, For } from "solid-js";
import { resumeData } from "../data/resumeData";

export function InteractiveTerminal() {
  const [commandInput, setCommandInput] = createSignal<string>("");
  const [history, setHistory] = createSignal<{ cmd: string; output: string }[]>([
    {
      cmd: "whoami",
      output: `Sachet Alva — Software Development Manager (16+ Years Software Engineering Experience)`
    }
  ]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    let out = "";

    if (cmd === "help" || cmd === "man") {
      out = `AVAILABLE DIRECTIVES:
  whoami          -> Quick profile info
  ls -la          -> List files in directory
  cat bio.txt     -> View short professional bio
  cat skills.json -> Show key tech and leadership skills
  cat achievements.log -> View career highlights & impact
  cat contact.txt -> Show contact info & LinkedIn
  sh easter_egg.sh -> Execute the secret shell script
  clear           -> Clear terminal console`;
    } else if (cmd === "whoami") {
      out = `USER: Sachet Alva
ROLE: Software Development Manager
EXPERIENCE: 16+ Years (SDE / SDM)
LOCATION: Bengaluru, Karnataka, India
LINKEDIN: ${resumeData.linkedin}`;
    } else if (cmd === "ls -la" || cmd === "ls") {
      out = `drwxr-xr-x  sachet  staff  4096 Aug 02 15:20 .
drwxr-xr-x  sachet  staff  4096 Aug 02 15:20 ..
-rw-r--r--  sachet  staff  1024 Aug 02 15:20 bio.txt
-rw-r--r--  sachet  staff  2048 Aug 02 15:20 skills.json
-rw-r--r--  sachet  staff  3072 Aug 02 15:20 achievements.log
-rw-r--r--  sachet  staff   512 Aug 02 15:20 contact.txt
-rwxr-xr-x  sachet  staff   256 Aug 02 15:20 easter_egg.sh`;
    } else if (cmd === "uname -a") {
      out = `SolidJS-Mock-Shell 1.0.0-node-x86_64 Webkit Browser Console`;
    } else if (cmd === "cat bio.txt" || cmd === "cat bio" || cmd === "cat experience.log" || cmd === "cat experience") {
      out = `PROFESSIONAL BIO:
- Software Development Manager with 16+ years of software engineering and leadership experience.
- Specialized in driving engineering excellence, building and scaling high-performing distributed teams, and delivering complex system integrations.
- Currently leading an engineering organization of 12+ SDEs and interns across 4 service charters.`;
    } else if (cmd === "cat skills.json" || cmd === "cat skills" || cmd === "cat architecture.json" || cmd === "cat architecture") {
      out = `{
  "engineering_leadership": [
    "Team Building & Coaching",
    "Performance Management",
    "Hiring & Talent Acquisition",
    "Agile Delivery & OKRs"
  ],
  "languages_and_protocols": [
    "Java",
    "Golang",
    "Python",
    "C / C++"
  ],
  "databases_and_tools": [
    "PostgreSQL",
    "DynamoDB",
    "OpenSearch"
  ]
}`;
    } else if (cmd === "cat achievements.log" || cmd === "cat achievements") {
      out = `AWS SDM ACHIEVEMENTS:
- Scaled and led a team of 12+ SDEs and 2 interns across 4 service charters.
- Architected native deployment for optional plugins, reducing build/deploy time from 8 hours to 30 mins.
- Delivered custom plugin support (Analyzer, Script, Ingest, Search) to unblock enterprise migrations.
- Governed encryption at rest for OpenSearch Serverless and custom/third-party plugin integrations.
- Managed operational support handling 200+ tickets annually with structured RCA documentation.

AWS SR. SDE ACHIEVEMENTS:
- Pioneered first formalized API definitions for OpenSearch, enabling automated client & docs generation.
- Designed and built access, encryption, and network policy engines for OpenSearch Serverless.
- Led migration of unencrypted legacy domains to encryption-at-rest.

NOKIA & WIPRO ACHIEVEMENTS:
- Designed and developed AirScale Wi-Fi authentication/session modules using FreeRADIUS.
- Integrated GTest framework in legacy C++ codebase, winning Nokia's 'Recognize Excellent Contribution' award.
- Earned Wipro 'Spot Award' from Alcatel Lucent for resolving critical telecommunication code blockers.`;
    } else if (cmd === "cat contact.txt" || cmd === "cat contact") {
      out = `CONTACT DETAILS:
- LinkedIn: ${resumeData.linkedin}
- Website:  https://sachetalva.github.io
- Location: Bengaluru, Karnataka, India`;
    } else if (cmd === "sh easter_egg.sh" || cmd === "bash easter_egg.sh" || cmd === "./easter_egg.sh" || cmd === "cat easter_egg.sh" || cmd === "easter_egg.sh") {
      out = `
==================================================
           ANTIGRAVITY INITIALIZED                
==================================================
  __ _ _ __ | |_(_) __ _ _ __ __ ___   (_) |_ _   
 / _\` | '_ \\| __| |/ _\` | '__/ _\` \\ \\ / / | __| |  
| (_| | | | | |_| | (_| | | | (_| |\\ V /| | |_| |  
 \\__,_|_| |_|\\__|_|\\__, |_|  \\__,_| \\_/ |_|\\__|_|  
                   |___/                          
- Mode: Hacker Console
- Terminal: Fully operational SolidJS Mock Shell
- Secret Quote: "Talk is cheap. Show me the code." - Linus Torvalds
- Tip: Type 'clear' to restore sanity.
==================================================`;
    } else if (cmd === "clear") {
      setHistory([]);
      setCommandInput("");
      return;
    } else {
      out = `zsh: command not found: '${rawCmd}'. Type 'help' or 'ls -la' to see available directives.`;
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output: out }]);
    setCommandInput("");
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (commandInput().trim()) {
      executeCommand(commandInput());
    }
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "#f8fafc",
        "border-radius": "12px",
        border: "1px solid #334155",
        "box-shadow": "0 20px 40px rgba(15, 23, 42, 0.2)",
        overflow: "hidden",
        "font-family": "monospace",
        width: "100%",
        margin: "0 auto"
      }}
      data-testid="interactive-terminal"
    >
      {/* Terminal Window Header Bar */}
      <div style={{ background: "#1e293b", padding: "10px 16px", display: "flex", "justify-content": "space-between", "align-items": "center", "flex-wrap": "wrap", gap: "10px" }}>
        <div style={{ display: "flex", gap: "8px", "align-items": "center" }}>
          <span style={{ width: "12px", height: "12px", "border-radius": "50%", background: "#ef4444" }} />
          <span style={{ width: "12px", height: "12px", "border-radius": "50%", background: "#eab308" }} />
          <span style={{ width: "12px", height: "12px", "border-radius": "50%", background: "#22c55e" }} />
          <span style={{ "font-size": "0.8rem", color: "#94a3b8", "margin-left": "10px", "font-weight": "700" }}>
            sachet@amazon-sys:~ (zsh)
          </span>
        </div>

        {/* Standard POSIX Command Chips */}
        <div style={{ display: "flex", gap: "6px", "flex-wrap": "wrap" }}>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("whoami")}
            style={{ "font-size": "0.7rem", padding: "2px 8px" }}
          >
            whoami
          </button>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("ls -la")}
            style={{ "font-size": "0.7rem", padding: "2px 8px" }}
          >
            ls -la
          </button>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("cat bio.txt")}
            style={{ "font-size": "0.7rem", padding: "2px 8px" }}
          >
            bio.txt
          </button>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("cat achievements.log")}
            style={{ "font-size": "0.7rem", padding: "2px 8px" }}
          >
            achievements.log
          </button>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("cat contact.txt")}
            style={{ "font-size": "0.7rem", padding: "2px 8px" }}
          >
            contact.txt
          </button>
          <button
            class="terminal-chip"
            onClick={() => executeCommand("sh easter_egg.sh")}
            style={{ "font-size": "0.7rem", padding: "2px 8px", background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", border: "1px solid rgba(34, 197, 94, 0.3)" }}
          >
            sh easter_egg.sh
          </button>
        </div>
      </div>

      {/* Terminal History Display */}
      <div style={{ padding: "1.5rem", "max-height": "320px", "overflow-y": "auto", "font-size": "0.85rem", "line-height": "1.6" }}>
        <For each={history()}>
          {(item) => (
            <div style={{ "margin-bottom": "1.25rem" }}>
              <div style={{ color: "#38bdf8" }}>
                <span style={{ color: "#34d399" }}>sachet@amazon-sys:~$</span> {item.cmd}
              </div>
              <pre style={{ color: "#cbd5e1", margin: "0.4rem 0 0 0", "white-space": "pre-wrap", "font-family": "monospace" }}>
                {item.output}
              </pre>
            </div>
          )}
        </For>

        {/* Live Input Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", "align-items": "center", gap: "8px", "margin-top": "0.75rem" }}>
          <span style={{ color: "#34d399", "font-weight": "bold" }}>sachet@amazon-sys:~$</span>
          <input
            type="text"
            value={commandInput()}
            onInput={(e) => setCommandInput(e.currentTarget.value)}
            placeholder="Type 'help', 'whoami', 'ls -la', or 'cat experience.log'..."
            style={{
              flex: 1,
              width: "100%",
              "min-width": "0",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#ffffff",
              "font-family": "monospace",
              "font-size": "0.85rem"
            }}
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}

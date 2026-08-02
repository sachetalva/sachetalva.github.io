import { For, Show } from "solid-js";
import { resumeData } from "../data/resumeData";

interface SkillsProps {
  mode?: "full" | "compressed";
}

export const Skills = (props: SkillsProps) => {
  const mode = () => props.mode || "full";

  return (
    <Show
      when={mode() === "compressed"}
      fallback={
        <div class="paper-cell skills-cell" id="skills">
          <h2 class="cell-title">Skills & Expertise</h2>
          
          <div class="skills-grid" id="skills-container" style={{ display: "grid", gap: "2rem" }}>
            <For each={resumeData.skills}>
              {(group) => (
                <div class="skills-category">
                  <h3 class="skills-category-title" style={{ "font-size": "0.9rem", "font-weight": "700", "margin-bottom": "1rem", color: "var(--text-primary)", "text-transform": "uppercase", "letter-spacing": "0.05em" }}>
                    {group.name}
                  </h3>
                  <div class="skills-tag-cloud" style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
                    <For each={group.skills}>
                      {(skill) => (
                        <span class="timeline-tag" style={{ "font-size": "0.78rem", padding: "0.3rem 0.6rem", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", "border-radius": "4px", color: "var(--text-secondary)" }}>
                          {skill.name}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      }
    >
      <div class="skills-cell-compressed" id="skills" style={{ padding: 0 }}>
        <h2 class="cell-title">Skills & Expertise</h2>
        
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem" }}>
          <For each={resumeData.skills}>
            {(group) => (
              <div>
                <strong style={{ "font-size": "0.78rem", "text-transform": "uppercase", color: "var(--text-primary)" }}>
                  {group.name}:
                </strong>{" "}
                <span style={{ "font-size": "0.78rem", color: "var(--text-secondary)" }}>
                  {group.skills.map(s => s.name).join(", ")}
                </span>
              </div>
            )}
          </For>
        </div>
      </div>
    </Show>
  );
};

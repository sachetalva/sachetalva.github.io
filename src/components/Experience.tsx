import { For, Show } from "solid-js";
import { resumeData } from "../data/resumeData";

interface ExperienceProps {
  mode?: "all-full" | "print-concise";
}

export const Experience = (props: ExperienceProps) => {
  const mode = () => props.mode || "all-full";

  return (
    <div class="paper-cell experience-cell" id="experience">
      <h2 class="cell-title">Work Experience</h2>
      <div class="experience-list" id="experience-timeline">
        <Show
          when={mode() === "print-concise"}
          fallback={
            <For each={resumeData.experience}>
              {(exp) => (
                <div class="exp-item" data-testid={`experience-${exp.company.toLowerCase()}`}>
                  <div class="exp-item-header">
                    <h3 class="exp-item-role">{exp.role}</h3>
                    <span class="exp-item-duration">{exp.duration}</span>
                  </div>
                  <div class="exp-item-company">{exp.company}</div>

                  <ul class="exp-item-bullets">
                    <li>{exp.summary}</li>
                    <For each={exp.bullets}>
                      {(bullet) => <li>{bullet}</li>}
                    </For>
                  </ul>

                  <div class="timeline-tags">
                    <For each={exp.tags}>
                      {(tag) => <span class="timeline-tag">{tag}</span>}
                    </For>
                  </div>
                </div>
              )}
            </For>
          }
        >
          {/* Key Work Experience */}
          <For each={resumeData.experience.filter(exp => 
            exp.company.toLowerCase().includes("aws") || 
            exp.company.toLowerCase().includes("amazon") || 
            exp.company.toLowerCase().includes("nokia")
          )}>
            {(exp) => {
              const maxBullets = exp.role.includes("Software Development Manager") ? 4 : exp.role.includes("Senior") ? 3 : 2;
              return (
                <div class="exp-item" data-testid={`experience-${exp.company.toLowerCase()}`}>
                  <div class="exp-item-header">
                    <h3 class="exp-item-role">{exp.role}</h3>
                    <span class="exp-item-duration">{exp.duration}</span>
                  </div>
                  <div class="exp-item-company">{exp.company}</div>

                  <ul class="exp-item-bullets">
                    <li>{exp.summary}</li>
                    <For each={exp.bullets.slice(0, maxBullets)}>
                      {(bullet) => <li>{bullet}</li>}
                    </For>
                  </ul>

                  <div class="timeline-tags">
                    <For each={exp.tags}>
                      {(tag) => <span class="timeline-tag">{tag}</span>}
                    </For>
                  </div>
                </div>
              );
            }}
          </For>

          {/* Sub Header for Previous Experience */}
          <div class="exp-item exp-item-previous-header" style={{ "page-break-inside": "avoid", "break-inside": "avoid", "margin-top": "2.5rem" }}>
            <h2 class="cell-title" style={{ "margin-bottom": "1.5rem" }}>Previous Experience</h2>
          </div>

          {/* Collapsed Previous Experience - Single-Line Summaries */}
          <div class="prev-exp-lines-container" style={{ "margin-top": "1rem", "padding-left": "0.5rem" }}>
            <For each={resumeData.experience.filter(exp => 
              exp.company.toLowerCase().includes("wipro") || 
              exp.company.toLowerCase().includes("merittrac")
            )}>
              {(exp) => (
                <div 
                  class="prev-exp-line-item" 
                  data-testid={`experience-${exp.company.toLowerCase()}`}
                  style={{ "font-size": "0.8rem", "margin-bottom": "0.6rem", "line-height": "1.4", color: "var(--text-secondary)" }}
                >
                  • <strong>{exp.role}</strong> at <strong>{exp.company}</strong> ({exp.duration})
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

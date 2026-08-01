import { createSignal, For, Show } from "solid-js";
import type { Project } from "../data/resumeData";
import { resumeData } from "../data/resumeData";
import { ExternalLink, Close } from "./Icons";

export const Projects = () => {
  const [filter, setFilter] = createSignal<"all" | "software" | "cloud" | "management">("all");
  const [selectedProject, setSelectedProject] = createSignal<Project | null>(null);

  const filteredProjects = () => {
    const activeFilter = filter();
    const allProj = resumeData.projects;
    if (activeFilter === "all") return allProj;
    return allProj.filter((p) => p.category === activeFilter);
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Disable scroll when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = ""; // Enable scroll
  };

  return (
    <div class="paper-cell projects-cell" id="projects">
      <div class="projects-header">
        <h2 class="cell-title">Projects</h2>
        
        <div class="projects-filter" id="project-filters">
          <button
            class={`filter-btn ${filter() === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            aria-label="Show all projects"
          >
            All
          </button>
          <button
            class={`filter-btn ${filter() === "management" ? "active" : ""}`}
            onClick={() => setFilter("management")}
            aria-label="Show management projects"
          >
            Mgt
          </button>
          <button
            class={`filter-btn ${filter() === "cloud" ? "active" : ""}`}
            onClick={() => setFilter("cloud")}
            aria-label="Show cloud projects"
          >
            Cloud
          </button>
          <button
            class={`filter-btn ${filter() === "software" ? "active" : ""}`}
            onClick={() => setFilter("software")}
            aria-label="Show software projects"
          >
            Soft
          </button>
        </div>
      </div>

      <div class="projects-grid" id="projects-grid">
        <For each={filteredProjects()}>
          {(project) => (
            <div
              class="project-card"
              data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleOpenModal(project)}
              style={{ cursor: "pointer" }}
            >
              <div class="project-meta">
                <span class="project-category">
                  {project.category === "management" ? "Management" : project.category === "cloud" ? "Cloud" : "Software"}
                </span>
                <h3 class="project-title">{project.title}</h3>
                <p class="project-desc">{project.description}</p>
                
                <div class="timeline-tags">
                  <For each={project.tech}>
                    {(tech) => <span class="timeline-tag">{tech}</span>}
                  </For>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Project Details Modal */}
      <Show when={selectedProject()}>
        {(proj) => (
          <div class="modal-overlay" onClick={handleCloseModal} id="project-modal">
            <div class="modal-content" onClick={(e) => e.stopPropagation()}>
              <button class="modal-close" onClick={handleCloseModal} aria-label="Close details">
                <Close size={20} />
              </button>
              
              <span class="project-category" style={{ display: "block", "margin-bottom": "0.5rem" }}>
                {proj().category === "management" ? "Management & Delivery" : proj().category === "cloud" ? "Cloud Architecture" : "Software Engineering"}
              </span>
              <h3 class="role-title" style={{ "margin-bottom": "1.5rem" }}>{proj().title}</h3>
              
              <div style={{ "margin-bottom": "1.5rem" }}>
                <h4 style={{ "font-size": "0.95rem", "margin-bottom": "0.5rem", "font-weight": "600" }}>Project Overview</h4>
                <p class="timeline-description" style={{ "font-size": "0.85rem" }}>{proj().longDescription}</p>
              </div>

              <div style={{ "margin-bottom": "1.5rem" }}>
                <h4 style={{ "font-size": "0.95rem", "margin-bottom": "0.5rem", "font-weight": "600" }}>Core Focus Areas</h4>
                <div class="timeline-tags">
                  <For each={proj().tech}>
                    {(tech) => <span class="timeline-tag" style={{ "font-size": "0.75rem", padding: "0.3rem 0.6rem" }}>{tech}</span>}
                  </For>
                </div>
              </div>

              <Show when={proj().links?.github || proj().links?.live}>
                <div class="project-links" style={{ "margin-top": "2rem", "border-top": "1px solid var(--border-color)", "padding-top": "1.25rem" }}>
                  <Show when={proj().links?.github}>
                    <a
                      href={proj().links?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-secondary"
                      style={{ padding: "0.45rem 1rem", "font-size": "0.8rem" }}
                    >
                      Repository <ExternalLink size={12} />
                    </a>
                  </Show>
                </div>
              </Show>
            </div>
          </div>
        )}
      </Show>
    </div>
  );
};

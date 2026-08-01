import { Show } from "solid-js";
import { Linkedin } from "./Icons";
import { resumeData } from "../data/resumeData";

interface ContactProps {
  mode?: "full" | "compressed";
}

export const Contact = (props: ContactProps) => {
  const mode = () => props.mode || "full";

  return (
    <Show
      when={mode() === "compressed"}
      fallback={
        /* ORIGINAL FULL ON-SCREEN CONNECT VIEW */
        <div class="paper-cell contact-cell" id="contact">
          <h2 class="cell-title">Connect</h2>
          
          <div class="contact-content-minimal">
            <div class="contact-item">
              <div class="contact-icon">
                <Linkedin size={16} />
              </div>
              <div>
                <div class="contact-label">LinkedIn</div>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" class="contact-value" id="contact-linkedin">
                  linkedin.com/in/sachetalva/
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* COMPRESSED PRINT CONNECT VIEW */}
      <div class="contact-cell-minimal" id="contact" style={{ padding: 0 }}>
        <h2 class="cell-title">Connect</h2>
        
        <div class="contact-content-minimal">
          <div class="contact-item">
            <div class="contact-icon">
              <Linkedin size={16} />
            </div>
            <div>
              <div class="contact-label">LinkedIn</div>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" class="contact-value" id="contact-linkedin">
                linkedin.com/in/sachetalva/
              </a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon" style={{ "font-size": "1rem", display: "flex", "align-items": "center", "justify-content": "center" }}>
              🌐
            </div>
            <div>
              <div class="contact-label">Website</div>
              <a href="https://sachetalva.github.io" target="_blank" rel="noopener noreferrer" class="contact-value" id="contact-website">
                sachetalva.github.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

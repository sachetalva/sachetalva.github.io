import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@solidjs/testing-library";
import App from "../App";
import { Header } from "../components/Header";
import { resumeData } from "../data/resumeData";

// Mock matchMedia for jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("Minimalist Typography Tech App Unit Tests", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders interactive view, rotating nav dial, and CLI terminal by default", () => {
    render(() => <App />);

    // Name & Title
    expect(screen.getAllByText(resumeData.name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(resumeData.title).length).toBeGreaterThan(0);

    // Enforces light theme
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    // Verify key interactive view sections & rotating dial
    expect(screen.getByTestId("interactive-view-container")).toBeDefined();
    expect(screen.getByTestId("rotating-nav-dial")).toBeDefined();
    expect(screen.getByTestId("interactive-terminal")).toBeDefined();
    expect(screen.getByTestId("scene-hero")).toBeDefined();
    expect(screen.getByTestId("scene-monitors")).toBeDefined();
    expect(screen.getByTestId("scene-whiteboard")).toBeDefined();
    expect(screen.getByTestId("scene-projects")).toBeDefined();
    expect(screen.getByTestId("scene-contact")).toBeDefined();

    // Verify stat cards
    expect(screen.getByTestId("stat-team")).toBeDefined();
    expect(screen.getByTestId("stat-years")).toBeDefined();
  });

  test("renders Header view mode switcher and handles mode callback", () => {
    let selectedMode = "interactive";
    const handleSetMode = (mode: "interactive" | "paper") => {
      selectedMode = mode;
    };

    render(() => <Header viewMode="interactive" setViewMode={handleSetMode} />);

    const paperBtn = screen.getByTestId("mode-btn-paper");
    expect(paperBtn).toBeDefined();

    fireEvent.click(paperBtn);
    expect(selectedMode).toBe("paper");
  });

  test("scrubs through whiteboard career timeline nodes", () => {
    render(() => <App />);

    // Initial role is Amazon SDM
    const activeRole = screen.getByTestId("timeline-active-role");
    expect(activeRole.textContent).toContain("Software Development Manager");

    // Click Nokia Networks timeline node (index 2)
    const nokiaNode = screen.getByTestId("timeline-node-nokia networks-2");
    fireEvent.click(nokiaNode);

    // Active role should update to Nokia R&D role
    expect(screen.getByTestId("timeline-active-role").textContent).toContain("R&D Engineer");
  });

  test("filters engineering projects by category", () => {
    render(() => <App />);

    // Click "Software Engineering" tab filter
    const softwareFilterBtn = screen.getByLabelText("Show software projects");
    fireEvent.click(softwareFilterBtn);

    // Verify software project is displayed
    expect(screen.getByTestId("project-card-nokia-gtest-framework-integration")).toBeDefined();

    // Management project should be filtered out
    expect(screen.queryByTestId("project-card-aws-pipeline-modernization-&-automation")).toBeNull();
  });

  test("enforces light theme permanently", () => {
    render(() => <App />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});

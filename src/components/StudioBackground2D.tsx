export function StudioBackground2D() {
  return (
    <div
      class="canvas-container"
      data-testid="studio-background-2d"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        "z-index": -1,
        "pointer-events": "none",
        background: "radial-gradient(circle at 50% 20%, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%)",
        overflow: "hidden"
      }}
    >
      {/* Ambient Sunlit Studio Light Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          left: "10vw",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
          "pointer-events": "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          right: "5vw",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(50px)",
          "pointer-events": "none"
        }}
      />

      {/* Subtle Studio Architectural Grid Lines */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.25 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="studio-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" stroke-width="0.8" stroke-dasharray="4,4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#studio-grid)" />
      </svg>
    </div>
  );
}

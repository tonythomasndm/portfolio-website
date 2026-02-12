import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Animated Background Components
const AnimatedBackground = () => (
  <>
    {/* Grid overlay */}
    <div className="grid-overlay" />

    {/* Spotlight effects */}
    <div className="spotlight spotlight-1" />
    <div className="spotlight spotlight-2" />

    {/* Floating particles */}
    <div className="particles">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  </>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimatedBackground />
    <App />
  </StrictMode>,
);

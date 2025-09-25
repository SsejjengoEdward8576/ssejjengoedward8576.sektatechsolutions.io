import React, { useState, useEffect, useRef } from "react";
import '../styles/main.css';
import "./OurWorks.css";
import NavigationMenu from '../assets/NavigationMenu';
import Footer from '../assets/Footer';

const OurWorks = () => {
  const [showDocumentation, setShowDocumentation] = useState(false);
  const docRef = useRef(null);

  const toggleDocumentation = () => {
    setShowDocumentation(prev => !prev);
  };

  // Accessibility: Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showDocumentation) {
        setShowDocumentation(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showDocumentation]);

  // Focus modal when opened
  useEffect(() => {
    if (showDocumentation && docRef.current) {
      docRef.current.focus();
    }
  }, [showDocumentation]);

  return (
    <div className="bg-body">
      <NavigationMenu />
      <h1 className="animated heading">Our Works</h1>
      <section className="portfolio">
        <h2 className="portfolio-title">Portfolio</h2>
        <article className="project">
          <h3>Background-Generator</h3>
          <p>
            This project generates CSS linear gradient values for creating beautiful background gradient colors.
            It's a useful tool for web developers to easily create and apply gradient backgrounds.
          </p>
          <div className="buttons">
            <a
              className="project-button"
              href="/Projects/backgroundGenerator/index-bg.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Background-Generator Project"
            >
              View Project
            </a>
            <a
              className="code-button"
              href="https://github.com/SsejjengoEdward8576/background-generator.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code on GitHub"
            >
              Source Code
            </a>
            <button
              className="documentation-button"
              onClick={toggleDocumentation}
              aria-haspopup="dialog"
              aria-expanded={showDocumentation}
              aria-controls="documentation-modal"
            >
              Documentation
            </button>
          </div>
        </article>
      </section>

      {/* Documentation modal */}
      {showDocumentation && (
        <div
          className="documentation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="documentation-title"
          tabIndex={-1}
          ref={docRef}
        >
          <div className="documentation-content">
            <button
              className="close"
              onClick={toggleDocumentation}
              aria-label="Close Documentation"
            >
              &times;
            </button>
            <h2 id="documentation-title">Documentation</h2>
            <span>
              This project's documentation includes detailed instructions on how to use the Background-Generator tool effectively.
              It covers topics such as:
            </span>
            <ul>
              <li>Introduction to Background-Generator</li>
              <li>Usage instructions</li>
              <li>Advanced tips and tricks</li>
            </ul>
            <span>
              To use the Background-Generator tool:
            </span>
            <ol>
              <li>Choose two colors using the color pickers.</li>
              <li>Observe the background gradient change in real-time.</li>
              <li>Copy the CSS code generated for the gradient.</li>
            </ol>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OurWorks;
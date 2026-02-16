import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
// Removed unused useTheme import.
// Since we don't have a hook ready in the file list, I'll rely on CSS variables or a simple prop if passed,
// but for now let's make a generic one that adapts or looks good on both.
// Actually, using the primary color var would be best.

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // console.log(_container);
  }, []);

  // We can access CSS variables for colors if we want to sync with theme
  // But tsParticles config takes hex/strings.
  // Let's use a "tech" neutral color + primary accent.

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff4d29", // Primary Hue 10
          },
          links: {
            enable: false, // Disable links to avoid "molecular/physician" look
          },
          move: {
            direction: "top", // Floating upwards like code bubbles
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20, // Middle ground density
          },
          opacity: {
            value: 0.5, // Visible but not overwhelming (was 0.2, originally 0.8)
            random: true,
          },
          shape: {
            type: "char",
            character: [
              {
                value: [
                  "{ }",
                  "</>",
                  "&&",
                  "||",
                  ";",
                  "const",
                  "=>",
                  "[]", // JS/TS
                  "def",
                  "class",
                  "self",
                  "#", // Python
                  "public",
                  "void",
                  "int", // Java/C++
                  "<?php",
                  "$", // PHP
                  "func",
                  "var",
                  "let", // Swift/Go/JS
                  "SELECT",
                  "FROM", // SQL
                  "<div>",
                  "npm",
                  "git", // Web/Tools
                ],
                font: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                style: "",
                weight: "500", // Back to slightly bold for legibility
              },
            ],
          },
          size: {
            value: { min: 12, max: 18 }, // Middle ground size (was 10-14, originally 14-22)
            random: true,
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { useTheme } from "../../../hooks/useTheme"; // Assuming you have a theme hook or context, otherwise we can use media query or simple class check.
// Since we don't have a hook ready in the file list, I'll rely on CSS variables or a simple prop if passed,
// but for now let's make a generic one that adapts or looks good on both.
// Actually, using the primary color var would be best.

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
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
            value: "transparent", // Let CSS handle background color (dark/light)
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
              mode: "grab", // connects particles to mouse
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ff4d29", // Use the primary orange/red hue explicitly or a variable if possible. Let's hardcode the hue 10 approx color for now or use primary.
            // Actually, let's use a dynamic approach if possible, but hardcoded nicely is fine.
            // var(--hue-color) is 10. hsl(10, 98%, 50%) -> #fc3e0d approx.
            // Let's use a reliable techie color that mixes well.
          },
          links: {
            color: "#fc3e0d", // Primary color
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true, // Creates 3D mesh effect
              opacity: 0.05,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1, // Slow elegant movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Not too crowded
          },
          opacity: {
            value: 0.3,
            random: true, // Adds depth perception
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "polygon", // Polygonal shapes
            polygon: {
              nb_sides: 6, // Hexagons are very "developer/tech"
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true, // Adds depth perception
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;

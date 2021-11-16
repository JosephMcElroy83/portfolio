import Particles from "react-tsparticles";
import "./RenderParticlesBackground.css"

export default function RenderParticlesBackground(props) {
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          detectRetina: false,
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
                speed: 3
              }
            }
          },
          particles: {
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              distance: 100,
              enable: true,
              opacity: 0.4,
              width: 4
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 0.5,
              straight: false
            },
            number: {
              density: {
                enable: false,
                area: 2000
              },
              limit: 0,
              value: 200
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: false,
              value: 2
            },
            shape: {
              type: "circle"
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false
              },
              random: true,
              value: 10
            }
          },
          polygon: {
            enable: false,
            draw: {
              enable: false,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 1
            },
            move: {
              radius: 8
            },
            inlineArrangement: "equidistant",
            scale: 0.23,
            type: "inline",
            url: "https://res.cloudinary.com/jm83/image/upload/v1636843654/zsderghljsdrglserg_lttriv.svg"
          },
        }}
        />
    </div>
    );
};

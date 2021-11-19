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
          particles: {
            number: {
              max: 200,
              value: 5,
              density: {
                enable: true,
                value_area: 100
              }
            },
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 6,
                sync: true
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "https://cdn.pixabay.com/photo/2015/04/28/21/20/halftone-744404_960_720.png",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.3,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 300,
              random: {
                enable: true,
                minimumValue: 50
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 100,
                sync: true,
                startValue: "min",
                destroy: "max"
              }
            },
            links: {
              enable: false
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              outMode: "destroy",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onhover: {
                enable: true,
                mode: "trail"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 10,
                duration: 6,
                opacity: 0.5,
                speed: 3
              },
              repulse: {
                distance: 300
              },
              push: {
                particles_nb: 15
              },
              remove: {
                particles_nb: 3
              },
              trail: {
                delay: 5,
                quantity: 25
              }
            }
          },
          retina_detect: true,
          background: {
            color: "#000000",
            image: "url('https://res.cloudinary.com/jm83/image/upload/c_scale,w_2440/v1636749336/artificial-intelligence-4389372_zxau8x.jpg')",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "fit"
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: "#000000"
            }
          }
        }}
        />
    </div>
    );
};

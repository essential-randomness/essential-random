import React from "react";

type Props = {
  label?: string;
  startFromFragment?: string;
  beamToFragment?: string;
};

const BeamUp = ({ label, startFromFragment, beamToFragment }: Props) => {
  const [beamUpVisible, setBeamUpVisible] = React.useState(false);
  const beamEl = React.useRef(null);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (!beamEl.current) {
        return;
      }
      // TODO: this could probably be done with intersection
      // observer.
      const shouldScroll = startFromFragment
        ? (document.getElementById(startFromFragment)?.getBoundingClientRect()
            .top || 0) < 0
        : document.documentElement.scrollTop > 50;
      if (shouldScroll) {
        if (!beamUpVisible) {
          setBeamUpVisible(true);
        }
      } else if (beamUpVisible) {
        setBeamUpVisible(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [beamUpVisible, startFromFragment]);

  return (
    <>
      <div
        className={`elevator ${beamUpVisible ? "visible" : "hidden"}`}
        ref={beamEl}
        onClick={() =>
          document.documentElement.scrollTo({
            top: beamToFragment
              ? document.getElementById(beamToFragment)?.offsetTop || 0
              : 0,
            behavior: "smooth",
          })
        }
      >
        {label ?? "Beam me up!"}
      </div>
      <style>{`
        .elevator {
          position: fixed;
          bottom: 30px;
          border-radius: 30px;
          background-color: black;
          color: white;
          text-align: center;
          right: 30px;
          padding: 10px 20px;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .elevator:hover {
          cursor: pointer;
        }

        .elevator.visible {
          visibility: visible;
          opacity: 1;
          transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
        }

        .elevator.hidden {
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
        }

        @media only screen and (max-width: 600px) {
          .elevator {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default BeamUp;

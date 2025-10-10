import * as motion from "motion/react-client";

function About() {
  const ball = {
    width: 300,
    height: 300,
    backgroundColor: "coral",
    borderRadius: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
    color: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  };

  return (
    <>
      <section
        id="about"
        className="relative overflow-y-hidden min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-800 via-green-900 to-green-700"
      >
        <div className="absolute z-[2]">
          <div className="flex flex-col justify-center w-[50%] justify-self-center">
            <h1 className="flex justify-center text-[4em]">ALOE.ToString()</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ea
              ut harum officiis dolores amet, vitae vel aliquid itaque iure
              pariatur, aspernatur odit aut praesentium ullam nisi consectetur
              corporis suscipit.
            </p>
          </div>
        </div>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-[0]"
        >
          {/* group positioned at center (100,100) so rotation happens around its center */}
          <g transform="translate(100 100)">
            <path
              id="blob"
              fill="#ff8888"
              d="M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z"
            >
              {/* morph between three similar paths (same command structure) */}
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.33;0.66;1"
                keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
                values={`M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z;
                                    M55.3,-63.6C66.5,-56.5,66.9,-34.1,67.1,-14.6C67.3,5.0,67.1,21.9,60.0,35.1C53.0,48.3,38.7,57.8,22.0,66.2C5.4,74.6,-13.6,82.1,-26.0,75.7C-38.4,69.3,-44.6,49.2,-50.3,32.3C-56.0,15.3,-61.9,1.7,-61.4,-12.7C-60.9,-27.1,-54.9,-42.6,-43.7,-50.0C-32.5,-57.4,-16.2,-56.0,2.9,-59.4C22.1,-62.8,44.1,-70.9,55.3,-63.6Z;
                                    M47.1,-54.2C56.9,-48.1,57.1,-29.1,57.3,-12.4C57.4,4.3,57.3,19.9,50.0,31.8C42.8,43.6,31.1,52.1,17.7,59.0C4.3,65.9,-10.9,71.3,-20.8,66.5C-30.7,61.6,-35.6,43.2,-40.2,28.3C-44.8,13.4,-49.7,1.5,-49.5,-10.9C-49.3,-23.2,-44.2,-36.4,-35.6,-42.6C-27.0,-48.8,-13.5,-48.0,2.4,-51.1C18.3,-54.1,36.7,-61.0,47.1,-54.2Z;
                                    M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z`}
              />
            </path>
            {/* rotate the group around its center (additive so translate stays) */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="40s"
              repeatCount="indefinite"
              additive="sum"
            />
          </g>
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-[1]"
        >
          {/* group positioned at center (100,100) so rotation happens around its center */}
          <g transform="translate(100 100)">
            <path
              id="blob"
              fill="#A7F0BA"
              d="M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z"
            >
              {/* morph between three similar paths (same command structure) */}
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.33;0.66;1"
                keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
                values={`M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z;
                                    M55.3,-63.6C66.5,-56.5,66.9,-34.1,67.1,-14.6C67.3,5.0,67.1,21.9,60.0,35.1C53.0,48.3,38.7,57.8,22.0,66.2C5.4,74.6,-13.6,82.1,-26.0,75.7C-38.4,69.3,-44.6,49.2,-50.3,32.3C-56.0,15.3,-61.9,1.7,-61.4,-12.7C-60.9,-27.1,-54.9,-42.6,-43.7,-50.0C-32.5,-57.4,-16.2,-56.0,2.9,-59.4C22.1,-62.8,44.1,-70.9,55.3,-63.6Z;
                                    M47.1,-54.2C56.9,-48.1,57.1,-29.1,57.3,-12.4C57.4,4.3,57.3,19.9,50.0,31.8C42.8,43.6,31.1,52.1,17.7,59.0C4.3,65.9,-10.9,71.3,-20.8,66.5C-30.7,61.6,-35.6,43.2,-40.2,28.3C-44.8,13.4,-49.7,1.5,-49.5,-10.9C-49.3,-23.2,-44.2,-36.4,-35.6,-42.6C-27.0,-48.8,-13.5,-48.0,2.4,-51.1C18.3,-54.1,36.7,-61.0,47.1,-54.2Z;
                                    M51.2,-58.9C61.6,-52.3,61.9,-31.6,62.1,-13.5C62.3,4.6,62.2,20.3,55.6,32.5C49,44.7,35.8,53.4,20.4,61.3C5,69.1,-12.6,76,-24.1,70.1C-35.7,64.2,-41.2,45.6,-46.6,29.9C-52,14.3,-57.3,1.6,-57.1,-11.8C-56.8,-25.2,-50.9,-39.4,-40.5,-46.1C-30,-52.7,-15,-51.7,2.7,-55C20.4,-58.2,40.8,-65.6,51.2,-58.9Z`}
              />
            </path>
            {/* rotate the group around its center (additive so translate stays) */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="50s"
              repeatCount="indefinite"
              additive="sum"
            />
          </g>
        </svg>
      </section>
    </>
  );
}
export default About;

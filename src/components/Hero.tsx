import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero">
      <div className="flex justify-between align-center max-w-screen-2xl mx-auto h-[calc(100vh-8.25rem)]">
        <div className="flex flex-col justify-center  w-[45%]">
          <div>
            <p className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-8 text-sm text-orange-700 bg-orange-300 rounded-full">
              <span className="text-xs bg-orange-700 rounded-full text-orange-300 px-4 py-1.5 mr-3">
                #1
              </span>{" "}
              <span className="text-sm font-medium">
                Diet plans in the world
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
          <h1 className="font-extrabold text-6xl font-mont leading-tight">
            Unlock Your Full Potential with{" "}
            <span className="text-orange-600 underline">Displine Balance</span>
          </h1>
          <p className="text-gray-800 mt-8">
            Discover a wide range of tailored diet plans to suit your lifestyle
            and goals. From rapid weight loss to sustainable healthy eating,
            find the perfect plan to support your journey towards a better you.
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="text-gray-50 bg-orange-600 text-md font-medium rounded-lg  py-4 px-8 flex justify-center items-center"
            >
              <a href="/#features" className="flex items-center justify-center">
                <FiSearch className="mr-3 border-l-1 border-white" /> Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="absolute bottom-11 w-full flex justify-center items-center max-w-screen-2xl">
          <a href="#features">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-800 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-gray-600 mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

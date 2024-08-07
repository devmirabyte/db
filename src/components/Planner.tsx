import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/animations";

function Planner() {
  return (
    <section id="planner" className="mt-16">
      <motion.section
        variants={staggerContainer(undefined, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0"
      >
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-5xl text-gray-800 font-extrabold font-mont text-center">
            <span className="border-b-2 border-orange-600 pb-4">
              Make your plan
            </span>
          </h2>
        </motion.div>
      </motion.section>
      <div className="flex justify-between align-center max-w-screen-2xl mx-auto mt-12 rounded-lg p-8">
        <form className="w-full max-w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <div>
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Age (Years)
              </label>
              <input
                type="number"
                id="age"
                className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500 "
              />
            </div>
            <div>
              <label
                htmlFor="wieght"
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Weight (Kg)
              </label>
              <input
                type="number"
                id="wieght"
                className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500 "
              />
            </div>
            <div>
              <label
                htmlFor="desiredWieght"
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Desired Weight (Kg)
              </label>
              <input
                type="number"
                id="desiredWieght"
                className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="flex justify-end items-center">
            <button
              type="button"
              className="text-gray-50 bg-orange-600 text-md font-medium rounded-lg  py-4 px-8 flex justify-center items-center"
            >
              Make My Plan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Planner;

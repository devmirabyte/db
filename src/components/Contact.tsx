import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/animations";

function Contact() {
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
              Contact Us
            </span>
          </h2>
        </motion.div>
      </motion.section>
      <div className="flex justify-between align-center max-w-screen-2xl mx-auto mt-12 rounded-lg p-8">
        <form className="w-full max-w-full flex flex-row justify-between items-center">
          <div className="py-8 lg:py-16 px-4 mx-auto min-w-[80%]  max-w-screen-xl">
            <form action="#" className="space-y-8 max-w-screen-lg min-w-full">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500 "
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-800 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500 "
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block w-full p-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-600 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none"
              >
                Send message
              </button>
            </form>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import { textVariant, fadeIn, staggerContainer } from "../utils/animations";
import { motion } from "framer-motion";

const features = [
  {
    label: "Professional Diet Plans",
    description:
      "With our professional diet changing plans, you can unlock your full potential with a healthy balance.",
    image: "/product1.png",
    icon: "/diet-plan.png",
  },
  {
    label: "Discount Vouchers",
    description:
      "We provide discount vouchers to stay motivated all along your journey.",
    image: "/product2.png",
    icon: "/voucher.png",
  },
  {
    label: "HIIT Workouts",
    description:
      "With our professional HIIT workouts, you can burn fat and lose weight.",
    image: "/product3.png",
    icon: "/workout.png",
  },
  // {
  //   label: "Healthy Supplements",
  //   description:
  //     "Enhance your immunity and your body strength with our healthy supplements.",
  //   image: "",
  // },
];

function Feature() {
  return (
    <section className="mt-16 max-w-screen-2xl mx-auto">
      <motion.section
        variants={staggerContainer(undefined, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0"
      >
        <span className="hash-span" id="features">
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-5xl text-gray-800 font-extrabold font-mont text-center">
            <span className="border-b-2 border-orange-600 pb-4">
              How it works
            </span>
          </h2>
        </motion.div>
        <div className="flex justify-center items-center">
          <div className="mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ label, description, image, icon }, idx) => (
              <motion.div
                variants={fadeIn("right", "spring", idx * 0.5, 0.75)}
                className="w-full p-[1px] rounded-[20px] shadow-card h-full relative"
              >
                <div className="flex flex-wrap justify-center mt-40">
                  <div className="relative h-full">
                    <div className="bg-white rounded-lg shadow-md pt-24 pb-6 px-4 relative z-10 h-full">
                      <img
                        src={image}
                        alt=""
                        className="w-96 object-cover rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 drop-shadow-2xl"
                      />
                      <div className="w-24 h-24 rounded-lg bg-neutral-100 absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-24 drop-shadow-2xl p-4">
                        <img src={icon} className="w-full h-full" />
                      </div>
                      <h3 className="mt-36 text-2xl font-bold text-gray-700 text-center font-mont">
                        {label}
                      </h3>
                      <p className="mt-2 text-gray-600 text-center">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}

export default Feature;

import { motion } from "framer-motion";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sell Your Unused Software Licenses
      </motion.h1>
      <motion.p
        className="text-lg mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Get fast cash for your unused or unwanted software licenses.
      </motion.p>
      <motion.button
        onClick={scrollToForm}
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;

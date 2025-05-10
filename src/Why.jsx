import { motion } from "framer-motion";

const Why = () => (
  <motion.section
    className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
      Why Choose SoftSell?
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {[
        { title: "Fast Payouts", text: "Get your money in 24 hours." },
        { title: "Secure Transactions", text: "Your data is safe and encrypted." },
        { title: "Best Market Rates", text: "We offer top resale value." },
        { title: "24/7 Support", text: "We’re here anytime you need us." },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {item.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Why;

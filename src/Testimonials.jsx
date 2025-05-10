import { motion } from "framer-motion";

const Testimonials = () => (
  <motion.section
    className="bg-gray-100 dark:bg-gray-900 py-16 px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
      What Our Customers Say
    </h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
      {[
        {
          quote: "SoftSell helped us recover value from unused licenses. Seamless experience!",
          name: "Jane Doe, IT Manager at ZenTech",
        },
        {
          quote: "Selling software licenses has never been this easy. Highly recommend!",
          name: "John Smith, CTO at SoftBridge",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <p className="mb-4 italic text-gray-700 dark:text-gray-200">“{item.quote}”</p>
          <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;

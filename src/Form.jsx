import { motion } from "framer-motion";

const Form = () => (
  <motion.section
    className="py-16 px-4 bg-gray-50 dark:bg-gray-800"
    id="contact-form"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
      Get In Touch
    </h2>
    <form className="grid gap-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        required
      />
      <input
        type="text"
        placeholder="Company"
        className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <select
        className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        required
      >
        <option value="">Choose License Type</option>
        <option value="windows">Windows</option>
        <option value="adobe">Adobe</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Your Message"
        rows="4"
        className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Send Message
      </button>
    </form>
  </motion.section>
);

export default Form;

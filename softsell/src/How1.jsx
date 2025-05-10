import { motion } from "framer-motion";

const How1 = () => (
  <motion.section
    className="py-16 bg-gray-50 dark:bg-gray-800"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {[
        { icon: "📤", title: "Upload License", text: "Submit your license details easily through our form." },
        { icon: "📊", title: "Get Valuation", text: "We evaluate and give you the best resale value." },
        { icon: "💸", title: "Get Paid", text: "Accept the offer and receive payment instantly." }
      ].map((item, i) => (
        <div key={i}>
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default How1;




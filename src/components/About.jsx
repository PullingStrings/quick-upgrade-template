import { motion } from 'framer-motion';

const About = ({ config }) => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={config.image}
              alt="About the business"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {config.text}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
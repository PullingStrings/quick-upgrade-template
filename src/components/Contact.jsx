// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiFacebook } from 'react-icons/fi';

const Contact = ({ config }) => {
  // Destructure for cleaner access
  const { title, description, email, phone, ctaText, bgColor } = config;
  const { socials } = config; // Assuming socials might be passed separately or within contact

  return (
    <motion.section
      id="contact"
      style={{
       background: bgColor
      }}
      className="py-20 bg-primary text-white "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-secondary transition-colors">
            <FiMail size={24} />
            <span className="text-lg">{email}</span>
          </a>
          <a href={`tel:${phone}`} className="flex items-center gap-3 hover:text-secondary transition-colors">
            <FiPhone size={24} />
            <span className="text-lg">{phone}</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mb-10">
          <a href={socials?.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FiInstagram size={28} />
          </a>
          <a href={socials?.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FiFacebook size={28} />
          </a>
        </div>

        <a
          href={`mailto:${email}`}
          className="bg-secondary text-primary font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
        >
          {ctaText}
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
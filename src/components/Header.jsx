import { motion } from 'framer-motion';

const Header = ({ config }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          {config.businessName}
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Simple responsive placeholder - links could be hidden in a hamburger menu */}
        <nav className="flex md:hidden space-x-4">
           {navLinks.slice(0, 2).map((link) => ( // Show first 2 links on mobile for simplicity
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
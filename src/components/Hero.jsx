// src/components/Hero.jsx
const Hero = ({ config }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src={config.heroImage} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover"/>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-md">{config.businessName}</h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-sm">{config.tagline}</p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
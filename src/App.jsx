
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import '../index.css'; // Import global styles
import config from './config.json';

function App() {
  // Set document title
  document.title = config.siteTitle;

  // Inject brand colors as CSS variables
  const brandStyles = `
    :root {
      --primary-color: ${config.primaryColor};
      --secondary-color: ${config.secondaryColor};
    }
  `;

  return (
    <>
      <style>{brandStyles}</style>
      <div className="bg-gray-50 font-sans">
        <Header config={config} />
        <main>
          <Hero config={config} />
          <About config={config.about} />
          <Services config={config.services} />
          <Contact config={{ ...config.contact, socials: config.socials }} />
        </main>
      </div>
    </>
  );
}

export default App;
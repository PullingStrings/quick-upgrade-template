
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ConfigDialog from './components/ConfigDialog';
import '../index.css'; // Import global styles
import initialConfig from './config.json';

function App() {
  const [config, setConfig] = useState(() => {
    const stored = localStorage.getItem('config');
    return stored ? JSON.parse(stored) : initialConfig;
  });
  const [open, setOpen] = useState(false);

  // Set document title
  document.title = config.siteTitle;

  // Inject brand colors as CSS variables
  const brandStyles = `
    :root {
      --primary-color: ${config.primaryColor};
      --secondary-color: ${config.secondaryColor};
    }
  `;

  const handleSave = (newConfig) => {
    try {
      localStorage.setItem('config', JSON.stringify(newConfig));
      setConfig(newConfig);
      alert('Configuration saved');
      setOpen(false);
    } catch {
      alert('Failed to save configuration');
    }
  };

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
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          +
        </button>
        <ConfigDialog
          open={open}
          onClose={() => setOpen(false)}
          config={config}
          onSave={handleSave}
        />
      </div>
    </>
  );
}

export default App;
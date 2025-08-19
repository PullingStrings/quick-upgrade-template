import { useState, useEffect } from 'react';

function ConfigDialog({ open, onClose, config, onSave }) {
  const [form, setForm] = useState({
    siteTitle: '',
    tagline: '',
    heroImage: '',
    primaryColor: '',
    secondaryColor: '',
    aboutText: '',
    services: '[]',
    socials: '{}',
    contactEmail: '',
    contactPhone: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setForm({
        siteTitle: config.siteTitle || '',
        tagline: config.tagline || '',
        heroImage: config.heroImage || '',
        primaryColor: config.primaryColor || '',
        secondaryColor: config.secondaryColor || '',
        aboutText: config.about?.text || '',
        services: JSON.stringify(config.services || [], null, 2),
        socials: JSON.stringify(config.socials || {}, null, 2),
        contactEmail: config.contact?.email || '',
        contactPhone: config.contact?.phone || ''
      });
      setError('');
    }
  }, [open, config]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let services;
    let socials;
    try {
      services = JSON.parse(form.services);
    } catch {
      setError('Services must be valid JSON');
      return;
    }
    try {
      socials = JSON.parse(form.socials);
    } catch {
      setError('Socials must be valid JSON');
      return;
    }
    try {
      const newConfig = {
        ...config,
        siteTitle: form.siteTitle,
        tagline: form.tagline,
        heroImage: form.heroImage,
        primaryColor: form.primaryColor,
        secondaryColor: form.secondaryColor,
        about: { ...(config.about || {}), text: form.aboutText },
        services,
        socials,
        contact: {
          ...(config.contact || {}),
          email: form.contactEmail,
          phone: form.contactPhone
        }
      };
      onSave(newConfig);
    } catch {
      setError('Failed to save configuration');
    }
  };

  const fetchHeroImage = async () => {
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || 'UNSPLASH_ACCESS_KEY';
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?orientation=landscape&client_id=${accessKey}`
      );
      const data = await res.json();
      const url = data?.urls?.regular;
      if (url) {
        setForm((prev) => ({ ...prev, heroImage: url }));
      } else {
        setError('Failed to fetch hero image');
      }
    } catch {
      setError('Failed to fetch hero image');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-xl mb-4">Edit Configuration</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="block">
            <span className="text-sm">Site Title</span>
            <input
              id="siteTitle"
              name="siteTitle"
              value={form.siteTitle}
              onChange={handleChange}
              placeholder="Site Title"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">Tagline</span>
            <input
              id="tagline"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Tagline"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">Hero Image URL</span>
            <div className="flex gap-2">
              <input
                id="heroImage"
                name="heroImage"
                value={form.heroImage}
                onChange={handleChange}
                placeholder="Hero Image URL"
                className="border p-2 w-full"
              />
              <button
                type="button"
                onClick={fetchHeroImage}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                Random Hero Image
              </button>
            </div>
          </label>
          <label className="block">
            <span className="text-sm">Primary Color</span>
            <input
              id="primaryColor"
              name="primaryColor"
              value={form.primaryColor}
              onChange={handleChange}
              placeholder="Primary Color"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">Secondary Color</span>
            <input
              id="secondaryColor"
              name="secondaryColor"
              value={form.secondaryColor}
              onChange={handleChange}
              placeholder="Secondary Color"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">About Text</span>
            <textarea
              id="aboutText"
              name="aboutText"
              value={form.aboutText}
              onChange={handleChange}
              placeholder="About Text"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">Services JSON</span>
            <textarea
              id="services"
              name="services"
              value={form.services}
              onChange={handleChange}
              placeholder="Services JSON"
              className="border p-2 w-full"
              rows={4}
            />
          </label>
          <label className="block">
            <span className="text-sm">Socials JSON</span>
            <textarea
              id="socials"
              name="socials"
              value={form.socials}
              onChange={handleChange}
              placeholder="Socials JSON"
              className="border p-2 w-full"
              rows={4}
            />
          </label>
          <label className="block">
            <span className="text-sm">Contact Email</span>
            <input
              id="contactEmail"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleChange}
              placeholder="Contact Email"
              className="border p-2 w-full"
            />
          </label>
          <label className="block">
            <span className="text-sm">Contact Phone</span>
            <input
              id="contactPhone"
              name="contactPhone"
              value={form.contactPhone}
              onChange={handleChange}
              placeholder="Contact Phone"
              className="border p-2 w-full"
            />
          </label>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
            <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfigDialog;

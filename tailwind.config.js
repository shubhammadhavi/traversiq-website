/** Ported verbatim from the inline `tailwind.config` that the CDN build used. */
module.exports = {
  content: [
    './index.html',
    './404.html',
    './us-visa/index.html',
    './global-visas/index.html',
    './passport-services/index.html',
    './flights-holidays/index.html',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F3',       // Warm background
        navy: '#0B1F3A',        // Deep Navy
        navyLight: '#16325B',   // Hover Navy
        gold: '#C59B27',        // Accent Gold
        goldLight: '#FBF6E8',   // Soft Gold tint
        crimson: '#C8102E',     // Accent Crimson
        whatsapp: '#15803D',    // WhatsApp Green CTA
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

import React from 'react';
import { icons } from '../../constants';

const WhatsAppWidget: React.FC = () => (
  <a
    href="https://wa.me/34604103188"
    target="_blank"
    rel="noreferrer"
    aria-label="Contact via WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110"
  >
    {icons.whatsapp}
  </a>
);

export default WhatsAppWidget;
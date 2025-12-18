'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2">
      <button
        onClick={scrollToTop}
        className="rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
        aria-label="맨 위로"
      >
        <ChevronUp className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={scrollToBottom}
        className="rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
        aria-label="맨 아래로"
      >
        <ChevronDown className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default ScrollButtons;

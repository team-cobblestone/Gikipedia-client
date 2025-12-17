import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center bg-gray-100 py-6 text-center text-sm text-gray-500">
      <p>Gkipedia</p>
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <button className="rounded bg-white p-2 shadow-sm hover:bg-gray-50">
          <ChevronUp className="h-4 w-4" />
        </button>
        <button className="rounded bg-white p-2 shadow-sm hover:bg-gray-50">
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-2 text-xs">© 2025 Gkipedia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

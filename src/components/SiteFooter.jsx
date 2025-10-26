import React from 'react';

function SiteFooter() {
  return (
    <footer className="bg-black text-white/70">
      <div className="container mx-auto px-6 md:px-10 py-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Flying Passports. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;

import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroSplineCover() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Flying Passports Admin
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
              Secure backend control center for bookings, visas, customer inquiries, and analytics. Manage your travel business with confidence and speed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-semibold shadow hover:bg-white/90 transition"
              >
                Explore Capabilities
              </a>
              <a
                href="#security"
                className="inline-flex items-center rounded-md border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
              >
                Security Overview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSplineCover;

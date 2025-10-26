import React from 'react';
import { Shield, Lock, Database } from 'lucide-react';

function SecuritySection() {
  return (
    <section id="security" className="bg-neutral-950 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Security-first by design</h2>
          <p className="mt-3 text-white/70">From authentication to data export, every action is validated, sanitized, and auditable.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/10 p-2"><Shield className="h-5 w-5" /></div>
              <h3 className="font-semibold">Hardened Auth</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Role-based access control with short-lived tokens and secure hashing.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/10 p-2"><Lock className="h-5 w-5" /></div>
              <h3 className="font-semibold">Data Protection</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Input validation and sanitization across all endpoints to prevent injection.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/10 p-2"><Database className="h-5 w-5" /></div>
              <h3 className="font-semibold">Resilient Storage</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">Structured collections with auditing and soft-deletes for safer recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;

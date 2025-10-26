import React from 'react';
import { Shield, BarChart3, Database, Search, FileText, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentication & Roles',
    desc: 'Email/password login with role-based access for admins and staff.'
  },
  {
    icon: Database,
    title: 'Unified Data Hub',
    desc: 'Bookings, contact requests, and visa applications stored and categorized.'
  },
  {
    icon: Search,
    title: 'Powerful Filters',
    desc: 'Search by name, date ranges, destinations, or form type in milliseconds.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'Monitor conversions, popular destinations, and monthly trends.'
  },
  {
    icon: FileText,
    title: 'Export Reports',
    desc: 'One-click exports to CSV, Excel, and PDF for shareable insights.'
  },
  {
    icon: Users,
    title: 'Customer 360',
    desc: 'Unified customer profiles with full CRUD and activity history.'
  }
];

function FeaturesGrid() {
  return (
    <section id="features" className="bg-neutral-950 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for modern travel ops</h2>
          <p className="mt-3 text-white/70">Everything you need to run Flying Passports efficiently—fast, secure, and reliable.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition">
              <div className="flex items-center gap-3">
                <div className="shrink-0 rounded-md bg-white/10 p-2">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;

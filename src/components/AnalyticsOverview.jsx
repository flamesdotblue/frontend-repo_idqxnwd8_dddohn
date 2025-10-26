import React from 'react';
import { BarChart3, Globe2, TrendingUp, Download } from 'lucide-react';

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="text-sm text-white/60">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-semibold text-white">{value}</div>
        {trend && (
          <div className={`text-xs px-2 py-1 rounded-md ${trend > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </div>
        )}
      </div>
    </div>
  );
}

function AnalyticsOverview() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Operational analytics that matter</h2>
            <p className="mt-3 text-white/70">Understand demand, optimize resources, and make data-driven decisions with a real-time dashboard.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Export snapshot
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="Total bookings (30d)" value="1,284" trend={12} />
          <Stat label="Popular destination" value="Bali, Indonesia" />
          <Stat label="Monthly submissions" value="3,972" trend={8} />
          <Stat label="Conversion rate" value="7.6%" trend={-1.2} />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/80">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm">Monthly submissions</span>
              </div>
              <div className="text-xs text-white/50">Last 12 months</div>
            </div>
            <div className="mt-6">
              <div className="h-40 w-full bg-gradient-to-tr from-white/5 to-white/10 rounded-lg" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center gap-2 text-white/80">
              <Globe2 className="h-5 w-5" />
              <span className="text-sm">Top destinations</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { name: 'Bali, Indonesia', change: 14 },
                { name: 'Tokyo, Japan', change: 9 },
                { name: 'Paris, France', change: 6 },
                { name: 'Dubai, UAE', change: 4 },
              ].map((d) => (
                <li key={d.name} className="flex items-center justify-between">
                  <span className="text-white/80">{d.name}</span>
                  <span className="text-emerald-400 text-xs">+{d.change}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsOverview;

import React from 'react';
import Link from 'next/link';
import {
  Sprout,
  CloudSun,
  IndianRupee,
  TrendingUp,
  Snowflake,
  Users2,
  ArrowUpRight,
} from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      title: 'Diagnose Crop',
      subtitle: 'Upload leaf photo for instant AI pest & disease check',
      icon: Sprout,
      href: '/crop-doctor',
      color: 'from-emerald-50 to-emerald-100/60',
      borderColor: 'border-emerald-200/90 hover:border-emerald-400',
      iconBg: 'bg-emerald-600 text-white',
      accentText: 'text-emerald-900',
    },
    {
      title: 'Check Weather',
      subtitle: '5-day farm forecast, rain advisory & spray windows',
      icon: CloudSun,
      href: '/farm-intelligence',
      color: 'from-sky-50 to-sky-100/60',
      borderColor: 'border-sky-200/90 hover:border-sky-400',
      iconBg: 'bg-sky-600 text-white',
      accentText: 'text-sky-900',
    },
    {
      title: 'Find Scheme',
      subtitle: 'Discover PM-KISAN, SMAM & 4% KCC subsidies',
      icon: IndianRupee,
      href: '/finance',
      color: 'from-amber-50 to-amber-100/60',
      borderColor: 'border-amber-200/90 hover:border-amber-400',
      iconBg: 'bg-amber-600 text-white',
      accentText: 'text-amber-900',
    },
    {
      title: 'Check Market',
      subtitle: 'Compare Meerut, Hapur & regional Mandi rates vs MSP',
      icon: TrendingUp,
      href: '/market',
      color: 'from-teal-50 to-teal-100/60',
      borderColor: 'border-teal-200/90 hover:border-teal-400',
      iconBg: 'bg-teal-700 text-white',
      accentText: 'text-teal-900',
    },
    {
      title: 'Find Storage',
      subtitle: 'Locate certified e-NWR depots & cold storage nearby',
      icon: Snowflake,
      href: '/storage',
      color: 'from-indigo-50 to-indigo-100/60',
      borderColor: 'border-indigo-200/90 hover:border-indigo-400',
      iconBg: 'bg-indigo-600 text-white',
      accentText: 'text-indigo-900',
    },
    {
      title: 'Join Crop Pool',
      subtitle: 'Pool wheat with regional FPOs for +8.5% price premium',
      icon: Users2,
      href: '/storage',
      color: 'from-orange-50 to-orange-100/60',
      borderColor: 'border-orange-200/90 hover:border-orange-400',
      iconBg: 'bg-orange-600 text-white',
      accentText: 'text-orange-900',
    },
  ];

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#14261C] tracking-tight">
            Quick Actions
          </h2>
          <p className="text-xs text-[#5c7264]">
            Immediate 1-tap shortcuts for daily farm management tasks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <Link
              key={act.title}
              href={act.href}
              className={`group relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${act.color} border ${act.borderColor} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl ${act.iconBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/80 border border-black/5 flex items-center justify-center text-slate-500 group-hover:text-black group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3
                  className={`text-base font-bold ${act.accentText} leading-snug group-hover:underline`}
                >
                  {act.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {act.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#1b4332] flex items-center gap-1">
                  Launch Action
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Ready
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

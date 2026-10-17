import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Microscope,
  CloudLightning,
  ShieldAlert,
  BadgePercent,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SMART_ACTIONS } from '@/data/mockData';

export default function SmartActions() {
  const getActionTheme = (category: string) => {
    switch (category) {
      case 'Crop Health':
        return {
          icon: <Microscope className="w-5 h-5 text-amber-700" />,
          accentBg: 'bg-amber-500/10 text-amber-900 border-amber-200/80',
          badge: 'bg-amber-100 text-amber-800 border-amber-300',
          cardBorder: 'hover:border-amber-300',
          btnBg: 'bg-amber-700 hover:bg-amber-800 text-white',
        };
      case 'Weather':
        return {
          icon: <CloudLightning className="w-5 h-5 text-sky-700" />,
          accentBg: 'bg-sky-500/10 text-sky-900 border-sky-200/80',
          badge: 'bg-sky-100 text-sky-800 border-sky-300',
          cardBorder: 'hover:border-sky-300',
          btnBg: 'bg-sky-700 hover:bg-sky-800 text-white',
        };
      case 'Disease Risk':
        return {
          icon: <ShieldAlert className="w-5 h-5 text-rose-700" />,
          accentBg: 'bg-rose-500/10 text-rose-900 border-rose-200/80',
          badge: 'bg-rose-100 text-rose-800 border-rose-300',
          cardBorder: 'hover:border-rose-300',
          btnBg: 'bg-rose-700 hover:bg-rose-800 text-white',
        };
      case 'Market':
        return {
          icon: <BadgePercent className="w-5 h-5 text-emerald-700" />,
          accentBg: 'bg-emerald-500/10 text-emerald-900 border-emerald-200/80',
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          cardBorder: 'hover:border-emerald-300',
          btnBg: 'bg-[#1b4332] hover:bg-[#2d6a4f] text-white',
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-emerald-700" />,
          accentBg: 'bg-slate-100 text-slate-800 border-slate-200',
          badge: 'bg-slate-100 text-slate-800 border-slate-300',
          cardBorder: 'hover:border-slate-300',
          btnBg: 'bg-slate-900 hover:bg-slate-800 text-white',
        };
    }
  };

  return (
    <section className="space-y-3.5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#14261C] tracking-tight">
              Today’s Smart Actions
            </h2>
            <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#faedcd] text-[#7f5539] rounded-full border border-[#e9c46a]/60">
              High Priority
            </span>
          </div>
          <p className="text-xs text-[#5c7264]">
            Synthesized AI alerts translated directly into today&apos;s field and commercial decisions.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#5a7163]">
          <Clock className="w-3.5 h-3.5" />
          <span>Updated 15 mins ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SMART_ACTIONS.map((action) => {
          const theme = getActionTheme(action.category);

          return (
            <div
              key={action.id}
              className={`bg-white rounded-2xl p-5 border border-[#e2e7df] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${theme.cardBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl border ${theme.accentBg}`}>
                      {theme.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#667e70] uppercase tracking-wider block">
                        {action.category}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${theme.badge}`}
                  >
                    {action.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#14261C] leading-snug">
                  {action.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4c6254] mt-1.5 leading-relaxed">
                  {action.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#f0f3ee] flex items-center justify-between">
                <span className="text-[11px] text-[#718779] font-medium flex items-center gap-1">
                  Urgency: <strong className="text-[#14261C]">{action.urgency}</strong>
                </span>

                <Link
                  href={action.ctaLink}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 shadow-sm hover:shadow group ${theme.btnBg}`}
                >
                  <span>{action.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

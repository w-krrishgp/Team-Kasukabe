import React from 'react';
import {
  Leaf,
  CloudRain,
  AlertTriangle,
  Sprout,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { FARM_HEALTH_METRICS } from '@/data/mockData';

export default function HealthOverview() {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Good':
      case 'Optimal':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'Low':
        return 'bg-sky-50 text-sky-800 border-sky-200/80';
      case 'Medium':
      case 'Attention':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
      case 'High':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  const getMetricIcon = (name: string) => {
    switch (name) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-700" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-sky-700" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-700" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-teal-700" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#2d6a4f]" />;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <div>
          <h2 className="text-lg font-bold text-[#14261C] tracking-tight">
            Farm Health & Intelligence Overview
          </h2>
          <p className="text-xs text-[#5c7264]">
            Real-time synthesis across crop health, microclimate, soil readiness and market signals.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/70 text-[#1b4332] border border-emerald-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Live Sensors Connected
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {FARM_HEALTH_METRICS.map((metric) => (
          <div
            key={metric.title}
            className="group relative bg-white rounded-2xl p-4 sm:p-4.5 border border-[#e3e8e1] shadow-sm hover:shadow-md hover:border-[#b7d5c2] transition-all duration-200 flex flex-col justify-between"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#5a7163]">
                  {metric.title}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#f2f7f3] group-hover:bg-[#e4f1e8] flex items-center justify-center transition-colors">
                  {getMetricIcon(metric.iconName)}
                </div>
              </div>

              {/* Primary Value */}
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#14261C] tracking-tight">
                  {metric.value}
                </span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getBadgeStyle(
                    metric.status
                  )}`}
                >
                  {metric.status}
                </span>
              </div>
            </div>

            {/* Visual Indicator Bar */}
            <div className="mt-3 pt-3 border-t border-[#edf1ea]">
              {metric.title === 'Crop Health' && (
                <div className="space-y-1.5">
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all"
                      style={{ width: '82%' }}
                    />
                  </div>
                  <p className="text-[10px] text-[#698072] font-medium leading-tight">
                    {metric.change}
                  </p>
                </div>
              )}

              {metric.title === 'Weather Risk' && (
                <div className="space-y-1.5">
                  <div className="flex gap-1 h-1.5">
                    <div className="flex-1 bg-sky-500 rounded-full" />
                    <div className="flex-1 bg-slate-200 rounded-full" />
                    <div className="flex-1 bg-slate-200 rounded-full" />
                  </div>
                  <p className="text-[10px] text-[#698072] font-medium leading-tight">
                    {metric.change}
                  </p>
                </div>
              )}

              {metric.title === 'Disease Risk' && (
                <div className="space-y-1.5">
                  <div className="flex gap-1 h-1.5">
                    <div className="flex-1 bg-amber-400 rounded-full" />
                    <div className="flex-1 bg-amber-500 rounded-full" />
                    <div className="flex-1 bg-slate-200 rounded-full" />
                  </div>
                  <p className="text-[10px] text-[#698072] font-medium leading-tight">
                    {metric.change}
                  </p>
                </div>
              )}

              {metric.title === 'Soil Readiness' && (
                <div className="space-y-1.5">
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-600 rounded-full transition-all"
                      style={{ width: '88%' }}
                    />
                  </div>
                  <p className="text-[10px] text-[#698072] font-medium leading-tight">
                    {metric.change}
                  </p>
                </div>
              )}

              {metric.title === 'Market Opportunity' && (
                <div className="space-y-1.5">
                  <div className="flex gap-1 h-1.5">
                    <div className="flex-1 bg-emerald-500 rounded-full" />
                    <div className="flex-1 bg-emerald-500 rounded-full" />
                    <div className="flex-1 bg-emerald-600 rounded-full" />
                  </div>
                  <p className="text-[10px] text-[#698072] font-medium leading-tight">
                    {metric.change}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

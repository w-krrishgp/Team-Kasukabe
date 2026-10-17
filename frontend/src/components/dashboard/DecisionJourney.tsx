import React from 'react';
import Link from 'next/link';
import {
  Camera,
  CalendarCheck,
  Coins,
  Warehouse,
  Store,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { DECISION_JOURNEY_STAGES } from '@/data/mockData';

export default function DecisionJourney() {
  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5" />;
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5" />;
      case 'Store':
        return <Store className="w-5 h-5" />;
      default:
        return <CalendarCheck className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Done
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-700 animate-spin" style={{ animationDuration: '4s' }} /> Active
          </span>
        );
      case 'Upcoming':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Upcoming
          </span>
        );
    }
  };

  return (
    <section className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#14261C] tracking-tight">
              Farmer Decision Journey
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#d8f3dc] text-[#1b4332] font-semibold">
              Wheat Cycle: Rabi 2025
            </span>
          </div>
          <p className="text-xs text-[#5c7264] mt-0.5">
            A cohesive 5-step progression from initial field diagnosis to maximized market realization.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-[#2d6a4f]">
          <span>Current Stage:</span>
          <span className="font-bold bg-[#e9f5ee] px-2.5 py-1 rounded-lg border border-[#c1dfce]">
            01 Diagnose &amp; 02 Plan
          </span>
        </div>
      </div>

      {/* Horizontal Connected Journey Track */}
      <div className="relative">
        {/* Desktop Connected Line behind steps */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-slate-200 z-0 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
          {DECISION_JOURNEY_STAGES.map((stage, idx) => {
            const isCompleted = stage.status === 'Completed';
            const isInProgress = stage.status === 'In Progress';

            return (
              <Link
                key={stage.step}
                href={stage.href}
                className={`group relative rounded-xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                  isInProgress
                    ? 'bg-gradient-to-b from-amber-50/50 to-white border-amber-300 shadow-sm ring-2 ring-amber-400/20'
                    : isCompleted
                    ? 'bg-gradient-to-b from-emerald-50/40 to-white border-emerald-300'
                    : 'bg-[#fafbfa] border-[#e5ebe2] hover:bg-white hover:border-[#b9cebe] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Step number & Icon bubble */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105 ${
                        isInProgress
                          ? 'bg-amber-600 text-white shadow-amber-600/30 ring-4 ring-amber-100'
                          : isCompleted
                          ? 'bg-emerald-700 text-white shadow-emerald-700/20 ring-4 ring-emerald-100'
                          : 'bg-white border border-[#d3ded0] text-[#556e5f]'
                      }`}
                    >
                      {getStageIcon(stage.icon)}
                    </div>
                    {getStatusBadge(stage.status)}
                  </div>

                  {/* Stage Title & Number */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold tracking-wider text-[#6b8274] uppercase">
                      Stage {stage.step}
                    </div>
                    <div className="text-base font-bold text-[#14261C] group-hover:text-[#1b4332] flex items-center gap-1">
                      <span>{stage.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#2d6a4f]" />
                    </div>
                    <p className="text-xs text-[#52695c] font-medium leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-3 pt-2.5 border-t border-[#edf1ea] text-[11px] text-[#718779] truncate">
                  {stage.details}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

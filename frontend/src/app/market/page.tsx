'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/layout/AppShell';
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  MapPin,
  Truck,
  IndianRupee,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { MANDI_PRICES, CURRENT_FARMER } from '@/data/mockData';

export default function MarketPage() {
  const [estimatedYieldQuintals, setEstimatedYieldQuintals] = useState(90);

  return (
    <AppShell
      title="📈 Fair Market Access & Mandi Intelligence"
      subtitle="Real-time multi-mandi price discovery, net margin calculators and buyer contracts."
    >
      <div className="space-y-6">
        {/* Market Strategy Advisory Banner */}
        <div className="bg-gradient-to-r from-[#183928] to-[#122319] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#264b38]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>AI Market Recommendation: Hold &amp; Aggregate</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Selling conditions will improve by +₹80–120 / Quintal in 12–14 days
              </h2>
              <p className="text-xs text-[#a5c2b2] max-w-2xl leading-relaxed">
                Early harvest gluts in Western UP are currently depressing spot prices. Private mill buyers from Delhi NCR are contracting future lots at ₹2,420/Qtl.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/storage"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#52b788] hover:bg-[#74c69d] text-[#0f1f16] font-bold text-xs transition-all shadow-sm"
              >
                <span>Store Produce to Wait</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Regional Mandi Price Table */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
            <div>
              <h3 className="text-base font-bold text-[#14261C] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-700" />
                <span>Live Regional Mandi Price Comparison • Wheat (HD-2967)</span>
              </h3>
              <p className="text-xs text-[#5c7264]">
                Government Minimum Support Price (MSP 2025-26): <strong>₹2,275 / Quintal</strong>
              </p>
            </div>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
              Real-time APMC e-NAM Feed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#edf1ea] text-[11px] font-bold uppercase tracking-wider text-[#667e70]">
                  <th className="pb-3 pl-2">Mandi Name</th>
                  <th className="pb-3">Distance</th>
                  <th className="pb-3">Variety / Grade</th>
                  <th className="pb-3 text-right">Price / Qtl</th>
                  <th className="pb-3 text-right">vs. MSP</th>
                  <th className="pb-3 pr-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f2f5f1]">
                {MANDI_PRICES.map((mandi) => {
                  const isRecommended = mandi.mandiName.includes('Recommended');
                  return (
                    <tr
                      key={mandi.mandiName}
                      className={`hover:bg-[#f9faf8] transition-colors ${
                        isRecommended ? 'bg-emerald-50/40 font-medium' : ''
                      }`}
                    >
                      <td className="py-3.5 pl-2">
                        <div className="font-bold text-[#14261C]">
                          {mandi.mandiName}
                        </div>
                        <div className="text-[11px] text-[#718779]">
                          Updated: {mandi.lastUpdated}
                        </div>
                      </td>

                      <td className="py-3.5 text-xs text-[#52695c]">
                        {mandi.distanceKm > 0 ? `${mandi.distanceKm} km away` : 'Baseline'}
                      </td>

                      <td className="py-3.5 text-xs text-[#52695c]">
                        {mandi.variety}
                      </td>

                      <td className="py-3.5 text-right font-extrabold text-[#14261C]">
                        ₹{mandi.pricePerQuintal.toLocaleString('en-IN')}
                      </td>

                      <td className="py-3.5 text-right">
                        {mandi.mspDifference > 0 ? (
                          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            +₹{mandi.mspDifference}
                          </span>
                        ) : mandi.mspDifference === 0 ? (
                          <span className="text-xs font-semibold text-slate-500">
                            MSP Base
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-rose-700">
                            -₹{Math.abs(mandi.mspDifference)}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 pr-2 text-right">
                        <button
                          type="button"
                          className="px-3 py-1.5 rounded-lg bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold shadow-sm transition-colors"
                        >
                          View Gate Pass
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ramesh's Net Revenue Realization Calculator */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
            <div>
              <h3 className="text-base font-bold text-[#14261C] flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-[#2d6a4f]" />
                <span>Net Revenue Estimator for Ramesh&apos;s 4.5 Acres</span>
              </h3>
              <p className="text-xs text-[#5c7264]">
                Comparing selling immediately at Meerut Mandi vs. trucking to Hapur Mandi vs. Collective Pooling.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14261C]">
              <span>Estimated Harvest:</span>
              <span className="bg-[#e9f5ee] px-2.5 py-1 rounded-md text-[#1b4332] font-bold">
                90 Quintals
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Option A: Local Meerut */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Option A: Meerut APMC (Immediate)
                </span>
                <div className="text-2xl font-extrabold text-[#14261C] mt-2">
                  ₹2,05,200
                </div>
                <p className="text-[11px] text-[#667e70] mt-1">
                  Rate: ₹2,280/Qtl • Transport cost: ₹1,800
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600">
                Fast cash, but lowest price realization.
              </div>
            </div>

            {/* Option B: Hapur Mandi */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 ring-2 ring-emerald-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                    Option B: Hapur Mandi (Recommended)
                  </span>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    +₹4,400 Net
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-emerald-900 mt-2">
                  ₹2,09,600
                </div>
                <p className="text-[11px] text-emerald-800 mt-1">
                  Rate: ₹2,360/Qtl • Transport cost: ₹2,800
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200 text-xs font-semibold text-emerald-900">
                Higher mill demand compensates for extra 16 km haulage.
              </div>
            </div>

            {/* Option C: Collective Pooling */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-900 uppercase tracking-wider block">
                    Option C: Meerut Wheat FPO Pool
                  </span>
                  <span className="text-[10px] font-bold bg-teal-600 text-white px-2 py-0.5 rounded-full">
                    Max Premium
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-teal-950 mt-2">
                  ₹2,17,800
                </div>
                <p className="text-[11px] text-teal-800 mt-1">
                  Rate: ₹2,420/Qtl • Bulk contract with flour mill
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-teal-200 text-xs font-semibold text-teal-900">
                <Link href="/storage" className="hover:underline flex items-center gap-1">
                  <span>Join Pool #12 in Storage Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

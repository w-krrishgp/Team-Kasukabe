'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/layout/AppShell';
import {
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  CreditCard,
  FileText,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { GOVERNMENT_SCHEMES, CURRENT_FARMER } from '@/data/mockData';

export default function FinancePage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'enrolled' | 'eligible'>('all');

  const filteredSchemes = GOVERNMENT_SCHEMES.filter((scheme) => {
    if (selectedCategory === 'enrolled') return scheme.status === 'Enrolled';
    if (selectedCategory === 'eligible') return scheme.status === 'Eligible' || scheme.status === 'Action Needed';
    return true;
  });

  return (
    <AppShell
      title="₹ Financial Empowerment & Schemes"
      subtitle="Government subsidies, crop insurance protection and agricultural credit subventions."
    >
      <div className="space-y-6">
        {/* Farmer Financial Health Summary Banner */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Score circle left (4 cols) */}
            <div className="md:col-span-4 flex items-center gap-4 sm:gap-5 border-b md:border-b-0 md:border-r border-[#edf1ea] pb-5 md:pb-0 md:pr-6">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-emerald-600 to-[#1b4332] text-white flex flex-col items-center justify-center shadow-lg shadow-emerald-700/20">
                  <span className="text-2xl sm:text-3xl font-extrabold leading-none">78</span>
                  <span className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold mt-0.5">
                    Score / 100
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                  High Creditworthiness
                </span>
                <h3 className="text-lg font-bold text-[#14261C] mt-1.5">
                  Financial Health Index
                </h3>
                <p className="text-xs text-[#52695c] mt-0.5">
                  Consistent repayment history &amp; active PMFBY coverage unlocks 4% lowest interest rate bracket.
                </p>
              </div>
            </div>

            {/* Quick Financial Metrics right (8 cols) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#667e70]">
                  <CreditCard className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  <span>KCC Active Limit</span>
                </div>
                <div className="text-xl font-extrabold text-[#14261C] mt-1">
                  ₹2,40,000
                </div>
                <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                  4% Subsidized Rate
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#667e70]">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                  <span>Insured Value</span>
                </div>
                <div className="text-xl font-extrabold text-[#14261C] mt-1">
                  ₹1,62,000
                </div>
                <div className="text-[11px] text-[#52695c] font-medium mt-0.5">
                  PMFBY Rabi Wheat
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#667e70]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Available Subsidies</span>
                </div>
                <div className="text-xl font-extrabold text-amber-800 mt-1">
                  Up to 50%
                </div>
                <div className="text-[11px] text-amber-700 font-medium mt-0.5">
                  SMAM Farm Equipment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schemes and Subsidies Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#14261C] tracking-tight">
                Recommended Government Schemes &amp; Subsidies
              </h3>
              <p className="text-xs text-[#5c7264]">
                Matched against Ramesh Kumar&apos;s 4.5-acre landholding in Meerut, UP.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#f0f4ef] rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-white text-[#14261C] shadow-sm'
                    : 'text-[#5a7163] hover:text-[#14261C]'
                }`}
              >
                All Schemes ({GOVERNMENT_SCHEMES.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('enrolled')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === 'enrolled'
                    ? 'bg-white text-[#14261C] shadow-sm'
                    : 'text-[#5a7163] hover:text-[#14261C]'
                }`}
              >
                Enrolled
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('eligible')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === 'eligible'
                    ? 'bg-white text-[#14261C] shadow-sm'
                    : 'text-[#5a7163] hover:text-[#14261C]'
                }`}
              >
                Action / Eligible
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSchemes.map((scheme) => {
              const isEnrolled = scheme.status === 'Enrolled';
              const isEligible = scheme.status === 'Eligible';
              const isActionNeeded = scheme.status === 'Action Needed';

              return (
                <div
                  key={scheme.id}
                  className="bg-white rounded-2xl p-5 border border-[#e2e7df] shadow-sm hover:border-[#b7d5c2] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#667e70]">
                        {scheme.department}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                          isEnrolled
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : isEligible
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : 'bg-rose-100 text-rose-800 border-rose-300'
                        }`}
                      >
                        {scheme.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#14261C]">
                      {scheme.name}
                    </h4>

                    <div className="mt-2 p-2.5 rounded-xl bg-[#f8faf7] border border-[#e5ebe2] text-xs font-semibold text-[#1b4332]">
                      Benefit: {scheme.benefit}
                    </div>

                    <p className="text-xs text-[#4f6456] mt-3 leading-relaxed">
                      {scheme.details}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#edf1ea] flex items-center justify-between">
                    {scheme.deadline ? (
                      <span className="text-[11px] font-medium text-amber-800 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {scheme.deadline}
                      </span>
                    ) : (
                      <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Aadhaar Linked
                      </span>
                    )}

                    <button
                      type="button"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <span>{isEnrolled ? 'View Status' : 'Apply Now'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Financial Link to Crop Protection */}
        <div className="bg-[#f2f7f3] rounded-2xl p-5 border border-[#cbe0d3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#14261C]">
              Need short-term liquidity without distress-selling your wheat?
            </h4>
            <p className="text-xs text-[#4c6254]">
              Deposit grains in an accredited e-NWR warehouse and receive up to 70% immediate pledge financing against your electronic receipt.
            </p>
          </div>
          <Link
            href="/storage"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold shrink-0 transition-colors shadow-sm"
          >
            <span>Explore Storage &amp; Pledge Loans</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

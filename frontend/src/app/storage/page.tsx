'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/layout/AppShell';
import {
  Snowflake,
  Warehouse,
  Users2,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  X,
} from 'lucide-react';
import { STORAGE_FACILITIES, CROP_POOLS, CURRENT_FARMER } from '@/data/mockData';

export default function StoragePage() {
  const [pooledLots, setPooledLots] = useState(CROP_POOLS);
  const [pledgedSuccess, setPledgedSuccess] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState(STORAGE_FACILITIES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bagsCount, setBagsCount] = useState(40);
  const [durationMonths, setDurationMonths] = useState(2);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const handleJoinPool = (poolId: string) => {
    setPooledLots((prev) =>
      prev.map((p) => {
        if (p.id === poolId) {
          return {
            ...p,
            currentQuintals: Math.min(p.targetQuintals, p.currentQuintals + 50),
            joinedFarmersCount: p.joinedFarmersCount + 1,
          };
        }
        return p;
      })
    );
    setPledgedSuccess(poolId);
    setTimeout(() => setPledgedSuccess(null), 4000);
  };

  return (
    <AppShell
      title="❄ Storage &amp; Collective Pooling"
      subtitle="Certified e-NWR warehouses to protect harvest value, pledge receipts, and bulk FPO sales."
    >
      <div className="space-y-6">
        {/* Banner Explaining Value Protection */}
        <div className="bg-[#f0f7f3] border border-[#cbe0d3] rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Value Protection Engine</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#14261C]">
                Prevent Distress Selling: Store Now, Realize Peak Rates in 3 Weeks
              </h2>
              <p className="text-xs text-[#4f6456] max-w-2xl leading-relaxed">
                Wheat stored in accredited e-NWR depots is eligible for electronic warehouse receipt (e-NWR) loans at 7% interest, keeping cash flow steady while avoiding post-harvest glut pricing.
              </p>
            </div>

            <Link
              href="/finance"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs shrink-0 transition-all shadow-sm"
            >
              <span>View Pledge Credit Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Collective Crop Pooling Section (Top Priority Feature) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#14261C] flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-emerald-700" />
                  <span>Active FPO Collective Crop Pools</span>
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-200">
                  Bulk Bargaining Power
                </span>
              </div>
              <p className="text-xs text-[#5c7264] mt-0.5">
                Join fellow smallholder farmers to aggregate volume and command wholesale contract premiums directly from flour mills.
              </p>
            </div>

            <span className="text-xs text-[#52695c] font-medium self-start sm:self-auto">
              Meerut District Hub
            </span>
          </div>

          {pledgedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                Success! 50 Quintals from Ramesh Kumar pledged to the pool. Updated collective progress below.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pooledLots.map((pool) => {
              const percent = Math.min(
                100,
                Math.round((pool.currentQuintals / pool.targetQuintals) * 100)
              );

              return (
                <div
                  key={pool.id}
                  className="bg-[#fbfcfb] rounded-2xl p-5 border border-[#dbe4d9] hover:border-[#b7d5c2] transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#667e70] uppercase">
                        {pool.commodity}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {pool.negotiatedPremium}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#14261C]">
                      {pool.title}
                    </h4>
                    <p className="text-xs text-[#52695c] mt-0.5">
                      Managed by: <strong>{pool.leadFpo}</strong>
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-[#14261C]">
                        <span>
                          {pool.currentQuintals} / {pool.targetQuintals} Qtl Pooled
                        </span>
                        <span className="text-emerald-700">{percent}% Full</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#667e70]">
                      <span className="flex items-center gap-1">
                        <Users2 className="w-3.5 h-3.5" />
                        {pool.joinedFarmersCount} local farmers joined
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-amber-800">
                        <Clock className="w-3.5 h-3.5" />
                        Closes in {pool.closingInDays} days
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#edf1ea] flex items-center justify-between">
                    <span className="text-[11px] text-[#52695c]">
                      Minimum pledge: 10 Quintals
                    </span>
                    <button
                      type="button"
                      onClick={() => handleJoinPool(pool.id)}
                      className="px-4 py-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <span>Join Crop Pool</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certified Nearby Warehouses List */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#edf1ea] pb-4">
            <div>
              <h3 className="text-base font-bold text-[#14261C] flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-[#2d6a4f]" />
                <span>Nearby Certified Warehouses &amp; Cold Storage</span>
              </h3>
              <p className="text-xs text-[#5c7264]">
                Verified storage depots near Meerut with electronic warehouse receipt (e-NWR) support.
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
              WDRA Registered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STORAGE_FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="p-4 rounded-xl bg-[#fafbfa] border border-[#e2e7df] hover:border-[#b7d5c2] hover:bg-white transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#2d6a4f] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {facility.distanceKm} km away
                    </span>
                    {facility.isENWRCompliant && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                        e-NWR Ready
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-[#14261C] leading-snug">
                    {facility.name}
                  </h4>
                  <p className="text-xs text-[#52695c] mt-0.5">
                    {facility.location}
                  </p>

                  <div className="mt-3 py-2 px-2.5 rounded-lg bg-white border border-[#edf1ea] flex items-center justify-between text-xs">
                    <span className="text-[#667e70]">Monthly Rent:</span>
                    <strong className="text-[#14261C]">₹{facility.pricePerBagMonth} / bag</strong>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {facility.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#edf1ea] flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    {facility.availableBags} bags space left
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFacility(facility);
                      setIsBookingOpen(true);
                      setBookingConfirmed(false);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    Reserve Space
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 2: Cold Storage Booking Modal */}
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#dfe5dc] relative animate-in zoom-in-95 duration-150">
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {bookingConfirmed ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#14261C]">
                      Cold Storage Slot Confirmed!
                    </h3>
                    <p className="text-xs text-[#52695c] mt-1 max-w-sm mx-auto">
                      Space reserved at <strong>{selectedFacility.name}</strong>. Free space updated.
                    </p>
                  </div>

                  <div className="p-4 bg-[#f8faf7] rounded-2xl border border-[#e5ebe2] text-left text-xs space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-[#667e70]">Booking ID:</span>
                      <strong className="text-[#14261C]">#CS-MEE-2026-9041</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667e70]">Farmer:</span>
                      <strong className="text-[#14261C]">{CURRENT_FARMER.name}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667e70]">Reserved Bags:</span>
                      <strong className="text-emerald-700">{bagsCount} Bags</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667e70]">Monthly Rent:</span>
                      <strong className="text-[#14261C]">₹{bagsCount * selectedFacility.pricePerBagMonth} / mo</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsBookingOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      Done &amp; Close Pass
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookSlot} className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">
                      <Warehouse className="w-4 h-4" />
                      <span>Reserve Cold Storage Slot</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#14261C] mt-1">
                      {selectedFacility.name}
                    </h3>
                    <p className="text-xs text-[#667e70]">
                      {selectedFacility.location} • {selectedFacility.distanceKm} km from Ramesh&apos;s farm
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                    <span>Available Free Space:</span>
                    <strong className="text-emerald-800 text-sm">
                      {selectedFacility.availableBags.toLocaleString()} Bags
                    </strong>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-[#14261C] mb-1">
                        Bags to Store (50 kg / bag)
                      </label>
                      <input
                        type="number"
                        min="10"
                        max={selectedFacility.availableBags}
                        value={bagsCount}
                        onChange={(e) => setBagsCount(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2dbd0] text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#52b788]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#14261C] mb-1">
                          Produce Type
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2dbd0] text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#52b788]">
                          <option>Wheat (HD-2967)</option>
                          <option>Mustard (Pusa Bold)</option>
                          <option>Seed Potato</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#14261C] mb-1">
                          Duration
                        </label>
                        <select
                          value={durationMonths}
                          onChange={(e) => setDurationMonths(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2dbd0] text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#52b788]"
                        >
                          <option value="1">1 Month</option>
                          <option value="2">2 Months (Recommended)</option>
                          <option value="3">3 Months</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 bg-[#f8faf7] rounded-xl border border-[#e5ebe2] flex items-center justify-between text-xs">
                      <span className="text-[#667e70]">Monthly Rent:</span>
                      <strong className="text-sm font-bold text-[#14261C]">
                        ₹{bagsCount * selectedFacility.pricePerBagMonth} / mo
                      </strong>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-[#edf1ea]">
                    <button
                      type="button"
                      onClick={() => setIsBookingOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-all shadow-sm"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

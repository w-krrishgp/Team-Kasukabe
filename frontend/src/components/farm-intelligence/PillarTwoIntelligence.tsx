'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CloudSun,
  ShieldAlert,
  Snowflake,
  MapPin,
  Compass,
  Wind,
  Droplets,
  Calendar,
  AlertTriangle,
  Users2,
  CheckCircle2,
  ChevronRight,
  Info,
  Warehouse,
  Check,
  X,
  PlusCircle,
  FileCheck,
} from 'lucide-react';
import {
  CURRENT_FARMER,
  HYPERLOCAL_WEATHER_SIGNALS,
  DISEASE_OUTBREAK_ALERT,
  STORAGE_FACILITIES,
} from '@/data/mockData';

export default function PillarTwoIntelligence() {
  const [activeTab, setActiveTab] = useState<'all' | 'weather' | 'disease' | 'storage'>('all');
  const [selectedFacility, setSelectedFacility] = useState(STORAGE_FACILITIES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bagsCount, setBagsCount] = useState(40);
  const [durationMonths, setDurationMonths] = useState(2);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [communityReportSuccess, setCommunityReportSuccess] = useState(false);

  const handleBookSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      // Keep state confirmed for visual satisfaction
    }, 500);
  };

  const handleReportCommunityOutbreak = () => {
    setCommunityReportSuccess(true);
    setTimeout(() => setCommunityReportSuccess(false), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Pillar 2 Header Banner directly matching the user's slide */}
      <div className="bg-[#1b4332] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#2d6a4f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(82,183,136,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#52b788] text-[#0f2017]">
                Pillar 2
              </span>
              <span className="text-xs text-[#a5c2b2] uppercase tracking-wider font-semibold">
                Farm level: warnings and planning
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Farm Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-[#d8f3dc] mt-1 max-w-2xl leading-relaxed">
              Hyper-local microclimate alerts, early 5 km community disease warnings, and post-harvest cold storage slot reservation.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-[#14261C] p-1.5 rounded-xl border border-[#2d523f]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#52b788] text-[#0f2017] shadow-sm'
                  : 'text-[#c2d7cb] hover:text-white'
              }`}
            >
              All 3 Signals
            </button>
            <button
              onClick={() => setActiveTab('weather')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'weather'
                  ? 'bg-[#52b788] text-[#0f2017] shadow-sm'
                  : 'text-[#c2d7cb] hover:text-white'
              }`}
            >
              4. Weather
            </button>
            <button
              onClick={() => setActiveTab('disease')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'disease'
                  ? 'bg-[#52b788] text-[#0f2017] shadow-sm'
                  : 'text-[#c2d7cb] hover:text-white'
              }`}
            >
              5. Outbreak
            </button>
            <button
              onClick={() => setActiveTab('storage')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'storage'
                  ? 'bg-[#52b788] text-[#0f2017] shadow-sm'
                  : 'text-[#c2d7cb] hover:text-white'
              }`}
            >
              6. Cold Storage
            </button>
          </div>
        </div>
      </div>

      {/* 3 Interactive Cards matching the user's slide layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* CARD 4: WEATHER */}
        {(activeTab === 'all' || activeTab === 'weather') && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#e2e7df] hover:border-[#52b788] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header bar */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-[#e9c46a] rounded-full" />
                <h3 className="text-xl font-bold text-[#14261C]">
                  4. Weather
                </h3>
              </div>

              {/* What */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  What:
                </span>
                <p className="text-sm font-semibold text-[#1c241f] leading-snug">
                  Hyper-local forecast and alerts.
                </p>
              </div>

              {/* How */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  How:
                </span>
                <p className="text-xs text-[#4f6456] leading-relaxed">
                  Temperature, humidity and rain for the farm&apos;s GPS spot, to plan watering and spraying.
                </p>
              </div>

              {/* Live telemetry for Ramesh's GPS spot */}
              <div className="p-3.5 bg-[#f8faf7] rounded-xl border border-[#e5ebe2] space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[#667e70] font-medium border-b border-[#edf1ea] pb-1.5">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#2d6a4f]" />
                    GPS: {HYPERLOCAL_WEATHER_SIGNALS.gpsLocation}
                  </span>
                  <span className="font-bold text-[#1b4332]">219m ASL</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2 rounded-lg border border-[#e2e8df]">
                    <span className="text-[10px] text-slate-500 block">Temp</span>
                    <strong className="text-sm text-[#14261C]">
                      {HYPERLOCAL_WEATHER_SIGNALS.currentTemp}
                    </strong>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#e2e8df]">
                    <span className="text-[10px] text-slate-500 block">Humidity</span>
                    <strong className="text-sm text-amber-700">
                      {HYPERLOCAL_WEATHER_SIGNALS.currentHumidity}
                    </strong>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#e2e8df]">
                    <span className="text-[10px] text-slate-500 block">Rain 24h</span>
                    <strong className="text-sm text-blue-700">
                      {HYPERLOCAL_WEATHER_SIGNALS.rainProbabilityNext24h}
                    </strong>
                  </div>
                </div>

                {/* Specific Watering & Spraying Plans */}
                <div className="space-y-1.5 pt-1 text-[11px]">
                  <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-200 text-blue-950">
                    <strong className="block text-blue-900 font-bold">
                      💧 Water Plan: {HYPERLOCAL_WEATHER_SIGNALS.wateringPlan.status}
                    </strong>
                    <span className="text-[10.5px] text-blue-800">
                      {HYPERLOCAL_WEATHER_SIGNALS.wateringPlan.reason}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-950">
                    <strong className="block text-amber-900 font-bold">
                      🌾 Spray Plan: {HYPERLOCAL_WEATHER_SIGNALS.sprayingPlan.status}
                    </strong>
                    <span className="text-[10.5px] text-amber-800">
                      Best window: {HYPERLOCAL_WEATHER_SIGNALS.sprayingPlan.bestWindow}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#edf1ea]">
              <span className="text-[11px] font-bold text-[#1b4332] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Live GPS Weather Active
              </span>
            </div>
          </div>
        )}

        {/* CARD 5: DISEASE OUTBREAK ALERT */}
        {(activeTab === 'all' || activeTab === 'disease') && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#e2e7df] hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header bar */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-[#e9c46a] rounded-full" />
                <h3 className="text-xl font-bold text-[#14261C]">
                  5. Disease Outbreak Alert
                </h3>
              </div>

              {/* What */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  What:
                </span>
                <p className="text-sm font-semibold text-[#1c241f] leading-snug">
                  Stops disease from spreading.
                </p>
              </div>

              {/* How */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  How:
                </span>
                <p className="text-xs text-[#4f6456] leading-relaxed">
                  If many farmers within 5 km report the same disease, neighbours get an early warning.
                </p>
              </div>

              {/* 5 km Radius Live Warning Feed */}
              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                    <ShieldAlert className="w-3 h-3 text-amber-700" />
                    5 km Radius Early Warning
                  </span>
                  <span className="text-[11px] font-bold text-rose-700">
                    {DISEASE_OUTBREAK_ALERT.reportsCount} Reports in 48h
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#14261C]">
                    {DISEASE_OUTBREAK_ALERT.diseaseName}
                  </div>
                  <div className="text-[11px] text-amber-900 leading-snug">
                    Nearest confirmed case: <strong>{DISEASE_OUTBREAK_ALERT.nearestCaseKm} km away</strong> ({DISEASE_OUTBREAK_ALERT.recentReports[0].village}).
                  </div>
                </div>

                {/* Spore vector & wind alert */}
                <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-amber-200 text-[11px] text-[#422006]">
                  <Wind className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Wind blowing from {DISEASE_OUTBREAK_ALERT.windDirection} toward your wheat plot.</span>
                </div>

                {/* Community reporting button */}
                {communityReportSuccess ? (
                  <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-[11px] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Report logged! Neighbours in 5 km alerted.</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleReportCommunityOutbreak}
                    className="w-full py-2 px-3 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Report Disease on My Farm</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#edf1ea] flex items-center justify-between">
              <span className="text-[11px] text-[#667e70]">
                4 neighbouring villages participating
              </span>
              <Link
                href="/crop-doctor"
                className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
              >
                <span>Fungicide Protocols</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* CARD 6: COLD STORAGE */}
        {(activeTab === 'all' || activeTab === 'storage') && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#e2e7df] hover:border-indigo-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header bar */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-[#e9c46a] rounded-full" />
                <h3 className="text-xl font-bold text-[#14261C]">
                  6. Cold Storage
                </h3>
              </div>

              {/* What */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  What:
                </span>
                <p className="text-sm font-semibold text-[#1c241f] leading-snug">
                  Reduces spoilage after harvest.
                </p>
              </div>

              {/* How */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider block">
                  How:
                </span>
                <p className="text-xs text-[#4f6456] leading-relaxed">
                  Shows nearby cold stores, their free space, and lets farmers book a slot.
                </p>
              </div>

              {/* Real-time Nearby Cold Store List with Free Space */}
              <div className="space-y-2">
                {STORAGE_FACILITIES.slice(0, 2).map((stg) => (
                  <div
                    key={stg.id}
                    className="p-3 bg-[#f8faf7] rounded-xl border border-[#e5ebe2] flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#14261C] truncate">
                        {stg.name}
                      </div>
                      <div className="text-[11px] text-[#667e70] flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-[#2d6a4f]" />
                          {stg.distanceKm} km
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded text-[10px]">
                          {stg.availableBags.toLocaleString()} bags free
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFacility(stg);
                        setIsBookingOpen(true);
                        setBookingConfirmed(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
                    >
                      Book Slot
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#edf1ea] flex items-center justify-between">
              <span className="text-[11px] text-[#667e70]">
                From ₹48–65 / bag / month
              </span>
              <Link
                href="/storage"
                className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
              >
                <span>View All Depots</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 5 KM OUTBREAK RADAR CLUSTER DETAILS */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
              <h3 className="text-base font-bold text-[#14261C]">
                5 km Community Outbreak Radar: Recent Farmer Reports
              </h3>
            </div>
            <p className="text-xs text-[#5c7264] mt-0.5">
              Live automated syndication: when 3+ farmers in a 5 km circle flag symptoms, neighbours receive early warnings.
            </p>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 self-start sm:self-auto">
            14 Active Field Reports
          </span>
        </div>

        {/* List of recent reports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DISEASE_OUTBREAK_ALERT.recentReports.map((rep) => (
            <div
              key={rep.id}
              className="p-3.5 rounded-xl bg-[#fafbfa] border border-[#e5ebe2] hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#14261C]">
                    {rep.village}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      rep.severity === 'Severe'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {rep.severity}
                  </span>
                </div>

                <div className="text-xs font-medium text-[#4f6456]">
                  {rep.affectedCrop}
                </div>
                <div className="text-[11px] text-[#718779] mt-0.5">
                  Reported by: {rep.farmerPseudonym}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#edf1ea] flex items-center justify-between text-[11px]">
                <span className="text-[#2d6a4f] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {rep.distanceKm} km away
                </span>
                <span className="text-slate-500">{rep.reportedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOOK A COLD STORAGE SLOT MODAL */}
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
                    Cold Storage Slot Reserved!
                  </h3>
                  <p className="text-xs text-[#52695c] mt-1 max-w-sm mx-auto">
                    Your space at <strong>{selectedFacility.name}</strong> is reserved. Present this booking pass at the warehouse weighbridge.
                  </p>
                </div>

                <div className="p-4 bg-[#f8faf7] rounded-2xl border border-[#e5ebe2] text-left text-xs space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-[#667e70]">Booking ID:</span>
                    <strong className="text-[#14261C]">#CS-MEE-2026-8819</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#667e70]">Farmer:</span>
                    <strong className="text-[#14261C]">{CURRENT_FARMER.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#667e70]">Reserved Quantity:</span>
                    <strong className="text-emerald-700">{bagsCount} Bags (~20 Quintals)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#667e70]">Estimated Monthly Rent:</span>
                    <strong className="text-[#14261C]">₹{bagsCount * selectedFacility.pricePerBagMonth} / month</strong>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setIsBookingOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-colors"
                  >
                    Done &amp; Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookSlot} className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">
                    <Warehouse className="w-4 h-4" />
                    <span>Cold Storage Slot Reservation</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#14261C] mt-1">
                    {selectedFacility.name}
                  </h3>
                  <p className="text-xs text-[#667e70]">
                    Location: {selectedFacility.location} ({selectedFacility.distanceKm} km from farm)
                  </p>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                  <span>Current Available Space:</span>
                  <strong className="text-emerald-800 text-sm">
                    {selectedFacility.availableBags.toLocaleString()} Free Bags
                  </strong>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#14261C] mb-1">
                      Number of Bags to Store (50 kg each)
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
                      <select
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2dbd0] text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#52b788]"
                      >
                        <option>Wheat (HD-2967)</option>
                        <option>Mustard (Oilseed)</option>
                        <option>Seed Potatoes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#14261C] mb-1">
                        Duration (Months)
                      </label>
                      <select
                        value={durationMonths}
                        onChange={(e) => setDurationMonths(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2dbd0] text-sm text-[#14261C] focus:outline-none focus:ring-2 focus:ring-[#52b788]"
                      >
                        <option value="1">1 Month</option>
                        <option value="2">2 Months (Recommended)</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-[#f8faf7] rounded-xl border border-[#e5ebe2] flex items-center justify-between text-xs">
                    <span className="text-[#667e70]">Rate: ₹{selectedFacility.pricePerBagMonth}/bag/mo</span>
                    <strong className="text-sm font-bold text-[#14261C]">
                      Total: ₹{bagsCount * selectedFacility.pricePerBagMonth} / mo
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
                    Confirm &amp; Generate Gate Pass
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

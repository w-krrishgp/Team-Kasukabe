'use client';

import React from 'react';
import Link from 'next/link';
import AppShell from '@/components/layout/AppShell';
import PillarTwoIntelligence from '@/components/farm-intelligence/PillarTwoIntelligence';
import {
  CloudSun,
  CloudRain,
  Droplets,
  Wind,
  Thermometer,
  Sprout,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Info,
} from 'lucide-react';

export default function FarmIntelligencePage() {
  const forecastDays = [
    { day: 'Today', temp: '22° / 11°', condition: 'Partly Cloudy', rain: '10%', wind: '8 km/h', sprayStatus: 'Good' },
    { day: 'Tomorrow', temp: '20° / 12°', condition: 'Moderate Rain', rain: '75%', wind: '16 km/h', sprayStatus: 'Do Not Spray' },
    { day: 'Wednesday', temp: '21° / 10°', condition: 'Scattered Showers', rain: '35%', wind: '11 km/h', sprayStatus: 'Unfavorable' },
    { day: 'Thursday', temp: '23° / 9°', condition: 'Clear & Sunny', rain: '5%', wind: '6 km/h', sprayStatus: 'Ideal Spray Window' },
    { day: 'Friday', temp: '24° / 10°', condition: 'Sunny', rain: '0%', wind: '7 km/h', sprayStatus: 'Ideal' },
  ];

  return (
    <AppShell
      title="📊 Farm Intelligence & Microclimate"
      subtitle="Pillar 2: Warnings and planning covering Weather, 5 km Disease Outbreaks, and Cold Storage."
    >
      <div className="space-y-8">
        {/* PILLAR 2: FARM INTELLIGENCE (Weather, 5km Disease Outbreak, Cold Storage Slot Booking) */}
        <PillarTwoIntelligence />
        {/* Recommended Spray Advisory Window Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-[#14261C] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#264b38]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Computed Spray Window Recommendation</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Best Spray Window: Thursday, 07:00 AM – 11:30 AM
              </h2>
              <p className="text-xs text-[#a5c2b2] max-w-2xl leading-relaxed">
                Postponing your Wheat Rust fungicide application until Thursday prevents ~₹1,400 in chemical wash-off from tomorrow&apos;s expected 14mm rain front.
              </p>
            </div>

            <Link
              href="/crop-doctor"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#52b788] hover:bg-[#74c69d] text-[#0f1f16] font-bold text-xs shrink-0 transition-all shadow-sm"
            >
              <span>View Fungicide Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5-Day Forecast Strip */}
        <div className="bg-white rounded-2xl p-5 border border-[#e2e7df] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h3 className="text-base font-bold text-[#14261C] flex items-center gap-2">
                <CloudSun className="w-5 h-5 text-[#2d6a4f]" />
                <span>5-Day Weather &amp; Spray Feasibility • Meerut Station</span>
              </h3>
              <p className="text-xs text-[#667e70]">
                Calibrated against IMD radar and automated rural weather sensors.
              </p>
            </div>
            <span className="text-[11px] font-medium text-[#799986] self-start sm:self-auto">
              Updated: 10 mins ago
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {forecastDays.map((fc, idx) => {
              const isRainTomorrow = fc.day === 'Tomorrow';
              const isIdealWindow = fc.day === 'Thursday';

              return (
                <div
                  key={fc.day}
                  className={`p-4 rounded-xl border text-center flex flex-col justify-between ${
                    isRainTomorrow
                      ? 'bg-rose-50/70 border-rose-200'
                      : isIdealWindow
                      ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-[#fafbfa] border-[#e4eae0]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#14261C] block">
                      {fc.day}
                    </span>
                    <div className="my-2.5 flex justify-center">
                      {isRainTomorrow ? (
                        <CloudRain className="w-7 h-7 text-blue-600 animate-bounce" style={{ animationDuration: '2s' }} />
                      ) : isIdealWindow ? (
                        <CloudSun className="w-7 h-7 text-amber-500" />
                      ) : (
                        <CloudSun className="w-7 h-7 text-slate-500" />
                      )}
                    </div>
                    <div className="text-sm font-extrabold text-[#14261C]">
                      {fc.temp}
                    </div>
                    <div className="text-[11px] text-[#556e5f] mt-0.5">
                      {fc.condition}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-black/5 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-600">
                      <span>Rain Risk</span>
                      <strong className={isRainTomorrow ? 'text-rose-700 font-bold' : ''}>
                        {fc.rain}
                      </strong>
                    </div>
                    <span
                      className={`block text-[10px] font-bold py-1 px-1.5 rounded ${
                        isRainTomorrow
                          ? 'bg-rose-100 text-rose-800'
                          : isIdealWindow
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {fc.sprayStatus}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soil & Microclimate Intelligence Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Soil Readiness Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#14261C]">
                    Soil Moisture &amp; Nutrients
                  </h3>
                  <p className="text-xs text-[#667e70]">Root-zone depth: 15 cm (Wheat Tillering)</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Optimal
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <span className="text-[11px] text-[#667e70] font-medium block">Moisture</span>
                <span className="text-lg font-bold text-teal-800">68%</span>
                <span className="text-[10px] text-emerald-700 font-semibold block">Ideal</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <span className="text-[11px] text-[#667e70] font-medium block">Soil pH</span>
                <span className="text-lg font-bold text-[#14261C]">6.8</span>
                <span className="text-[10px] text-emerald-700 font-semibold block">Neutral</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <span className="text-[11px] text-[#667e70] font-medium block">Nitrogen (N)</span>
                <span className="text-lg font-bold text-[#14261C]">Medium</span>
                <span className="text-[10px] text-amber-700 font-semibold block">Top-dress soon</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8faf7] border border-[#e5ebe2]">
                <span className="text-[11px] text-[#667e70] font-medium block">Soil Temp</span>
                <span className="text-lg font-bold text-[#14261C]">18.5°C</span>
                <span className="text-[10px] text-emerald-700 font-semibold block">Good</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f8faf7] border border-[#e5ebe2] text-xs text-[#52695c] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
              <span>
                <strong>Irrigation guidance:</strong> Adequate moisture retained in soil. Skip secondary canal watering for 5 days due to upcoming rain front.
              </span>
            </div>
          </div>

          {/* Disease Risk Microclimate Index Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#14261C]">
                    Disease Microclimate Index
                  </h3>
                  <p className="text-xs text-[#667e70]">Fungal pathogen spore germination risk</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                Elevated Risk
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-[#14261C]">
                  <span>Fungal Rust Proliferation Index</span>
                  <span className="text-amber-700">64 / 100</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 rounded-full" style={{ width: '64%' }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#fbfcfb] border border-[#e5ebe2]">
                  <span className="text-[11px] text-[#667e70] font-medium block">Morning Dew Duration</span>
                  <span className="text-base font-bold text-amber-800">4.8 Hours</span>
                  <span className="text-[10px] text-amber-700 font-semibold block">Spore germination threshold</span>
                </div>
                <div className="p-3 rounded-xl bg-[#fbfcfb] border border-[#e5ebe2]">
                  <span className="text-[11px] text-[#667e70] font-medium block">Average Relative Humidity</span>
                  <span className="text-base font-bold text-amber-800">84%</span>
                  <span className="text-[10px] text-slate-500 block">Normal is 55-65%</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                Microclimate favors stripe rust propagation. Follow the recommended spray advisory protocol once rain recedes on Thursday morning.
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

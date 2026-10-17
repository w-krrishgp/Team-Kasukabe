'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/layout/AppShell';
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  Microscope,
  Calendar,
  CloudRain,
  ShieldCheck,
  ChevronRight,
  Info,
  MapPin,
  ExternalLink,
  RefreshCw,
  Sprout,
} from 'lucide-react';
import { CURRENT_FARMER } from '@/data/mockData';

export default function CropDoctorPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('Wheat (Tillering)');
  const [scanComplete, setScanComplete] = useState(true);

  const handleSimulateScan = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setScanComplete(true);
    }, 900);
  };

  return (
    <AppShell
      title="🌱 Crop Doctor & AI Pathology"
      subtitle="Instant crop health diagnosis, disease detection and actionable agronomic remedies."
    >
      <div className="space-y-6">
        {/* Banner Alert connecting to the rest of the journey */}
        <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-amber-950">
                Action Required for Ramesh&apos;s Field #2 (North Plot)
              </h2>
              <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">
                Symptoms consistent with early <strong>Wheat Yellow Rust (Puccinia striiformis)</strong> identified. Immediate leaf treatment recommended before heading stage.
              </p>
            </div>
          </div>
          <Link
            href="/farm-intelligence"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shrink-0 transition-colors shadow-sm"
          >
            <span>Check Spray Weather</span>
            <CloudRain className="w-4 h-4" />
          </Link>
        </div>

        {/* Diagnostic Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Leaf Scan & Image Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-[#e2e7df] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#14261C] flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#2d6a4f]" />
                  <span>Field Leaf Sample Scan</span>
                </h3>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  GPS Tagged: Meerut
                </span>
              </div>

              {/* Leaf Visual Preview Box */}
              <div className="relative aspect-video sm:aspect-4/3 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-950 via-[#193525] to-[#264b38] border border-[#2d523f] flex items-center justify-center p-4 text-center">
                {/* Simulated scan lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,183,136,0.15)_0%,transparent_70%)]" />

                {/* Bounding box indicator */}
                <div className="absolute inset-10 border-2 border-dashed border-amber-400/80 rounded-lg flex items-start justify-start p-2">
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                    Yellow Rust Foci (94.2%)
                  </span>
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#74c69d]">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Field Plot B-2 • Sample #WHT-0891
                    </p>
                    <p className="text-[11px] text-[#9bb3a6]">
                      Captured: Today, 08:30 AM via Mobile Camera
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSimulateScan}
                  disabled={analyzing}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${analyzing ? 'animate-spin' : ''}`} />
                  <span>{analyzing ? 'Running AI Model...' : 'Re-Analyze Sample'}</span>
                </button>
              </div>

              <div className="p-3 bg-[#f8faf7] rounded-xl border border-[#e5ebe2] text-[11px] text-[#5c7264] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span>
                  Our neural network analyzes yellow pustule alignment along wheat leaf veins to distinguish Stripe Rust from Leaf Spot.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Diagnosis Results & Treatment Prescription (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm space-y-5">
              {/* Header result */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#edf1ea] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#667e70]">
                      Primary Diagnosis
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded-full border border-amber-300">
                      Moderate Severity
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#14261C] mt-1">
                    Wheat Yellow Rust (Stripe Rust)
                  </h3>
                  <p className="text-xs text-[#52695c]">
                    Pathogen: <em>Puccinia striiformis f. sp. tritici</em>
                  </p>
                </div>

                <div className="text-left sm:text-right bg-[#f7f9f6] p-3 rounded-xl border border-[#e4eae0]">
                  <div className="text-xs text-[#667e70] font-medium">AI Confidence</div>
                  <div className="text-2xl font-extrabold text-emerald-700">94.2%</div>
                </div>
              </div>

              {/* Key Diagnostic Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-500">Affected Area</div>
                  <div className="text-base font-bold text-[#14261C] mt-0.5">18% of Leaves</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-500">Spread Velocity</div>
                  <div className="text-base font-bold text-amber-700 mt-0.5">Moderate</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-500">Yield Risk</div>
                  <div className="text-base font-bold text-rose-700 mt-0.5">12-15% Loss</div>
                </div>
              </div>

              {/* Treatment Prescriptions */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#14261C] tracking-tight">
                  Actionable Treatment Protocol
                </h4>

                {/* Option 1: Chemical Recommendation */}
                <div className="p-4 rounded-xl bg-[#fbfcfb] border border-[#dce5da] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1b4332] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      Option 1: Fungicide Spray (Recommended)
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Fast Acting
                    </span>
                  </div>
                  <p className="text-xs text-[#334639] leading-relaxed">
                    <strong>Propiconazole 25% EC (e.g., Tilt / Bumper)</strong>: Apply 200 ml mixed with 200 Litres of water per acre. Target foliar underside thoroughly.
                  </p>
                </div>

                {/* Option 2: Organic Alternative */}
                <div className="p-4 rounded-xl bg-[#fbfcfb] border border-[#dce5da] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#627768] flex items-center gap-1.5">
                      <Sprout className="w-4 h-4 text-teal-700" />
                      Option 2: Bio-Control Alternative
                    </span>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                      Zero-Chemical
                    </span>
                  </div>
                  <p className="text-xs text-[#334639] leading-relaxed">
                    <strong>Cold-Pressed Neem Oil Emulsion (10,000 ppm)</strong>: 5 ml per litre of water with 1g soap nut solution as surfactant. Best for preventive barrier.
                  </p>
                </div>

                {/* Timing Warning Banner */}
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                  <CloudRain className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-blue-950 font-bold">
                      Critical Weather Synchronization Advisory:
                    </strong>
                    <span>
                      Rain is predicted for tomorrow evening in Meerut. <strong>Delay spraying until Thursday morning</strong> (48 hrs from now) so fungicide is not washed off by rainfall.
                    </span>
                  </div>
                </div>
              </div>

              {/* Nearby certified input dealer */}
              <div className="pt-3 border-t border-[#edf1ea] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#52695c]">
                  <MapPin className="w-4 h-4 text-[#2d6a4f]" />
                  <span>
                    Nearest Certified Dealer: <strong>IFFCO Kisan Seva Kendra</strong> (3.4 km from your farm)
                  </span>
                </div>
                <Link
                  href="/farm-intelligence"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4332] hover:underline"
                >
                  <span>Sync with Farm Weather</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

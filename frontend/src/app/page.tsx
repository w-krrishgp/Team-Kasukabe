import React from 'react';
import Link from 'next/link';
import {
  Sprout,
  Activity,
  IndianRupee,
  TrendingUp,
  Warehouse,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ChevronRight,
  Compass,
  Cpu,
  Smartphone,
  Users2,
  LineChart,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#1c241f] selection:bg-[#52b788] selection:text-white flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#fbfbfa]/90 backdrop-blur-md border-b border-[#e5ebe3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] p-0.5 shadow-md flex items-center justify-center">
              <Sprout className="w-5 h-5 text-[#74c69d]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#14261C]">
                SmartFarm
              </span>
              <span className="text-xs text-[#52695c] font-medium ml-2 hidden sm:inline">
                Intelligence Platform
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#4f6456]">
            <a href="#journey" className="hover:text-[#1b4332] transition-colors">
              The Journey
            </a>
            <a href="#features" className="hover:text-[#1b4332] transition-colors">
              Features
            </a>
            <a href="#connected" className="hover:text-[#1b4332] transition-colors">
              Connected Platform
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md group"
            >
              <span>Enter Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 farm-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3.5xl mx-auto space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[#1b4332] border border-emerald-300 text-xs font-bold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
                <span>Next-Generation AgriTech Platform for Rural Development</span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261C] tracking-tight leading-[1.12]">
                From crop diagnosis to{' '}
                <span className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#52b788] bg-clip-text text-transparent">
                  better income.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-[#4f6456] leading-relaxed max-w-2xl mx-auto">
                One intelligent platform to diagnose crop problems, plan farm decisions, access financial support, protect produce value and sell with confidence.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1b4332] hover:bg-[#265e45] text-white font-bold text-base shadow-lg shadow-[#1b4332]/20 hover:shadow-xl transition-all group"
                >
                  <span>Enter Farmer Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#journey"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#f3f7f4] text-[#1b4332] font-semibold text-base border border-[#cad9cf] shadow-sm transition-all"
                >
                  <span>See How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#52b788]" />
                </a>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-[#5a7163]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>AI Crop Disease Detection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Weather-Linked Spray Windows</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Verified Mandi Price Comparison</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-STEP JOURNEY SECTION */}
        <section id="journey" className="py-16 sm:py-24 bg-white border-y border-[#e5ebe3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-wider text-[#2d6a4f] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                End-to-End Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14261C] mt-3">
                The Complete Farmer Journey
              </h2>
              <p className="text-sm text-[#5a7163] mt-2">
                A seamless path turning agricultural uncertainty into predictable profitability.
              </p>
            </div>

            {/* Horizontal 5-Step Visual Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {[
                {
                  step: '01',
                  title: 'DIAGNOSE',
                  desc: 'Detect fungal, pest, and nutrient stresses instantly with AI imaging.',
                  icon: Sprout,
                  color: 'from-amber-50 to-white border-amber-300 text-amber-900',
                  badge: 'Step 01',
                },
                {
                  step: '02',
                  title: 'PLAN',
                  desc: 'Align irrigation, fertilization, and spraying with hyper-local microclimate signals.',
                  icon: Activity,
                  color: 'from-sky-50 to-white border-sky-300 text-sky-900',
                  badge: 'Step 02',
                },
                {
                  step: '03',
                  title: 'FINANCE',
                  desc: 'Unlock government subsidies (PM-KISAN, SMAM) and 4% subsidized credit.',
                  icon: IndianRupee,
                  color: 'from-emerald-50 to-white border-emerald-300 text-emerald-900',
                  badge: 'Step 03',
                },
                {
                  step: '04',
                  title: 'PROTECT',
                  desc: 'Safeguard grains in certified e-NWR warehouses to prevent distress post-harvest selling.',
                  icon: Warehouse,
                  color: 'from-indigo-50 to-white border-indigo-300 text-indigo-900',
                  badge: 'Step 04',
                },
                {
                  step: '05',
                  title: 'SELL FAIRLY',
                  desc: 'Compare multi-mandi prices and aggregate volume through farmer collectives.',
                  icon: TrendingUp,
                  color: 'from-teal-50 to-white border-teal-300 text-teal-900',
                  badge: 'Step 05',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className={`p-5 rounded-2xl bg-gradient-to-b ${item.color} border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-black/5 flex items-center justify-center font-bold text-sm text-[#14261C]">
                          <Icon className="w-5 h-5 text-[#2d6a4f]" />
                        </div>
                        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-white/80 border border-black/10">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-[#14261C]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#52695c] mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-[#1b4332]">
                      <span>Module Ready</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOUR FEATURE CARDS */}
        <section id="features" className="py-16 sm:py-24 bg-[#f8faf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-wider text-[#2d6a4f] uppercase bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14261C] mt-3">
                Built Specifically for Farmer Prosperity
              </h2>
              <p className="text-sm text-[#5a7163] mt-2">
                Four interconnected intelligence modules delivering targeted farm value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1: Smart Diagnosis */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e7df] shadow-sm hover:border-[#b7d5c2] hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-800">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#14261C]">
                      Smart Diagnosis
                    </h3>
                    <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      AI Computer Vision
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4c6254] leading-relaxed">
                  Identify crop problems and receive actionable recommendations. Early detection of wheat rust, nutrient deficiencies, and leaf blight with precise chemical and bio-spray dosages.
                </p>
                <div className="mt-5 pt-4 border-t border-[#edf1ea] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#718779]">
                    Trained on 50,000+ Indian crop pathology samples
                  </span>
                  <Link
                    href="/crop-doctor"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4332] hover:underline"
                  >
                    <span>Test Scanner</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 2: Farm Intelligence */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e7df] shadow-sm hover:border-[#b7d5c2] hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100/80 border border-sky-200 flex items-center justify-center text-sky-800">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#14261C]">
                      Farm Intelligence
                    </h3>
                    <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                      Multi-Signal Fusion
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4c6254] leading-relaxed">
                  Combine weather, soil and disease signals to improve decisions. Prevent wasted inputs with predictive rain alerts, humidity indexes, and tailored irrigation calendars for your exact acreages.
                </p>
                <div className="mt-5 pt-4 border-t border-[#edf1ea] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#718779]">
                    Includes 5-day hyper-local spray window advisory
                  </span>
                  <Link
                    href="/farm-intelligence"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4332] hover:underline"
                  >
                    <span>View Weather &amp; Soil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 3: Financial Empowerment */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e7df] shadow-sm hover:border-[#b7d5c2] hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-800">
                    <IndianRupee className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#14261C]">
                      Financial Empowerment
                    </h3>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Schemes &amp; Subsidies
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4c6254] leading-relaxed">
                  Discover relevant schemes and understand farmer financial health. Real-time eligibility checking for PM-KISAN, crop insurance (PMFBY), and solar pump subsidies with zero paperwork friction.
                </p>
                <div className="mt-5 pt-4 border-t border-[#edf1ea] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#718779]">
                    Kisan Credit Card (KCC) 4% interest subvention assistance
                  </span>
                  <Link
                    href="/finance"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4332] hover:underline"
                  >
                    <span>Check Schemes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 4: Fair Market Access */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e7df] shadow-sm hover:border-[#b7d5c2] hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100/80 border border-teal-200 flex items-center justify-center text-teal-800">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#14261C]">
                      Fair Market Access
                    </h3>
                    <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                      Mandi &amp; Storage
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#4c6254] leading-relaxed">
                  Compare selling options, storage and pooling opportunities. Discover which regional mandi offers the highest net margin after transport, or pool crops with your FPO for up to +8.5% bargaining power.
                </p>
                <div className="mt-5 pt-4 border-t border-[#edf1ea] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#718779]">
                    Live Meerut &amp; Hapur price comparison with MSP
                  </span>
                  <Link
                    href="/market"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4332] hover:underline"
                  >
                    <span>Compare Mandis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ONE CONNECTED FARMER JOURNEY */}
        <section id="connected" className="py-16 sm:py-24 bg-white border-t border-[#e5ebe3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-wider text-[#2d6a4f] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                System Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14261C] mt-3">
                One Connected Farmer Journey
              </h2>
              <p className="text-sm text-[#5a7163] mt-2">
                Information from different parts of farming is converted into actionable decisions.
              </p>
            </div>

            {/* Visual Connected Architecture Layout */}
            <div className="bg-[#f7f9f6] rounded-3xl p-6 sm:p-10 border border-[#e2e7df] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Stage 1: Field Signals */}
                <div className="bg-white rounded-2xl p-5 border border-[#e5ebe2] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-3">
                      INPUTS
                    </div>
                    <h4 className="text-base font-bold text-[#14261C]">
                      1. Continuous Farm Signals
                    </h4>
                    <ul className="text-xs text-[#52695c] mt-3 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Smartphone leaf photos of wheat tillers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Microclimate humidity &amp; 24h precipitation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Soil moisture and nitrogen balance
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#edf1ea] text-[11px] text-[#718779]">
                    Raw environmental &amp; biological data
                  </div>
                </div>

                {/* Stage 2: Intelligence Engine */}
                <div className="bg-gradient-to-b from-[#1b4332] to-[#122319] text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#52b788]/20 border border-[#52b788]/40 text-[#74c69d] flex items-center justify-center font-bold text-xs mb-3">
                      ENGINE
                    </div>
                    <h4 className="text-base font-bold text-white">
                      2. SmartFarm Intelligence
                    </h4>
                    <p className="text-xs text-[#c2d7cb] mt-2 leading-relaxed">
                      Synthesizes pathology models with upcoming weather fronts and mandi price trends. Cross-checks against government insurance and subsidy guidelines.
                    </p>
                    <div className="mt-4 p-2.5 rounded-xl bg-[#264b38] border border-[#3b7255] text-[11px] text-[#e0efe6]">
                      &quot;Fungal spore germination elevated + rain arriving tomorrow → Postpone spray 48h to prevent chemical runoff.&quot;
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#2d523f] text-[11px] text-[#8aa897]">
                    Multi-signal contextual reasoning
                  </div>
                </div>

                {/* Stage 3: Farmer Actions & Fair Realization */}
                <div className="bg-white rounded-2xl p-5 border border-[#e5ebe2] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-3">
                      ACTION
                    </div>
                    <h4 className="text-base font-bold text-[#14261C]">
                      3. Actionable Decisions
                    </h4>
                    <ul className="text-xs text-[#52695c] mt-3 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Save ₹1,400 on wasted pesticide spraying
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Deposit 40 bags in certified e-NWR warehouse
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Sell to Hapur Mandi for +₹85/quintal premium
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#edf1ea] text-[11px] text-[#718779]">
                    Maximized farmer income &amp; protection
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Callout to Dashboard */}
            <div className="mt-12 text-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#1b4332] hover:bg-[#265e45] text-white font-bold text-base shadow-lg shadow-[#1b4332]/15 hover:shadow-xl transition-all"
              >
                <span>Launch Ramesh Kumar&apos;s Live Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#14261C] text-[#c2d7cb] border-t border-[#223d2f] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#52b788] flex items-center justify-center text-[#14261C] font-bold">
              <Sprout className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-sm">SmartFarm</span>
            <span className="text-[#8aa897]">| Smart Farm Intelligence Platform</span>
          </div>

          <p className="text-[#8aa897]">
            Empowering rural livelihoods from diagnosis to fair market access.
          </p>

          <div className="flex items-center gap-4 text-[#a5c2b2]">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/crop-doctor" className="hover:text-white transition-colors">
              Crop Doctor
            </Link>
            <Link href="/market" className="hover:text-white transition-colors">
              Market
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

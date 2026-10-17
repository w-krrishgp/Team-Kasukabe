'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Sprout,
  Activity,
  IndianRupee,
  TrendingUp,
  Snowflake,
  MapPin,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { CURRENT_FARMER } from '@/data/mockData';

interface SidebarProps {
  onCloseMobile?: () => void;
}

export const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: Home,
    badge: 'Live',
    description: 'Farmer Overview',
  },
  {
    name: 'Crop Doctor',
    href: '/crop-doctor',
    icon: Sprout,
    badge: 'Alert',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'AI Diagnosis & Care',
  },
  {
    name: 'Farm Intelligence',
    href: '/farm-intelligence',
    icon: Activity,
    badge: null,
    description: 'Weather, Soil & Disease',
  },
  {
    name: 'Finance',
    href: '/finance',
    icon: IndianRupee,
    badge: 'Eligible',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Schemes & Health',
  },
  {
    name: 'Market',
    href: '/market',
    icon: TrendingUp,
    badge: '+MSP',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Fair Mandi Prices',
  },
  {
    name: 'Storage & Pooling',
    href: '/storage',
    icon: Snowflake,
    badge: 'Protect',
    description: 'Depots & Collectives',
  },
];

export default function Sidebar({ onCloseMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#14261C] text-[#e8f1ec] flex flex-col h-full border-r border-[#223d2f] select-none shadow-xl">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#223d2f] bg-[#0f1f16]/60">
        <Link
          href="/"
          onClick={onCloseMobile}
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#52b788] to-[#1b4332] p-0.5 shadow-md shadow-[#52b788]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#14261C] rounded-[14px] flex items-center justify-center">
              <Sprout className="w-6 h-6 text-[#52b788]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold tracking-tight text-white font-sans">
                SmartFarm
              </h1>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-[#52b788]/20 text-[#74c69d] border border-[#52b788]/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-[#9bb3a6] font-medium tracking-wide">
              Intelligence Platform
            </p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-[#799986]">
          Farmer Modules
        </div>

        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 group text-sm font-medium ${
                isActive
                  ? 'bg-[#264b38] text-white shadow-sm border border-[#3b7255]'
                  : 'text-[#c2d7cb] hover:bg-[#1a3325] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-[#52b788] text-[#0f1f16]'
                      : 'bg-[#1e382b] text-[#74c69d] group-hover:bg-[#284a39] group-hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="font-semibold text-[13.5px] leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#8aa897] truncate">
                    {item.description}
                  </div>
                </div>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    item.badgeColor
                      ? item.badgeColor
                      : 'bg-[#1e382b] text-[#a4c9b3] border-[#2d523f]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        {/* Journey Quick Access */}
        <div className="pt-6 px-1">
          <div className="p-3.5 rounded-2xl bg-gradient-to-b from-[#1b3627] to-[#122319] border border-[#2d523f]/70 text-xs shadow-inner">
            <div className="flex items-center gap-2 text-[#74c69d] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#e9c46a]" />
              <span>Full Farmer Journey</span>
            </div>
            <p className="text-[11px] text-[#a5c2b2] leading-relaxed mb-2.5">
              Diagnose → Plan → Finance → Protect → Sell Fairly
            </p>
            <Link
              href="/"
              onClick={onCloseMobile}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#e9c46a] hover:text-[#fae588] transition-colors"
            >
              <span>View Landing Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Farmer Profile Footer */}
      <div className="p-4 border-t border-[#223d2f] bg-[#0f1f16]/90">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-[#182f22] border border-[#294a37]">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4a373] to-[#e9c46a] text-[#14261C] flex items-center justify-center font-bold text-sm shadow">
              RK
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#14261C]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-sm text-white truncate">
              {CURRENT_FARMER.name}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#9bb3a6] truncate">
              <MapPin className="w-3 h-3 shrink-0 text-[#74c69d]" />
              <span className="truncate">{CURRENT_FARMER.location}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

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
  X,
  MapPin,
} from 'lucide-react';
import { CURRENT_FARMER } from '@/data/mockData';
import { NAV_ITEMS } from './Sidebar';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Slide-over Drawer for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs bg-[#14261C] text-white flex flex-col h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Header */}
            <div className="p-5 border-b border-[#223d2f] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#52b788] to-[#1b4332] flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">SmartFarm</h2>
                  <p className="text-[11px] text-[#8aa897]">Intelligence Platform</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#9bb3a6] hover:text-white rounded-lg hover:bg-[#1f3a2c]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#264b38] text-white font-semibold'
                        : 'text-[#c2d7cb] hover:bg-[#1a3325] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#74c69d]" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1e382b] text-[#74c69d] border border-[#2d523f]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer */}
            <div className="p-4 border-t border-[#223d2f] bg-[#0e1d15]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d4a373] text-[#14261C] flex items-center justify-center font-bold text-sm">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">
                    {CURRENT_FARMER.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#9bb3a6]">
                    <MapPin className="w-3 h-3 text-[#74c69d]" />
                    <span>{CURRENT_FARMER.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2e8df] lg:hidden px-2 py-1 shadow-lg">
        <div className="flex items-center justify-around">
          {[
            { href: '/dashboard', label: 'Home', icon: Home },
            { href: '/crop-doctor', label: 'Doctor', icon: Sprout },
            { href: '/farm-intelligence', label: 'Intel', icon: Activity },
            { href: '/finance', label: 'Finance', icon: IndianRupee },
            { href: '/market', label: 'Market', icon: TrendingUp },
            { href: '/storage', label: 'Storage', icon: Snowflake },
          ].map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center py-1.5 px-2 rounded-xl transition-colors ${
                  isActive
                    ? 'text-[#1b4332] font-bold'
                    : 'text-[#63796d] hover:text-[#1b4332]'
                }`}
              >
                <div
                  className={`p-1 rounded-lg ${
                    isActive ? 'bg-[#d8f3dc] text-[#1b4332]' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] mt-0.5 tracking-tight">
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

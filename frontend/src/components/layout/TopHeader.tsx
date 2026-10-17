'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  MapPin,
  Menu,
  X,
  AlertTriangle,
  CloudRain,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { CURRENT_FARMER } from '@/data/mockData';

interface TopHeaderProps {
  title: string;
  subtitle?: string;
  onOpenMobile?: () => void;
}

export default function TopHeader({
  title,
  subtitle,
  onOpenMobile,
}: TopHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  return (
    <header className="sticky top-0 z-30 bg-[#fbfbfa]/95 backdrop-blur-md border-b border-[#e2e7df] px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile trigger & Page Titles */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onOpenMobile}
            className="lg:hidden p-2 rounded-xl text-[#2d6a4f] hover:bg-[#eaf4ee] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#14261C] tracking-tight truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#5f7467] font-medium truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right: Farmer Identity & Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (showNotifications) setUnreadCount(0);
              }}
              className="relative p-2.5 rounded-full bg-white border border-[#e2e8df] text-[#2d6a4f] hover:bg-[#f0f6f2] hover:border-[#b7d5c2] shadow-sm transition-all focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#e76f51] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Popup */}
            {showNotifications && (
              <div className="absolute right-0 mt-2.5 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#dfe5dc] p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-[#edf1ea]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#14261C]">
                      Farmer Alerts
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                      Live
                    </span>
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-md"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2.5 mt-3">
                  {/* Alert 1 */}
                  <Link
                    href="/crop-doctor"
                    onClick={() => setShowNotifications(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 hover:bg-amber-100/60 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-amber-500 text-white shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-amber-950 group-hover:text-amber-800">
                        Wheat Crop Needs Attention
                      </p>
                      <p className="text-amber-800/90 text-[11px] mt-0.5 line-clamp-2">
                        Possible fungal issue detected. Tap to inspect yellow rust recommendations.
                      </p>
                    </div>
                  </Link>

                  {/* Alert 2 */}
                  <Link
                    href="/farm-intelligence"
                    onClick={() => setShowNotifications(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/60 hover:bg-blue-100/60 transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-500 text-white shrink-0">
                      <CloudRain className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-blue-950 group-hover:text-blue-800">
                        Rain Expected Tomorrow
                      </p>
                      <p className="text-blue-800/90 text-[11px] mt-0.5 line-clamp-2">
                        Postpone pesticide spraying to prevent runoff. Check window.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="mt-3 pt-2 text-center border-t border-[#edf1ea]">
                  <Link
                    href="/dashboard"
                    onClick={() => setShowNotifications(false)}
                    className="text-xs font-semibold text-[#2d6a4f] hover:underline"
                  >
                    View All Platform Signals
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Farmer Badge & Location */}
          <div className="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-[#e2e7df]">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#d4a373] to-[#e9c46a] text-[#14261C] flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm ring-2 ring-emerald-600/20">
                RK
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>

            <div className="hidden sm:block text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#14261C] leading-none">
                  {CURRENT_FARMER.name}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#d8f3dc] text-[#1b4332]">
                  Farmer
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#5f7467] mt-1 font-medium">
                <MapPin className="w-3 h-3 text-[#2d6a4f]" />
                <span>{CURRENT_FARMER.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

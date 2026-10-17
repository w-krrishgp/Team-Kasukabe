'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import MobileNav from './MobileNav';

interface AppShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function AppShell({ title, subtitle, children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fbfbfa]">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopHeader
          title={title}
          subtitle={subtitle}
          onOpenMobile={() => setMobileMenuOpen(true)}
        />

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-10">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Drawer & Persistent Bottom Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}

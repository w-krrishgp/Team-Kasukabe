import React from 'react';
import AppShell from '@/components/layout/AppShell';
import FarmerProfileCard from '@/components/dashboard/FarmerProfileCard';
import HealthOverview from '@/components/dashboard/HealthOverview';
import SmartActions from '@/components/dashboard/SmartActions';
import DecisionJourney from '@/components/dashboard/DecisionJourney';
import QuickActions from '@/components/dashboard/QuickActions';

export default function DashboardPage() {
  return (
    <AppShell
      title="Good morning, Ramesh 👋"
      subtitle="Here’s what needs your attention today."
    >
      <div className="space-y-6">
        {/* Farmer Profile Card */}
        <FarmerProfileCard />

        {/* Prominent Farm Health Overview */}
        <HealthOverview />

        {/* Today's Smart Actions */}
        <SmartActions />

        {/* Farmer Decision Journey */}
        <DecisionJourney />

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </AppShell>
  );
}

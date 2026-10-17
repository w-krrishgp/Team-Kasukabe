export interface FarmerProfile {
  name: string;
  location: string;
  state: string;
  district: string;
  farmSizeAcres: number;
  primaryCrop: string;
  cropStage: string;
  experienceYears: number;
  avatarUrl?: string;
  phoneNumber?: string;
  kccLimit: number;
}

export type RiskLevel = 'Low' | 'Medium' | 'High';
export type HealthStatus = 'Optimal' | 'Good' | 'Attention' | 'Critical';

export interface FarmHealthMetric {
  title: string;
  value: string;
  status: HealthStatus | RiskLevel;
  change?: string;
  accentColor: string;
  iconName: string;
  description: string;
}

export interface SmartActionItem {
  id: string;
  category: 'Crop Health' | 'Weather' | 'Disease Risk' | 'Market';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  urgency: 'Low' | 'Medium' | 'High';
  icon: string;
  tag: string;
}

export interface JourneyStage {
  step: string;
  name: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  href: string;
  icon: string;
  details: string;
}

export interface MandiPrice {
  mandiName: string;
  distanceKm: number;
  commodity: string;
  variety: string;
  pricePerQuintal: number;
  mspDifference: number; // positive = above MSP
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export interface SchemeItem {
  id: string;
  name: string;
  department: string;
  benefit: string;
  status: 'Enrolled' | 'Eligible' | 'Action Needed';
  deadline?: string;
  details: string;
  actionUrl: string;
}

export interface StorageFacility {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  capacityBags: number;
  availableBags: number;
  pricePerBagMonth: number;
  isENWRCompliant: boolean;
  securityRating: number;
  tags: string[];
}

export interface CropPool {
  id: string;
  title: string;
  leadFpo: string;
  commodity: string;
  targetQuintals: number;
  currentQuintals: number;
  negotiatedPremium: string;
  closingInDays: number;
  joinedFarmersCount: number;
}

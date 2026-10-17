import React from 'react';
import {
  UserCheck,
  MapPin,
  Tractor,
  Wheat,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { CURRENT_FARMER } from '@/data/mockData';

export default function FarmerProfileCard() {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2e7df] shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Farmer Info Left */}
        <div className="flex items-start sm:items-center gap-4">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#d4a373] via-[#bc6c25] to-[#e9c46a] text-white flex items-center justify-center font-extrabold text-2xl shadow-md ring-4 ring-[#d8f3dc]">
              RK
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 bg-emerald-600 rounded-full text-white border-2 border-white shadow">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#14261C] tracking-tight">
                {CURRENT_FARMER.name}
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-[#1b4332] border border-emerald-300">
                <UserCheck className="w-3 h-3" />
                Verified Farmer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#52695c] font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" />
                {CURRENT_FARMER.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#2d6a4f]" />
                {CURRENT_FARMER.phoneNumber}
              </span>
            </div>

            <p className="text-xs text-[#718779] pt-1">
              Registered with Western UP Farmer Producer Organization • PM-KISAN Beneficiary #9921
            </p>
          </div>
        </div>

        {/* 4 Key Farmer Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 bg-[#f8faf7] p-3.5 rounded-xl border border-[#e4eae0]">
          <div className="p-2 bg-white rounded-lg border border-[#e6ece3]">
            <div className="text-[11px] font-semibold text-[#667e70] uppercase flex items-center gap-1">
              <Tractor className="w-3 h-3 text-[#2d6a4f]" />
              Farm Size
            </div>
            <div className="text-sm sm:text-base font-bold text-[#14261C] mt-0.5">
              {CURRENT_FARMER.farmSizeAcres} acres
            </div>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#e6ece3]">
            <div className="text-[11px] font-semibold text-[#667e70] uppercase flex items-center gap-1">
              <Wheat className="w-3 h-3 text-[#d4a373]" />
              Primary Crop
            </div>
            <div className="text-sm sm:text-base font-bold text-[#14261C] mt-0.5 truncate">
              Wheat
            </div>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#e6ece3]">
            <div className="text-[11px] font-semibold text-[#667e70] uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Crop Stage
            </div>
            <div className="text-sm sm:text-base font-bold text-emerald-800 mt-0.5 truncate">
              {CURRENT_FARMER.cropStage.replace(' Stage', '')}
            </div>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#e6ece3]">
            <div className="text-[11px] font-semibold text-[#667e70] uppercase flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-600" />
              Experience
            </div>
            <div className="text-sm sm:text-base font-bold text-[#14261C] mt-0.5">
              {CURRENT_FARMER.experienceYears} years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

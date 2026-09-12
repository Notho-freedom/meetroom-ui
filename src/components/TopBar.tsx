import React from 'react';
import {
  VideoIcon,
  LockIcon,
  ClockIcon,
  ImageIcon,
  BarChart2Icon,
  SettingsIcon,
  MoreHorizontalIcon } from
'lucide-react';
export function TopBar() {
  return (
    <header className="flex items-center justify-between h-14 px-4 bg-[#0B1120] border-b border-[#1E293B] shrink-0">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
            <VideoIcon className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold text-sm hidden sm:inline">
            Madox
          </span>
        </div>

        {/* Room info pills */}
        <div className="flex items-center gap-2 ml-2">
          <div className="flex items-center gap-1.5 bg-[#1E293B] rounded-full px-3 py-1 text-sm text-white">
            <LockIcon className="w-3 h-3 text-muted-foreground" />
            <span>/product-strategy-q1</span>
          </div>
          <div className="bg-[#1E293B] rounded-full px-3 py-1 text-sm text-white hidden sm:block">
            6/100
          </div>
          <div className="flex items-center gap-1.5 bg-[#1E293B] rounded-full px-3 py-1 text-sm text-white">
            <ClockIcon className="w-3 h-3 text-muted-foreground" />
            <span>42:18</span>
          </div>
        </div>
      </div>

      {/* Right section - always visible */}
      <div className="flex items-center gap-3">
        {/* Recording badge */}
        <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-sm font-medium">Recording</span>
        </div>

        <button className="w-8 h-8 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <ImageIcon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <BarChart2Icon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <SettingsIcon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <MoreHorizontalIcon className="w-4 h-4" />
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
          SM
        </div>
      </div>
    </header>);

}
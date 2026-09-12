import React from 'react';
import {
  SearchIcon,
  VideoIcon,
  VideoOffIcon,
  MicIcon,
  MicOffIcon,
  MoreHorizontalIcon } from
'lucide-react';
export function PeoplePanel() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-white font-semibold text-sm">In the meeting</span>
        <span className="text-muted-foreground text-sm">6 people</span>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search participants..."
            className="w-full bg-[#1E293B] border border-[#2D3748] rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500" />
          
        </div>
      </div>

      {/* HOST section */}
      <div className="px-4 pb-2">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Host
        </span>
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#A78BFA] flex items-center justify-center text-white text-xs font-bold shrink-0">
            SM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">
              Sarah Mitchell (You)
            </p>
            <p className="text-muted-foreground text-xs">Host</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-red-400 hover:bg-[#1E293B] transition-colors">
              <MicOffIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PARTICIPANTS section */}
      <div className="px-4 pb-2">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Participants
        </span>
      </div>
      <div className="px-4 space-y-3 pb-4">
        {/* John Davis */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#60A5FA] flex items-center justify-center text-white text-xs font-bold shrink-0">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">John Davis</p>
            <p className="text-muted-foreground text-xs">Co-host</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <MicIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Emma Wilson */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F472B6] flex items-center justify-center text-white text-xs font-bold shrink-0">
            EW
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Emma Wilson</p>
            <p className="text-muted-foreground text-xs">Mobile Lead</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-red-400 hover:bg-[#1E293B] transition-colors">
              <MicOffIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Michael Thompson */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#34D399] flex items-center justify-center text-white text-xs font-bold shrink-0">
            MT
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Michael Thompson</p>
            <p className="text-muted-foreground text-xs">Backend Engineer</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <MicIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lisa Chen */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FBBF24] flex items-center justify-center text-white text-xs font-bold shrink-0">
            LC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Lisa Chen</p>
            <p className="text-muted-foreground text-xs">UX Designer</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <MicIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Robert Anderson */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#A78BFA] flex items-center justify-center text-white text-xs font-bold shrink-0">
            RA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Robert Anderson</p>
            <p className="text-muted-foreground text-xs">Product Manager</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded flex items-center justify-center text-green-400 hover:bg-[#1E293B] transition-colors">
              <VideoIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-red-400 hover:bg-[#1E293B] transition-colors">
              <MicOffIcon className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded flex items-center justify-center text-muted-foreground hover:bg-[#1E293B] transition-colors">
              <MoreHorizontalIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* WAITING ROOM section */}
      <div className="px-4 pb-2 pt-2 border-t border-[#1E293B]">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Waiting Room (3)
        </span>
      </div>
      <div className="px-4 space-y-3 pb-4">
        {/* Alex Johnson */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold shrink-0">
            AJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Alex Johnson</p>
            <p className="text-red-400 text-xs">Waiting to join</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs text-white font-medium transition-colors">
              Admit
            </button>
            <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs text-white font-medium transition-colors">
              Deny
            </button>
          </div>
        </div>

        {/* Maria Garcia */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-xs font-bold shrink-0">
            MG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">Maria Garcia</p>
            <p className="text-red-400 text-xs">Waiting to join</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs text-white font-medium transition-colors">
              Admit
            </button>
            <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs text-white font-medium transition-colors">
              Deny
            </button>
          </div>
        </div>

        {/* David Kim */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-xs font-bold shrink-0">
            DK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">David Kim</p>
            <p className="text-red-400 text-xs">Waiting to join</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs text-white font-medium transition-colors">
              Admit
            </button>
            <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs text-white font-medium transition-colors">
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>);

}
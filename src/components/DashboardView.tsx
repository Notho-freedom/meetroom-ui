import React from 'react';
import {
  UsersIcon,
  CheckCircle2Icon,
  CircleIcon,
  DownloadIcon,
  SparklesIcon,
  LightbulbIcon,
  PlusIcon,
  Maximize2Icon,
  BarChart2Icon,
  FileTextIcon,
  MessageSquareTextIcon } from
'lucide-react';
export function DashboardView() {
  return (
    <div className="px-3 pb-4 space-y-4">
      {/* Waiting Room Banner */}
      <div className="bg-[#1E293B] rounded-xl p-4 border border-[#2D3748] border-l-4 border-l-blue-500 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <UsersIcon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              3 people waiting to join
            </p>
            <p className="text-muted-foreground text-xs">
              Alex Johnson, Maria Garcia, David Kim
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm text-white font-medium transition-colors">
            Admit All
          </button>
          <button className="px-4 py-2 bg-[#2D3748] hover:bg-[#374151] border border-[#4B5563] rounded-lg text-sm text-white font-medium transition-colors">
            View List
          </button>
        </div>
      </div>

      {/* AI Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Live Transcription */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-[#2D3748]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <MessageSquareTextIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">
                Live Transcription
              </span>
            </div>
            <button className="w-7 h-7 rounded hover:bg-[#2D3748] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
              <Maximize2Icon className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-blue-400 font-medium">John:</span>
              <span className="text-gray-300 ml-1.5">
                I think we should focus on the Q1 roadmap first...
              </span>
            </p>
            <p className="text-sm">
              <span className="text-pink-400 font-medium">Emma:</span>
              <span className="text-gray-300 ml-1.5">
                Agreed, let's prioritize the mobile features.
              </span>
            </p>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-[#2D3748]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                <FileTextIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">
                AI Summary
              </span>
            </div>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
              Live
            </span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span className="text-gray-300 text-sm">
                Q1 roadmap discussion initiated
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2Icon className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span className="text-gray-300 text-sm">
                Mobile features prioritized
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CircleIcon className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <span className="text-gray-500 text-sm">
                Waiting for action items...
              </span>
            </div>
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-[#1E293B] rounded-xl p-5 border border-[#2D3748]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <BarChart2Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">
                Engagement
              </span>
            </div>
            <span className="px-2 py-0.5 text-green-400 text-xs font-medium">
              High
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-gray-300 text-sm">Participation</span>
                <span className="text-green-400 text-sm font-semibold">
                  87%
                </span>
              </div>
              <div className="w-full h-2 bg-[#2D3748] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: '87%'
                  }} />
                
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-gray-300 text-sm">Focus Level</span>
                <span className="text-green-400 text-sm font-semibold">
                  92%
                </span>
              </div>
              <div className="w-full h-2 bg-[#2D3748] rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full"
                  style={{
                    width: '92%'
                  }} />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared File Card */}
      <div className="bg-[#1E293B] rounded-xl p-5 border border-[#2D3748]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <FileTextIcon className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                Q1_Strategy-Deck.pdf
              </p>
              <p className="text-muted-foreground text-xs">
                Shared by John Davis • 2.4 MB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#2D3748] hover:bg-[#374151] border border-[#4B5563] rounded-lg text-sm text-white font-medium transition-colors">
              <DownloadIcon className="w-4 h-4" />
              Download
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm text-white font-medium transition-colors">
              <SparklesIcon className="w-4 h-4" />
              Ask AI
            </button>
          </div>
        </div>

        {/* AI Suggested Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2.5 bg-[#0F172A] rounded-lg p-3 cursor-pointer hover:bg-[#162032] transition-colors">
            <LightbulbIcon className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">
                What are the key priorities for Q1?
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">
                AI suggested question
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-[#0F172A] rounded-lg p-3 cursor-pointer hover:bg-[#162032] transition-colors">
            <LightbulbIcon className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">
                What's the budget allocation breakdown?
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">
                AI suggested question
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breakout Rooms */}
      <div className="bg-[#1E293B] rounded-xl p-5 border border-[#2D3748]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <UsersIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Breakout Rooms</p>
              <p className="text-muted-foreground text-xs">
                Create focused discussion groups
              </p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm text-white font-medium transition-colors">
            <PlusIcon className="w-4 h-4" />
            Create Rooms
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Room 1 */}
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#2D3748]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white text-sm font-semibold">
                Room 1: Mobile Team
              </p>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-7 h-7 rounded-full bg-[#60A5FA] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0F172A]">
                JD
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F472B6] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0F172A] -ml-2">
                EW
              </div>
            </div>
            <p className="text-muted-foreground text-xs">
              2 participants • 15:32
            </p>
          </div>

          {/* Room 2 */}
          <div className="bg-[#0F172A] rounded-lg p-4 border border-[#2D3748]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white text-sm font-semibold">
                Room 2: Backend Team
              </p>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-7 h-7 rounded-full bg-[#34D399] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0F172A]">
                MT
              </div>
              <div className="w-7 h-7 rounded-full bg-[#FBBF24] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0F172A] -ml-2">
                LC
              </div>
            </div>
            <p className="text-muted-foreground text-xs">
              2 participants • 12:08
            </p>
          </div>

          {/* Create New Room */}
          <div className="bg-transparent rounded-lg p-4 border border-dashed border-[#4B5563] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#0F172A]/50 transition-colors min-h-[120px]">
            <div className="w-10 h-10 rounded-full border border-[#4B5563] flex items-center justify-center">
              <PlusIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-muted-foreground text-sm">
              Create New Room
            </span>
          </div>
        </div>
      </div>
    </div>);

}
import React, { useState } from 'react';
import {
  SparklesIcon,
  ListIcon,
  FileTextIcon,
  PaperclipIcon,
  SendIcon,
  HelpCircleIcon,
  BotIcon } from
'lucide-react';
export function ChatPanel() {
  const [message, setMessage] = useState('');
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* John Davis message */}
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-[#60A5FA] flex items-center justify-center text-white text-xs font-bold shrink-0">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm">
                John Davis
              </span>
              <span className="text-muted-foreground text-xs">10:23 AM</span>
            </div>
            <p className="text-gray-300 text-sm mt-0.5">
              Hey everyone! Let's start by reviewing the Q1 roadmap. I've shared
              the deck.
            </p>
          </div>
        </div>

        {/* Emma Wilson message */}
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F472B6] flex items-center justify-center text-white text-xs font-bold shrink-0">
            EW
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm">
                Emma Wilson
              </span>
              <span className="text-muted-foreground text-xs">10:24 AM</span>
            </div>
            <p className="text-gray-300 text-sm mt-0.5">
              Thanks John! Looking at it now. The mobile priorities look great.
            </p>
          </div>
        </div>

        {/* Michael Thompson message */}
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-[#34D399] flex items-center justify-center text-white text-xs font-bold shrink-0">
            MT
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm">
                Michael Thompson
              </span>
              <span className="text-muted-foreground text-xs">10:25 AM</span>
            </div>
            <p className="text-gray-300 text-sm mt-0.5">
              Should we discuss the backend infrastructure updates? I have some
              concerns about scalability.
            </p>
          </div>
        </div>

        {/* Madox AI message */}
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white shrink-0">
            <BotIcon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm">Madox AI</span>
              <span className="text-muted-foreground text-xs">
                AI Assistant
              </span>
              <span className="text-muted-foreground text-xs">10:26 AM</span>
            </div>
            <p className="text-gray-300 text-sm mt-0.5">
              Based on the discussion, I've identified 3 key action items:
            </p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                Review mobile feature priorities – Emma Wilson
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                Prepare scalability analysis – Michael Thompson
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                Schedule infrastructure meeting – Due: Friday
              </li>
            </ul>
          </div>
        </div>

        {/* Lisa Chen message */}
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F472B6] flex items-center justify-center text-white text-xs font-bold shrink-0">
            LC
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-semibold text-sm">
                Lisa Chen
              </span>
              <span className="text-muted-foreground text-xs">10:27 AM</span>
            </div>
            <p className="text-gray-300 text-sm mt-0.5">
              Perfect! I'll coordinate with the design team on the UI updates.
            </p>
          </div>
        </div>

        {/* You message (right-aligned) */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-muted-foreground text-xs">10:28 AM</span>
            <span className="text-white font-semibold text-sm">You</span>
            <div className="w-7 h-7 rounded-full bg-[#A78BFA] flex items-center justify-center text-white text-[10px] font-bold">
              SM
            </div>
          </div>
          <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
            <p className="text-white text-sm">
              Great progress everyone! Let's reconvene after the breakout
              sessions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-[#1E293B] p-3 space-y-3">
        {/* Quick actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-[#1E293B] hover:bg-[#2D3748] rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors">
            <SparklesIcon className="w-3 h-3" />
            Ask AI
          </button>
          <button className="flex items-center gap-1.5 bg-[#1E293B] hover:bg-[#2D3748] rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors">
            <ListIcon className="w-3 h-3" />
            Action Items
          </button>
          <button className="flex items-center gap-1.5 bg-[#1E293B] hover:bg-[#2D3748] rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors">
            <FileTextIcon className="w-3 h-3" />
            Summary
          </button>
        </div>

        {/* Input row */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors shrink-0">
            <PaperclipIcon className="w-4 h-4" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full bg-[#1E293B] border border-[#2D3748] rounded-lg px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500" />
            
          </div>
          <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors shrink-0">
            <SendIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Help button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 rounded-full px-3 py-1.5 text-xs text-white font-medium transition-colors">
            <HelpCircleIcon className="w-3.5 h-3.5" />
            Help
          </button>
        </div>
      </div>
    </div>);

}
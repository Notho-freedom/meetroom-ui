import React from 'react';
import {
  VideoIcon,
  VideoOffIcon,
  MicIcon,
  MicOffIcon,
  MonitorIcon,
  CircleIcon,
  SmileIcon,
  MessageSquareIcon,
  UsersIcon,
  MoreHorizontalIcon,
  PhoneOffIcon,
  HelpCircleIcon,
  LayoutGridIcon,
  HandIcon,
  MaximizeIcon } from
'lucide-react';
interface BottomToolbarProps {
  isMicMuted: boolean;
  isCameraOn: boolean;
  activePanel: 'none' | 'chat' | 'people';
  showDashboard: boolean;
  onToggleMic: () => void;
  onToggleCamera: () => void;
  onToggleChat: () => void;
  onTogglePeople: () => void;
  onToggleDashboard: () => void;
}
export function BottomToolbar({
  isMicMuted,
  isCameraOn,
  activePanel,
  showDashboard,
  onToggleMic,
  onToggleCamera,
  onToggleChat,
  onTogglePeople,
  onToggleDashboard
}: BottomToolbarProps) {
  return (
    <div className="flex items-center justify-between h-20 px-4 bg-[#0B1120] border-t border-[#1E293B] shrink-0">
      {/* Left group */}
      <div className="flex items-center gap-1">
        <button className="w-10 h-10 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <HelpCircleIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <LayoutGridIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <HandIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Center group */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Camera */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onToggleCamera}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${isCameraOn ? 'bg-[#1E293B] text-white hover:bg-[#2D3748]' : 'bg-red-500 text-white hover:bg-red-600'}`}>
            
            {isCameraOn ?
            <VideoIcon className="w-5 h-5" /> :

            <VideoOffIcon className="w-5 h-5" />
            }
          </button>
          <span className="text-[10px] text-muted-foreground">Camera</span>
        </div>

        {/* Mic */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onToggleMic}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${isMicMuted ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-[#1E293B] text-white hover:bg-[#2D3748]'}`}>
            
            {isMicMuted ?
            <MicOffIcon className="w-5 h-5" /> :

            <MicIcon className="w-5 h-5" />
            }
          </button>
          <span className="text-[10px] text-muted-foreground">Mic</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-1">
          <button className="w-11 h-11 rounded-full bg-[#1E293B] text-white hover:bg-[#2D3748] flex items-center justify-center transition-colors">
            <MonitorIcon className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-muted-foreground">Share</span>
        </div>

        {/* Record */}
        <div className="flex flex-col items-center gap-1">
          <button className="w-11 h-11 rounded-full bg-[#1E293B] text-white hover:bg-[#2D3748] flex items-center justify-center transition-colors relative">
            <CircleIcon className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0B1120]" />
          </button>
          <span className="text-[10px] text-muted-foreground">Record</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center gap-1">
          <button className="w-11 h-11 rounded-full bg-[#1E293B] text-white hover:bg-[#2D3748] flex items-center justify-center transition-colors">
            <SmileIcon className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-muted-foreground">React</span>
        </div>

        {/* Chat */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onToggleChat}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors relative ${activePanel === 'chat' ? 'bg-[#2D3748] text-white' : 'bg-[#1E293B] text-white hover:bg-[#2D3748]'}`}>
            
            <MessageSquareIcon className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold flex items-center justify-center text-white">
              3
            </span>
          </button>
          <span className="text-[10px] text-muted-foreground">Chat</span>
        </div>

        {/* People */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={onTogglePeople}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors relative ${activePanel === 'people' ? 'bg-[#2D3748] text-white' : 'bg-[#1E293B] text-white hover:bg-[#2D3748]'}`}>
            
            <UsersIcon className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold flex items-center justify-center text-white">
              6
            </span>
          </button>
          <span className="text-[10px] text-muted-foreground">People</span>
        </div>

        {/* More */}
        <div className="flex flex-col items-center gap-1">
          <button className="w-11 h-11 rounded-full bg-[#1E293B] text-white hover:bg-[#2D3748] flex items-center justify-center transition-colors">
            <MoreHorizontalIcon className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-muted-foreground">More</span>
        </div>

        {/* Leave */}
        <div className="flex flex-col items-center gap-1">
          <button className="w-11 h-11 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center transition-colors">
            <PhoneOffIcon className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-muted-foreground">Leave</span>
        </div>
      </div>

      {/* Right group */}
      <div className="flex items-center gap-1">
        <button
          onClick={onToggleDashboard}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${showDashboard ? 'bg-[#1E293B] text-white' : 'text-muted-foreground hover:bg-[#1E293B] hover:text-white'}`}>
          
          <LayoutGridIcon className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-lg hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          <MaximizeIcon className="w-5 h-5" />
        </button>
      </div>
    </div>);

}
import React from 'react';
import { XIcon } from 'lucide-react';
import { ChatPanel } from './ChatPanel';
import { PeoplePanel } from './PeoplePanel';
interface SidebarPanelProps {
  activePanel: 'chat' | 'people';
  onSwitchPanel: (panel: 'chat' | 'people') => void;
  onClose: () => void;
}
export function SidebarPanel({
  activePanel,
  onSwitchPanel,
  onClose
}: SidebarPanelProps) {
  return (
    <div className="w-[380px] bg-[#0F172A] border-l border-[#1E293B] flex flex-col shrink-0 h-full">
      {/* Header with tabs */}
      <div className="flex items-center justify-between px-4 h-12 border-b border-[#1E293B] shrink-0">
        <div className="flex items-center gap-1">
          {/* Recording dot */}
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mr-3" />

          <button
            onClick={() => onSwitchPanel('chat')}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${activePanel === 'chat' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}>
            
            Chat
          </button>
          <button
            onClick={() => onSwitchPanel('people')}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${activePanel === 'people' ? 'text-white' : 'text-muted-foreground hover:text-white'}`}>
            
            People
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded hover:bg-[#1E293B] flex items-center justify-center text-muted-foreground hover:text-white transition-colors">
          
          <XIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-hidden">
        {activePanel === 'chat' ? <ChatPanel /> : <PeoplePanel />}
      </div>
    </div>);

}
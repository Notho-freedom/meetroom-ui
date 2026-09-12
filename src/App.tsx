import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { VideoGrid } from './components/VideoGrid';
import { BottomToolbar } from './components/BottomToolbar';
import { SidebarPanel } from './components/SidebarPanel';
import { DashboardView } from './components/DashboardView';
export function App() {
  const [activePanel, setActivePanel] = useState<'none' | 'chat' | 'people'>(
    'chat'
  );
  const [showDashboard, setShowDashboard] = useState(true);
  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const handleToggleChat = () => {
    setActivePanel((prev) => prev === 'chat' ? 'none' : 'chat');
  };
  const handleTogglePeople = () => {
    setActivePanel((prev) => prev === 'people' ? 'none' : 'people');
  };
  const handleSwitchPanel = (panel: 'chat' | 'people') => {
    setActivePanel(panel);
  };
  const handleClosePanel = () => {
    setActivePanel('none');
  };
  return (
    <div className="dark flex flex-col h-screen w-full bg-[#0B1120] text-foreground overflow-hidden">
      {/* Top Bar */}
      <TopBar />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Video + Dashboard area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <VideoGrid />
          {showDashboard && <DashboardView />}
        </div>

        {/* Sidebar */}
        {activePanel !== 'none' &&
        <SidebarPanel
          activePanel={activePanel}
          onSwitchPanel={handleSwitchPanel}
          onClose={handleClosePanel} />

        }
      </div>

      {/* Bottom Toolbar */}
      <BottomToolbar
        isMicMuted={isMicMuted}
        isCameraOn={isCameraOn}
        activePanel={activePanel}
        showDashboard={showDashboard}
        onToggleMic={() => setIsMicMuted((prev) => !prev)}
        onToggleCamera={() => setIsCameraOn((prev) => !prev)}
        onToggleChat={handleToggleChat}
        onTogglePeople={handleTogglePeople}
        onToggleDashboard={() => setShowDashboard((prev) => !prev)} />
      
    </div>);

}
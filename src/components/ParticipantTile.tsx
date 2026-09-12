import React from 'react';
import { MicIcon, MicOffIcon } from 'lucide-react';
interface ParticipantTileProps {
  name: string;
  initials: string;
  color: string;
  isMuted: boolean;
  isYou?: boolean;
  isActiveSpeaker?: boolean;
}
export function ParticipantTile({
  name,
  initials,
  color,
  isMuted,
  isYou,
  isActiveSpeaker
}: ParticipantTileProps) {
  return (
    <div
      className={`relative bg-[#1E293B] rounded-xl flex items-center justify-center min-h-[180px] md:min-h-[220px] transition-all ${isActiveSpeaker ? 'ring-2 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : ''}`}>
      
      {/* Avatar */}
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
        style={{
          backgroundColor: color
        }}>
        
        {initials}
      </div>

      {/* Name badge */}
      <div className="absolute bottom-3 left-3">
        <div className="flex items-center gap-1.5 bg-[#0F172A]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
          {isMuted ?
          <MicOffIcon className="w-3.5 h-3.5 text-red-400" /> :

          <MicIcon className="w-3.5 h-3.5 text-green-400" />
          }
          <span className="text-white text-xs font-medium">
            {name}
            {isYou ? ' (You)' : ''}
          </span>
        </div>
      </div>
    </div>);

}
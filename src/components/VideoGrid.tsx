import React from 'react';
import { ParticipantTile } from './ParticipantTile';
export function VideoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 p-3 flex-1">
      <ParticipantTile
        name="Sarah Mitchell"
        initials="SM"
        color="#A78BFA"
        isMuted={true}
        isYou={true}
        isActiveSpeaker={true} />
      
      <ParticipantTile
        name="John Davis"
        initials="JD"
        color="#60A5FA"
        isMuted={false} />
      
      <ParticipantTile
        name="Emma Wilson"
        initials="EW"
        color="#F472B6"
        isMuted={true} />
      
      <ParticipantTile
        name="Michael Thompson"
        initials="MT"
        color="#34D399"
        isMuted={false} />
      
      <ParticipantTile
        name="Lisa Chen"
        initials="LC"
        color="#FBBF24"
        isMuted={false} />
      
      <ParticipantTile
        name="Robert Anderson"
        initials="RA"
        color="#A78BFA"
        isMuted={true} />
      
    </div>);

}
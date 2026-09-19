# Meetroom UI

> A focused meeting-room interface prototype built around video, participant panels, meeting controls, and a persistent meeting dashboard.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## Live Demo

🚀 [Open the production deployment](https://meetroom-6hy8x0s4o-ravels-projects-13eaae80.vercel.app)

## Overview

Meetroom UI is a dedicated meeting-room screen extracted into a compact, interactive prototype.

The main composition is deliberately close to a real conferencing product:

- a top meeting bar
- a central participant/video area
- a meeting dashboard
- contextual chat / people panels
- a bottom call-control toolbar

## Main Features

### Video Grid

The main room is organized around a participant/video grid component designed to act as the visual center of the experience.

### Dashboard Layer

The dashboard can remain visible beneath the meeting area and can be toggled from the bottom toolbar.

This gives the prototype a second information layer without replacing the meeting context.

### Chat & People Panels

The side panel can switch between:

- Chat
- People

The panel can also be closed to reclaim the room width.

### Meeting Controls

The bottom toolbar exposes interactive state for:

- microphone mute/unmute
- camera on/off
- chat panel
- people panel
- dashboard visibility

### Responsive Composition

The layout is built around flex-based regions so the room, sidebar, and toolbar can adapt to the available viewport.

## Interaction State

The main application currently tracks:

\`\`\`text
activePanel   → none | chat | people
showDashboard → boolean
isMicMuted    → boolean
isCameraOn    → boolean
\`\`\`

The state is local to the prototype and drives the UI directly.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Emotion
- Lucide React

## Project Structure

\`\`\`text
src/
├── components/
│   ├── TopBar
│   ├── VideoGrid
│   ├── BottomToolbar
│   ├── SidebarPanel
│   └── DashboardView
└── App.tsx
\`\`\`

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install

\`\`\`bash
npm install
\`\`\`

### Run locally

\`\`\`bash
npm run dev
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

### Lint

\`\`\`bash
npm run lint
\`\`\`

## Prototype Scope

This repository focuses on the **meeting-room experience itself**, not on implementing a complete communication stack.

The microphone and camera controls are UI state in the prototype. They are not, by themselves, a WebRTC/media implementation.

Likewise, the participant area and dashboard are presentation components rather than a production meeting backend.

## License

No explicit open-source license is currently defined in the repository.

---

A compact experiment in building a dense, modern conferencing workspace without unnecessary chrome.
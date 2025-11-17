# Kanban Board

Kanban board built with React, TypeScript, Vite and styled with Typescript.

## Features

- Three default swimlanes (To Do / In Progress / Done) with live card counts
- Drag-and-drop powered by `@dnd-kit/core` with collision-aware column moves
- Persistent state via `zustand` + localStorage so cards survive refreshes
- Inline card editing, quick delete, and in-column creation
- Tailwind-driven styling layered on a gradient shell and sticky navbar

##  Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev


```

The app boots at [http://localhost:5173](http://localhost:5173) by default.

##  Project Structure

```
src/
├── components/
│   ├── add-card/        // inline composer
│   ├── board/           // DnD context + board layout
│   ├── card/            // single draggable card
│   ├── colomn/          // column shell & droppable integration
│   └── navbar/          // sticky top bar
├── store/
│   └── boardStore.ts    // zustand slice for cards
├── types/               // shared interfaces
├── App.tsx              // shell + hero + board
└── main.tsx             // React/Vite bootstrap

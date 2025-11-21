---
title: "Two Players"
rank: 1
size: large
description: "A web platform for playing classic combinatorial games online, with support for multiple games, room system, and real-time chat."
tags: ["Web", "SvelteKit", "Go", "WebSockets"]
---

> A web platform for playing classic combinatorial games online, with support for multiple games, room system, and real-time chat.

## Features

- **Multiple games**: Tic-Tac-Toe, Domineering, Nim, and more
- **Real-time gameplay** with WebSockets
- **In-game chat** to communicate with your opponent
- **Rematch system** for playing multiple rounds
- **Modern and responsive interface** with clean design

<div class="tabbed-images">
    <div class="tabs">
        <button class="tab active" data-index="0">
            <span class="tab-filename">landing.webp</span>
        </button>
        <button class="tab" data-index="1">
            <span class="tab-filename">tic-tac-toe_lobby.webp</span>
        </button>
        <button class="tab" data-index="2">
            <span class="tab-filename">domineering.webp</span>
        </button>
    </div>
    <div class="tab-content">
        <div class="tab-panel active" data-panel="0">
            <div class="img-frame">
                <a href="/images/projects/two-players.org_landing.webp" class="glightbox" data-description="two-players.org landing page">
                    <img src="/images/projects/two-players.org_landing.webp" alt="two-players.org landing page" />
                </a>
                two-players.org landing page
            </div>
        </div>
        <div class="tab-panel" data-panel="1">
            <div class="img-frame">
                <a href="/images/projects/two-players.org_tic-tac-toe_lobby.webp" class="glightbox" data-description="Game lobby for tic-tac-toe.">
                    <img src="/images/projects/two-players.org_tic-tac-toe_lobby.webp" alt="Game lobby with player list" />
                </a>
                Game lobby for tic-tac-toe.
            </div>
        </div>
        <div class="tab-panel" data-panel="2">
            <div class="img-frame">
                <a href="/images/projects/two-players.org_domineering.webp" class="glightbox" data-description="Playing Domineering on two-players.org">
                    <img src="/images/projects/two-players.org_domineering.webp" alt="Playing Domineering" />
                </a>
                Playing Domineering on two-players.org
            </div>
        </div>
    </div>
</div>

## Tech Stack

- **Backend:** Go, PostgreSQL, WebSockets, sqlc, go-migrate
- **Frontend:** SvelteKit, TypeScript, TailwindCSS, Bun

## What I Learned

- Implemented **real-time communication** with WebSockets for multiple simultaneous games
- Designed a **modular game architecture** that allows adding new games easily
- Managed database **migrations** using `go-migrate`
- Built a scalable **fullstack architecture** with Go + SvelteKit
- Implemented a **room system** with real-time state management
- Improved skills in designing **responsive user interfaces** with TailwindCSS
- Learned to build frontend applications using **reusable components** in Svelte
- Developed **combinatorial game logic** and winner detection
- Deployed the application on a **VPS**, strengthening my Linux and **deployment** skills

## Links

- [GitHub Repository](https://github.com/DCCXXV/two-players.org)
- [Live Demo](https://two-players.org)

---
title: "Two Players"
rank: 1
size: large
description: "A web platform for playing classic combinatorial games online, with support for multiple games, room system, and real-time chat."
tags: ["Web", "SvelteKit", "Go", "WebSockets"]
---

> A web platform for playing classic combinatorial games online, with support for multiple games, room system, and real-time chat.

## Why I Built This

While exploring Wikipedia I randomly came across the combinatorial game theory page and found it really interesting. I picked up _Lessons in Play_ based on the recommendations, and on the first chapter it told me to go play some games of Domineering with a friend first. However, I didn't have dominoes nor a board to play on, looking online I didn't see any place these classic combinatorial games... So I built one. This project became my way to explore both game theory and full-stack development, and now there is a platform where anyone can play these games with friends online ^^

Play here!: https://two-players.org

## Features

- **Multiple games**: Tic-Tac-Toe, Domineering, Dots and Boxes, and more
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

- **Real-time Architecture**: Implemented WebSocket-based pub/sub system with goroutine per client pattern, handling concurrent connections with mutex guards and non-blocking channel queues
- **Modular Game System**: Designed extensible game architecture using factory pattern and interfaces, allowing seamless addition of new games
- **Concurrent State Management**: Built thread safe room system with lazy loading and automatic cleanup of stale connections
- **Database Integration**: Managed schema migrations with `go-migrate` and generated type-safe queries using `sqlc`
- **Modern Frontend Development**: Created reactive UI with SvelteKit components and TailwindCSS, implementing real-time state synchronization
- **Production Deployment**: Deployed fullstack application on VPS, managing Linux services and PostgreSQL database

## Links

- [Site](https://two-players.org)
- [GitHub Repository](https://github.com/DCCXXV/two-players.org)

---
title: "Two Players"
date: 2025-11-15
description: "Una plataforma web para jugar juegos combinatorios clásicos en línea, con soporte para múltiples juegos, sistema de salas y chat en tiempo real."
tags: ["Web", "SvelteKit", "Go", "WebSockets"]
---

> Una plataforma web para jugar juegos combinatorios clásicos en línea, con soporte para múltiples juegos, sistema de salas y chat en tiempo real.

## Características
- **Múltiples juegos**: Tic-Tac-Toe, Domineering, Nim y más
- **Juego en tiempo real** con WebSockets
- **Chat en juego** para comunicarse con tu oponente
- **Sistema de revancha** para jugar múltiples rondas
- **Interfaz moderna y responsiva** con diseño limpio


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
                <a href="/images/projects/two-players.org_landing.webp" class="glightbox" data-description="Página principal de two-players.org">
                    <img src="/images/projects/two-players.org_landing.webp" alt="Página principal de two-players.org" />
                </a>
                Página principal de two-players.org
            </div>
        </div>
        <div class="tab-panel" data-panel="1">
            <div class="img-frame">
                <a href="/images/projects/two-players.org_tic-tac-toe_lobby.webp" class="glightbox" data-description="Lobby de juego para tic-tac-toe.">
                    <img src="/images/projects/two-players.org_tic-tac-toe_lobby.webp" alt="Lobby de juego con lista de jugadores" />
                </a>
                Lobby de juego para tic-tac-toe.
            </div>
        </div>
        <div class="tab-panel" data-panel="2">
            <div class="img-frame">
                <a href="/images/projects/two-players.org_domineering.webp" class="glightbox" data-description="Jugando Domineering en two-players.org">
                    <img src="/images/projects/two-players.org_domineering.webp" alt="Jugando Domineering" />
                </a>
                Jugando Domineering en two-players.org
            </div>
        </div>
    </div>
</div>


## Tech Stack
- **Backend:** Go, PostgreSQL, WebSockets, sqlc, go-migrate
- **Frontend:** SvelteKit, TypeScript, TailwindCSS, Bun

## Lo que aprendí
- Implementé **comunicación en tiempo real** con WebSockets para múltiples juegos simultáneos
- Diseñé una **arquitectura de juegos modular** que permite agregar nuevos juegos fácilmente
- Gestioné **migraciones de bases de datos** usando `go-migrate`
- Construí una **arquitectura fullstack** escalable con Go + SvelteKit
- Implementé un **sistema de salas** con gestión de estado en tiempo real
- Mejoré mis habilidades en **diseño de interfaces de usuario responsivas** con TailwindCSS
- Aprendí a construir aplicaciones frontend usando **componentes reutilizables** en Svelte
- Desarrollé **lógica de juegos combinatorios** y detección de ganadores
- Desplegué la aplicación en un **VPS**, fortaleciendo mis habilidades en Linux y **despliegue**

## Enlaces
- [Repositorio de GitHub](https://github.com/DCCXXV/two-players.org)
- [Demo en vivo](https://two-players.org)

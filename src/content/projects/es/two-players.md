---
title: "Two Players"
rank: 1
size: large
description: "Una plataforma web para jugar juegos combinatorios clásicos en línea, con soporte para múltiples juegos, sistema de salas y chat en tiempo real."
tags: ["Web", "SvelteKit", "Go", "WebSockets"]
---

> Una plataforma web para jugar juegos combinatorios clásicos en línea, con soporte para múltiples juegos, sistema de salas y chat en tiempo real.

## Por Qué Lo Construí

Mientras exploraba Wikipedia me topé al azar con la página de teoría de juegos combinatorios y me pareció muy interesante. Conseguí _Lessons in Play_ basándome en las recomendaciones, y en el primer capítulo me decía que jugara algunas partidas de Domineering con un amigo primero. Sin embargo, no tenía fichas de dominó ni un tablero para jugar, y buscando en línea no encontré ningún lugar para jugar estos juegos combinatorios clásicos... Así que construí uno. Este proyecto se convirtió en mi manera de explorar tanto la teoría de juegos como el desarrollo full-stack, y ahora hay una plataforma donde cualquiera puede jugar estos juegos con amigos en línea ^^

¡Juega aquí!: https://two-players.org

## Características

- **Múltiples juegos**: Tic-Tac-Toe, Domineering, Dots and Boxes, y más
- **Juego en tiempo real** con WebSockets
- **Chat en el juego** para comunicarte con tu oponente
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
                <a href="/images/projects/two-players.org_landing.webp" class="glightbox" data-description="Página de inicio de two-players.org">
                    <img src="/images/projects/two-players.org_landing.webp" alt="Página de inicio de two-players.org" />
                </a>
                Página de inicio de two-players.org
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

## Stack Tecnológico

- **Backend:** Go, PostgreSQL, WebSockets, sqlc, go-migrate
- **Frontend:** SvelteKit, TypeScript, TailwindCSS, Bun

## Qué Aprendí

- **Arquitectura en Tiempo Real**: Implementé un sistema pub/sub basado en WebSockets con patrón de goroutine por cliente, manejando conexiones concurrentes con guardas mutex y colas de canales no bloqueantes
- **Sistema de Juegos Modular**: Diseñé una arquitectura de juegos extensible usando patrón factory e interfaces, permitiendo agregar nuevos juegos fácilmente
- **Gestión de Estado Concurrente**: Construí un sistema de salas thread safe con carga diferida y limpieza automática de conexiones inactivas
- **Integración de Base de Datos**: Gestioné migraciones de esquema con `go-migrate` y generé consultas type-safe usando `sqlc`
- **Desarrollo Frontend Moderno**: Creé una UI reactiva con componentes de SvelteKit y TailwindCSS, implementando sincronización de estado en tiempo real
- **Despliegue en Producción**: Desplegué la aplicación fullstack en un VPS, gestionando servicios de Linux y base de datos PostgreSQL

## Enlaces

- [Sitio](https://two-players.org)
- [Repositorio en GitHub](https://github.com/DCCXXV/two-players.org)

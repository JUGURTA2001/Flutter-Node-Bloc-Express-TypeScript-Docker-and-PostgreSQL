<p align="center">
  <a href="README.md">🇫🇷 Français</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="README.en.md"><strong>🇬🇧 English</strong></a>
</p>

<h1 align="center">Flutter Task App</h1>

<p align="center">
  A full-stack task management application built with Flutter, BLoC, Node.js, Express, TypeScript, PostgreSQL, and Docker.
</p>

<p align="center">
  <a href="https://github.com/JUGURTA2001/Flutter-Node-Bloc-Express-TypeScript-Docker-and-PostgreSQL"><img src="https://img.shields.io/github/stars/JUGURTA2001/Flutter-Node-Bloc-Express-TypeScript-Docker-and-PostgreSQL?style=flat" alt="GitHub stars"></a>
  <a href="https://github.com/JUGURTA2001/Flutter-Node-Bloc-Express-TypeScript-Docker-and-PostgreSQL"><img src="https://img.shields.io/github/license/JUGURTA2001/Flutter-Node-Bloc-Express-TypeScript-Docker-and-PostgreSQL?style=flat" alt="License"></a>
  <img src="https://img.shields.io/badge/Flutter-3.12%2B-02569B?logo=flutter&logoColor=white" alt="Flutter">
  <img src="https://img.shields.io/badge/Node.js-TypeScript-3178C6?logo=typescript&logoColor=white" alt="Node.js TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
</p>

## Overview

This repository contains a task management application made of two main parts:

- **Frontend**: a Flutter application using BLoC/Cubit architecture.
- **Backend**: a Node.js REST API built with Express and TypeScript.
- **Database**: PostgreSQL accessed through Drizzle ORM.
- **Local environment**: Docker Compose.

The application supports registration, login, JWT token management, task creation, and task synchronization.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Task creation, listing, and deletion
- Task synchronization
- Flutter state management with `flutter_bloc`
- Local storage and cross-platform Flutter support
- Simple development setup with Docker and PostgreSQL

## Architecture

```mermaid
flowchart LR
    A[Flutter Application] -->|HTTP / JSON| B[Express API]
    B --> C[JWT + Auth Middleware]
    B --> D[Drizzle ORM]
    D --> E[(PostgreSQL)]

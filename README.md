# Flutter + Node.js + BLoC + Express + TypeScript + Docker + PostgreSQL

Application full-stack composée d’un frontend mobile/web Flutter avec architecture BLoC et d’un backend API REST développé en Node.js/Express/TypeScript.  
Le projet inclut également une base PostgreSQL et une configuration Docker pour faciliter le développement et le déploiement local.

## Vue d’ensemble

Ce projet permet de gérer une application de tâches avec :
- authentification utilisateur
- création, consultation et suppression de tâches
- stockage des données dans PostgreSQL
- communication entre le frontend Flutter et le backend via API REST
- environnement de développement conteneurisé avec Docker

## Stack technique

### Frontend
- Flutter
- Dart
- BLoC (flutter_bloc)
- Material Design
- HTTP client pour les appels API
- SQLite local (via sqflite)
- Shared Preferences
- Connectivity Plus

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- Drizzle ORM
- JWT pour l’authentification
- bcrypt pour le hashage des mots de passe

### Infrastructure
- Docker
- Docker Compose
- PostgreSQL 15

## Architecture du projet

```text
.
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── drizzle.config.ts
│   │   └── index.ts
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json
├── frontend/
│   ├── lib/
│   │   ├── core/
│   │   ├── features/
│   │   ├── models/
│   │   └── main.dart
│   ├── android/
│   ├── ios/
│   ├── linux/
│   ├── macos/
│   ├── web/
│   ├── windows/
│   ├── pubspec.yaml
│   └── README.md
├── .vscode/
├── text.text
└── README.md

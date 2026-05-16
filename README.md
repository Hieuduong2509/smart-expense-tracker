# Smart Expense Tracker

> A modern, AI-powered microservices platform for personal finance management.

[![Docker](https://img.shields.io/badge/Docker-required-blue?logo=docker)](https://www.docker.com/)
[![Next.js](https://img.shields.io/badge/Next.js-frontend-black?logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-ai--service-green?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)

---

## Table of Contents

- [Overview](#overview)
- [System Requirements](#system-requirements)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the System](#running-the-system)
- [Accessing the Platform](#accessing-the-platform)
- [Features](#features)
- [Port Reference](#port-reference)
- [Troubleshooting](#troubleshooting)

---

## Overview

Smart Expense Tracker is a production-ready financial management platform that leverages AI to help users track spending, manage budgets, and gain financial insights. The architecture follows a modern monorepo approach using Turborepo, orchestrating multiple services including a Next.js frontend, a Node.js API, and a Python-based AI service for OCR and financial advisory.

---

## System Requirements

| Dependency | Notes |
|---|---|
| Windows 10 / 11 | PowerShell recommended |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Required for database and service orchestration |
| [Node.js 18+](https://nodejs.org/) | Required for frontend and API development |
| [Python 3.10+](https://www.python.org/) | Required for the AI service |
| [Turbo](https://turbo.build/repo/docs/installing) | `npm install -g turbo` |

---

## Project Structure

```
.
├── docker-compose.yml              # Docker Compose — full stack orchestration
├── turbo.json                      # Turborepo configuration
├── apps/                           # Main applications
│   ├── web/                        # Next.js Dashboard (Port 3000)
│   ├── api/                        # Node.js Backend API (Port 4000)
│   ├── ai-service/                 # Python AI Service (Port 5000)
│   └── mobile/                     # React Native Mobile App
├── packages/                       # Shared internal packages
│   ├── ui/                         # Shared Shadcn UI components
│   ├── config/                     # Shared ESLint/TSConfig
│   └── shared-types/               # Shared TypeScript interfaces
├── deploy/                         # Deployment configurations
│   ├── docker/                     # Dockerfiles and docker-related configs
│   └── k8s/                        # Kubernetes manifests (optional)
└── scripts/                        # Automation scripts (planned)
```

---

## Getting Started

### 1. Clone the Repository

```powershell
git clone <repository-url>
cd smart-expense-tracker
```

### 2. Install Dependencies

Install all dependencies for the entire monorepo:

```powershell
npm install
```

### 3. Environment Configuration

Copy the `.env.example` files in each app directory to `.env` and fill in the required variables (Database URLs, API Keys, etc.).

---

## Running the System

### Local Development (Hot Reloading)

Start all services simultaneously using Turborepo:

```powershell
npm run dev
```

### Docker Startup (Production-like)

Start the full stack including databases (PostgreSQL, Redis):

```powershell
docker-compose up -d
```

---

## Features

- **AI-Powered OCR**: Scan receipts and automatically extract merchant, date, and amount.
- **Dynamic Budgeting**: Real-time recalculation of daily budgets based on spending habits.
- **Smart Insights**: Tier 3 AI financial advisor providing actionable spending tips.
- **Visual Analytics**: Interactive charts and progress tracking for monthly goals.
- **Multi-Platform**: Seamless experience across Web and Mobile.

---

## Accessing the Platform

| Interface | URL |
|---|---|
| **Web Dashboard** | `http://localhost:3000` |
| **Backend API Docs** | `http://localhost:4000/docs` |
| **AI Service Docs** | `http://localhost:5000/docs` |
| **Prisma Studio** | `npx prisma studio` (within apps/api) |

---

## Port Reference

| Service | Port |
|---|---|
| Web Frontend | `3000` |
| Backend API | `4000` |
| AI Service | `5000` |
| PostgreSQL | `5432` |
| Redis | `6379` |

---

## Troubleshooting

| Symptom | Resolution |
|---|---|
| **Prisma connection failed** | Ensure PostgreSQL container is running and `.env` has the correct `DATABASE_URL`. |
| **Turbo command not found** | Run `npm install -g turbo` or use `npx turbo`. |
| **Module not found in Web** | Ensure `packages/ui` and other packages are built: `npm run build`. |
| **AI Service fails to start** | Check if Python dependencies are installed: `pip install -r apps/ai-service/requirements.txt`. |

---

*Smart Expense Tracker — Transforming how you manage your wealth.*

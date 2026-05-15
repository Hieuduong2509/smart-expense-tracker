# Smart Expense Tracker

> An AI-powered full-stack expense tracking platform for seamless budget management, automated receipt OCR, and smart financial insights.

[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-000000?logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=nodedotjs)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/AI_Service-Python%20FastAPI-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql)](https://www.postgresql.org/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Default Account](#default-account)
- [Accessing the App](#accessing-the-app)
- [Notes](#notes)

---

## Overview

Smart Expense Tracker is a modern financial management platform that helps users track their daily spending against monthly goals. The system follows a clean separation of concerns within a **Turborepo Monorepo** structure. It features a Next.js frontend, a robust Node.js core API handling a strict "Math Engine", and a dedicated Python FastAPI microservice that leverages Tesseract OCR and Anthropic's Claude API to process receipts and generate Tier-3 AI financial advice.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| Core Backend | Node.js, Express.js, Prisma ORM, BullMQ |
| AI Microservice | Python, FastAPI, Tesseract OCR, Anthropic Claude |
| Database & Cache | PostgreSQL, Redis |
| Workspace | Turborepo (Monorepo) |

---

## Prerequisites

Ensure the following are installed and running on your machine before proceeding:

| Tool | Purpose |
|---|---|
| [Visual Studio Code](https://code.visualstudio.com/) | Recommended IDE |
| [Node.js 20+](https://nodejs.org/) & npm | Frontend & Core API runtime |
| [Python 3.10+](https://www.python.org/) | AI Microservice runtime |
| [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) | System-level dependency for receipt scanning |
| PostgreSQL | Database server (must be running on port `5432`) |
| Redis | In-memory store for BullMQ (must be running on port `6379`) |

---

## Configuration

Before starting the applications, create the `.env` files in their respective directories.

**1. Core Backend (`apps/api/.env`)**
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/smart_expense_db?schema=public"
REDIS_URL="redis://localhost:6379"
AI_SERVICE_URL="http://localhost:8000"

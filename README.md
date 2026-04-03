# crm_general

![Next.js](https://img.shields.io/badge/-Next.js-blue?logo=nextjs&logoColor=white) ![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

CRM general is a modern, full-stack Customer Relationship Management solution designed to streamline business-client interactions through a high-performance web interface. Built using the powerful combination of Next.js, React, and TypeScript, the platform ensures a type-safe, scalable, and responsive user experience. It features a robust API architecture for seamless data integration and a comprehensive web portal, providing businesses with a centralized tool to effectively manage customer data, track engagements, and optimize operational workflows.

## ✨ Features

- 🌐 Api
- 🕸️ Web


## 🛠️ Tech Stack

- next.js Next.js
- ⚛️ React
- 📜 TypeScript


## 📦 Key Dependencies

```
@prisma/client: ^6.10.1
@prisma/extension-accelerate: ^2.0.1
bcryptjs: ^3.0.2
jose: ^6.0.11
lucide-react: ^0.522.0
next: 15.3.4
react: ^19.0.0
react-dom: ^19.0.0
zod: ^3.25.67
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **lint**: `npm run lint`


## 📁 Project Structure

```
.
├── app
│   ├── api
│   │   ├── clients
│   │   │   ├── [id]
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   └── users
│   │       ├── [id]
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── backend
│   │   ├── clientAction.ts
│   │   ├── dealAction.ts
│   │   ├── loginAction.ts
│   │   ├── session.ts
│   │   └── taskAction.ts
│   ├── dashboard
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── login
│   │   └── page.tsx
│   ├── page.tsx
│   └── register
│       └── page.tsx
├── components
│   ├── buttons
│   │   ├── LoginButton.tsx
│   │   ├── LogoutButton.tsx
│   │   ├── RegisterButton.tsx
│   │   ├── SidebarButton.tsx
│   │   └── TaskFilterButton.tsx
│   ├── cards
│   │   ├── ActiveCustomer.tsx
│   │   ├── AdvantageCard.tsx
│   │   ├── ClientCard.tsx
│   │   ├── DealsCard.tsx
│   │   ├── KeyMetrics.tsx
│   │   ├── MetricsCards.tsx
│   │   └── UserActivity.tsx
│   ├── dashboard
│   │   ├── Client
│   │   │   ├── ClientFields.tsx
│   │   │   ├── ClientHeader.tsx
│   │   │   ├── ClientStats.tsx
│   │   │   ├── Clients.tsx
│   │   │   └── ClientsDisplay.tsx
│   │   ├── Deal
│   │   │   ├── Deals.tsx
│   │   │   ├── DealsDisplay.tsx
│   │   │   ├── DealsFields.tsx
│   │   │   ├── DealsHeader.tsx
│   │   │   └── DealsStats.tsx
│   │   ├── Overview
│   │   │   └── Overview.tsx
│   │   └── Task
│   │       ├── TaskSelection.tsx
│   │       ├── Tasks.tsx
│   │       ├── TasksDisplay.tsx
│   │       ├── TasksHeader.tsx
│   │       └── TasksStats.tsx
│   ├── forms
│   │   ├── DealCreation.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TaskCreation.tsx
│   │   └── UserCreation.tsx
│   ├── navbars
│   │   ├── DashboardNavbar.tsx
│   │   └── HomeNavbar.tsx
│   └── sections
│       ├── ActivityTimeline.tsx
│       ├── Advantages.tsx
│       ├── CustomerManagment.tsx
│       └── InfoSection.tsx
├── eslint.config.mjs
├── lib
│   └── prisma.ts
├── middleware.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma
│   ├── migrations
│   │   ├── 20250620175348_init
│   │   │   └── migration.sql
│   │   ├── 20250620180922_init
│   │   │   └── migration.sql
│   │   ├── 20250625001811_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


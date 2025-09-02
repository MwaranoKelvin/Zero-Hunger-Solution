# 🌍 Zero Hunger Connect

**Zero Hunger Connect** is a transformative web platform designed to combat global food insecurity by bridging the gap between food surplus and food need. This frontend application empowers donors—restaurants, farms, households, and grocery stores—to redistribute excess food to individuals and organizations in need.

## 🚀 Tech Stack

Built with modern web technologies for speed, scalability, and developer experience:

- [Vite](https://vitejs.dev/) – Lightning-fast build tool
- [React](https://reactjs.org/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) – Accessible and customizable UI components

## 🧩 Features

- 📦 Donor dashboard for posting surplus food
- 🛒 Recipient interface to request donations
- 🔍 Smart matching algorithm based on location and urgency
- 📊 Impact metrics: meals served, food waste reduced
- 🔐 Role-based authentication (via Supabase)

## 📁 Project Structure

```bash
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # App views
│   ├── styles/           # Global styles
│   └── main.tsx          # App entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind setup
├── tsconfig.json         # TypeScript config
└── .gitignore            # Ignored files
```

## To run it locally:
### Clone the repo
git clone https://github.com/MwaranoKelvin/zero-hunger-connect.git
cd zero-hunger-connect

### Install dependencies
bun install

### Start development server
bun run dev

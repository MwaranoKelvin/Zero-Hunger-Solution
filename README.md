# 🌍 Zero Hunger Connect

**Zero Hunger Connect** is a transformative web platform designed to combat global food insecurity by bridging the gap between food surplus and food need. 
This application empowers donors—restaurants, farms, households, and grocery stores—to redistribute excess food to individuals and organizations in need.

## 🧩 Features

- 🥕 **Donate & Request Food** – Donors can post surplus food; recipients can browse and request items.
- 🍲 **Recipe Finder** – Generates meal ideas based on available ingredients.
- 📊 **Impact Dashboard** – Tracks meals served, food waste reduced, and community reach.
- 🔐 **Authentication** – Role-based access for donors, recipients, and volunteers.
- 💳 **Subscription Model** – 10-day free trial, then upgrade via IntaSend or PayStack.

## 🚀 Tech Stack

Built with modern web technologies for speed, scalability, and developer experience:

- **Frontend**: Vite + React + TypeScript  
- **UI**: shadcn-ui + Tailwind CSS  
- **Backend**: Supabase (auth, database, payments)  
- **Dev Tools**: Bun, ESLint, GitHub Actions

Built with Programming and Vibe Coding principles and aligned with UN Sustainable Development Goal 2 (Zero Hunger).

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
npm install

### Start development server
npm run dev

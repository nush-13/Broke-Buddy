# 🤖 BrokeBuddy — AI Financial Coach for Students

> *Your money, translated into real life.*

BrokeBuddy is an AI-powered financial companion for Indian college students that doesn't just track spending — it turns your balance into relatable decisions, predicts your financial future, and coaches you like a smart older sibling who knows finance.

---

## 🚀 Setup in 3 Steps

### 1️⃣ Start the AI Backend
```bash
cd backend
npm install
```

### 2️⃣ Add your Gemini API Key
Create a `.env` file inside `backend/`:
```
API_KEY=your_gemini_api_key_here
PORT=3000
```
> Get a free key at: https://aistudio.google.com/app/apikey

### 3️⃣ Run Everything
**Terminal 1 — Backend:**
```bash
cd backend
node server.js
# → 🚀 BrokeBuddy backend running on http://localhost:3000
```

**Terminal 2 — Frontend:**
Just open `brokebuddy.html` in your browser (double-click or drag into Chrome).

The app auto-detects your backend and shows a green "Gemini AI connected" banner in the chat screen.

---

## 📱 Screens

| Screen | What it does |
|--------|-------------|
| 🏠 **Home** | Balance card, Chai Meter™, spending categories, recent transactions, No-Zomato streak |
| 🤖 **Buddy (AI Chat)** | Real Gemini AI chat — ask anything about your money |
| 📊 **Insights** | Bar chart, donut rings (health score, savings %, days left), category breakdown, balance forecast |
| 🎯 **Goals** | Progress bars for 4 savings goals, Round-Up Saver toggle, Subscription Brain |
| ✨ **Wrapped** | Spotify Wrapped-style monthly financial summary |

---

## 🌟 Features

### Core
- **Chai Meter™** — Converts balance into "38 chai + 12 dosas left this month"
- **Decision AI** — "Can I afford ₹800 AirPods?" → instant verdict + AI deep-dive
- **Balance Forecast** — Predicts your zero-balance date based on burn rate
- **Financial Health Score** — 0–100 composite score

### AI-Powered (needs backend)
- **Full Gemini AI chat** — Multi-turn conversation with your financial context baked in
- **Subscription Brain** — Flags unused subscriptions (Netflix: 18 days unwatched!)
- **SIP Calculator** — "₹500/month for 20 years = ₹4.5 lakh" explained conversationally
- **Personalized advice** — AI sees your actual balance, spending, and goals

### Gamification
- **No-Zomato Streak** — 5 days → Level 5 → 🏆 Foodie Champion
- **Round-Up Saver** — Rounds ₹349 → ₹350, saves ₹1 automatically
- **Savings Goals** with progress bars (Goa Trip, Laptop, SIP, Birthday)

---

## 🏗️ Architecture

```
brokebuddy/
├── brokebuddy.html      # Complete frontend (single file, no build needed)
└── backend/
    ├── server.js        # Express + Gemini AI endpoint
    ├── package.json
    ├── .env             # Your API key goes here (gitignored)
    └── .env.example     # Template
```

### How the AI chat works
```
User message
    ↓
Frontend (brokebuddy.html)
    ↓  POST /chat  {message, stats}
Backend (server.js)
    ↓  Gemini API with financial context injected
Gemini 2.0 Flash
    ↓  Personalised response
Frontend renders in chat bubble
```

The `USER_STATS` object in the frontend is passed to Gemini with every message, so the AI always knows your current balance, burn rate, recent expenses, and goals — without you having to repeat yourself.

---

## 🔌 API Endpoint

### `POST /chat`
```json
Request:
{
  "message": [
    {"role": "user", "content": "Can I afford AirPods for ₹8000?"}
  ],
  "stats": {
    "balance": 4280,
    "income": 8500,
    "spentThisMonth": 4220,
    "dailyBurn": 326,
    "daysLeft": 13,
    "topCategory": "Food (₹1,840)",
    "recentExpenses": ["Dominos ₹349", "Ola ₹128"],
    "streaks": "No-Zomato: 5 days",
    "goals": "Goa Trip (52%), Laptop (28%)"
  }
}

Response:
{
  "reply": "⚠️ Risky! ₹8,000 is 187% of your remaining balance..."
}
```

### `GET /health`
```json
{ "status": "ok", "model": "gemini-2.0-flash" }
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS (zero dependencies) |
| Backend | Node.js + Express |
| AI | Google Gemini 2.0 Flash |
| Fonts | Google Fonts (Nunito, DM Serif Display) |
| Deployment | Any static host (frontend) + any Node host (backend) |

---

## 🔮 Future Improvements

- [ ] PostgreSQL database for real transaction persistence
- [ ] UPI/bank statement parser (PDF → auto-categorize)
- [ ] Push notifications for spending alerts
- [ ] React Native mobile app
- [ ] OAuth login (Google/Phone OTP)
- [ ] Real mutual fund API integration (MFU, Zerodha Coin)
- [ ] WhatsApp bot interface

---

## 🏆 Team Algoholics
Anushka Karwa · Drishti Makkar · Rudra Chauhan  
Hackathon 2025 // Fintech AI Track

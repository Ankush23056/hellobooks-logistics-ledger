# HelloBooks Logistics Ledger

A high-performance, minimalist accounting dashboard designed to transform passive bookkeeping into **operational intelligence** for the logistics industry.

---

Demo live: https://ankush23056.github.io/hellobooks-logistics-ledger/


Github live : https://github.com/Ankush23056/hellobooks-logistics-ledger.git

---

## 🚀 The Vision

Standard accounting lacks the granularity needed for high-velocity fleet management. This prototype extends the HelloBooks MVP to include:

- **Vehicle-Centric Tracking:** Every expense is tied to a `vehicle_id` and `route_code`.

- **Mission Hex-Grid:** A tactical visualization of fleet health (Profitable, Idle, Maintenance).

- **CFO Agent:** A conversational AI interface to query complex financial data in plain English.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS — Ultra-minimalist Light Mode |
| **Icons** | Lucide-React |
| **Animations** | Framer Motion (Tactical UI entrances) |
| **Development** | Built using AI-Agent managed workflows (Antigravity) |

---

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Ankush23056/hellobooks-logistics-ledger.git

# 2. Install dependencies
npm install

# 3. Run the demo
npm run dev
```

---

## 📐 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx            # Navigation with icons & user card
│   ├── DashboardView.jsx      # Fleet overview layout
│   ├── MetricCards.jsx         # KPI cards (cost-per-mile, fleet status, margin)
│   ├── HexGrid.jsx            # Tactical hex-grid fleet visualization
│   ├── ExpenseForm.jsx         # Transaction logging form
│   └── AIQueryInterface.jsx   # Conversational AI query panel
├── App.jsx                    # Root layout & view routing
├── index.css                  # Design tokens & global styles
└── main.jsx                   # Entry point
```

---

Author : Ankush kumar
# Technology Manager

A web application for managing laptop and phone assignments.

## Features

- Laptop assignment management with tier system (S, A, B, C, D)
- Phone assignment management with 4-tier system (S, A, B, C)
- Auto-tier phones based on model
- Owner history tracking
- Scheduled swaps
- Auto-save to JSON file

## Setup

```bash
npm install
npm start
```

Open http://localhost:3000

## Project Structure

```
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── data/
│   └── technology-manager-data.json
├── public/
├── index.html
├── server.js
└── package.json
```

## Data Persistence

All changes automatically save to `data/technology-manager-data.json`.

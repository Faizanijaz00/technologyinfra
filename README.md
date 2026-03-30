# Technology Manager

A web application for managing laptop and phone assignments.

## Features

- Laptop assignment management with tier system (S, A, B, C, D)
- Phone assignment management with 4-tier system (S, A, B, C) 
- Auto-tier laptops and phones based on specs/model
- Owner history tracking
- Scheduled swaps
- Auto-save to JSON file

## Tier Criteria

### Laptop Tiers (S, A, B, C, D)

Laptops are auto-tiered based on chip, RAM, and year. The scoring system considers:

**Chip Scoring:**
- M5: 60 points
- M4 Max / M4 Pro: 55 points
- M4 / M3 Max: 50 points
- M3 Pro / M2 Max: 40 points
- M3 / M2 Pro: 30 points
- M2 / M1 Max: 20 points
- M1 Pro: 15 points
- M1: 10 points
- Intel (i5/i7/i9): 5 points

**RAM Scoring:**
- 64GB+: 60 points
- 48GB+: 55 points
- 36GB+: 50 points
- 32GB+: 45 points
- 24GB+: 35 points
- 18GB+: 25 points
- 16GB+: 20 points
- 8GB+: 10 points

**Year Scoring:**
- 2025+: 25 points
- 2024: 20 points
- 2023: 15 points
- 2022: 10 points
- 2021: 5 points
- 2020: 2 points

**Tier Rules:**
| Tier | Requirements |
|------|--------------|
| S | M4/M4 Max/M5/M5 Pro chip AND 30GB+ RAM AND 2024+ |
| A | M4 or higher chip AND 2024+ AND (Pro model OR 24GB+ RAM) |
| B | Score >= 50 OR good specs but doesn't meet A/S requirements |
| C | Score >= 30 OR 8GB RAM (caps at C) |
| D | Score < 30 |

**Hard Rules:**
- 8GB RAM or less: Maximum tier C
- Below M4 chip: Maximum tier B
- Non-Pro models with <24GB RAM: Maximum tier B

### Phone Tiers (S, A, B, C)

Phones are auto-tiered based on model. Non-USB-C phones are capped at tier B.

| Tier | Models |
|------|--------|
| S | iPhone 17, iPhone 16/15 Pro Max, Samsung Fold 7, Pixel Fold 9 Pro |
| A | iPhone 16/15 Pro, Samsung Fold 5/6, Pixel 9/8 Pro |
| B | All other phones (default), non-USB-C phones capped here |
| C | Older/lower-end phones |

**USB-C Constraint:** Phones without USB-C (iPhone X, XS, 11, etc.) cannot be tier S or A.

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

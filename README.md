# Affordmed URL Shortener

## Project Overview

This project is a **React-based URL Shortener Web App** developed as part of the Campus Hiring Evaluation by Afford Medical Technologies. It allows users to input long URLs and receive shortened links, complete with optional custom shortcodes and expiration timing.

The application is designed with a focus on **user-friendly UI**, **client-side validation**, and **logging middleware**, adhering strictly to the evaluation requirements.

---

## Features

### 🔗 URL Shortener Page

- Input long URLs with:
  - Optional validity period (in minutes)
  - Optional custom shortcode
- Generate up to **5 URLs concurrently**
- Each URL displays:
  - Original URL
  - Shortened URL
  - Validity period
  - Timestamp of creation

### 📊 Statistics Page

- Lists all shortened URLs (session-based or persistent)
- Displays:
  - Creation and expiry times
  - Total clicks
  - Click metadata:
    - Timestamp
    - Source of click
    - Geolocation (coarse-grained)

---

## Technical Specifications

### 🧱 Tech Stack

- **Frontend Framework:** React
- **UI Library:** Material UI (MUI)
- **Logging Middleware:** Custom-built, injected via `App.js`
- **Routing:** React Router (if implemented)
- **State Management:** React Hooks (useState, useEffect)

### 📌 Requirements & Constraints

- Mandatory Logging Middleware integration (no console loggers)
- Application must run at: [http://localhost:3000](http://localhost:3000)
- Styling strictly with **Material UI only**
- All short links must be unique
- Validation done client-side before API calls

---

## Folder Structure
affordmed-url-shortener/
│
├── public/
├── src/
│ ├── components/
│ │ ├── UrlForm.js
│ │ ├── UrlList.js
│ │ ├── StatsPage.js
│ │ └── LoggerMiddleware.js
│ ├── App.js
│ └── index.js
├── package.json
├── README.md
└── ...
## Running the Project Locally

### Prerequisites

- Node.js and npm installed
- Git installed
- Internet access for dependency installation

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nehapriya30/22481A05P9.git
   cd 22481A05P9
Install dependencies

npm install
Start the development server

npm start
Visit: http://localhost:3000 in your browser.

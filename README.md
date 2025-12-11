# Love Meter 💖

A beautiful and interactive Love Calculator application built with React and Vite. Calculate the love percentage between two names with stunning animations and a privacy-first approach.

## ✨ Features

- **Love Calculation Algorithm**: 
  - Combines name analysis using character matching and remaining letter algorithms.
  - Adds a touch of randomness to keep things fun and unpredictable.
- **Privacy First**: 
  - 🛡️ **No Database Connected**: All calculations happen 100% locally in your browser.
  - No data is ever sent to any server.
- **Interactive UI**:
  - **Loading Screen**: A beautiful initial loading animation with a pulsing logo.
  - **Privacy Ticker**: A scrolling notification confirming the local-only nature of the app.
  - **Dark Theme**: Vibrant blue and pink gradients tailored for a romantic aesthetic.
  - **Animations**: 
    - Floating entry cards.
    - Falling hearts confetti celebration on successful calculation.
  - **Continuous Applause**: Persistent confetti celebration that rains hearts as long as you enjoy the result.
- **Smart Result Display**:
  - **Romantic Quotes**: Displays a randomized romantic quote with every result.
  - **Lovely Initials**: Displays initials with a bouncing heart animation (e.g., A ❤️ B).
  - **Visual Score**: Progress bar with smooth animation.
- **Responsive Design**: Fully optimized for seamless performance on desktop and mobile devices.

## 🛠️ Technologies Used

- **React 19**: For building a robust and efficient user interface.
- **Vite**: For lightning-fast development and optimized production builds.
- **Tailwind CSS v4**: For the latest in utility-first, high-performance styling.
- **Lucide React**: For beautiful, consistent SVG icons (e.g., Crown, Heart, Sparkles).
- **Canvas Confetti**: For the delightful celebration effects.
- **React Toastify**: For elegant, non-intrusive user notifications.

## 📂 Project Structure

```
loveMeter/
├── public/              # Static assets (logos, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Footer.jsx   # Page footer
│   │   └── Header.jsx   # Top navigation bar
│   ├── App.css          # Global styles
│   ├── App.jsx          # Main application entry and loading logic
│   ├── Core.jsx         # Core game logic (Calculator, Inputs, Results)
│   ├── index.css        # Tailwind imports
│   └── main.jsx         # React DOM rendering
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts (Tailwind v4, React 19)
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd loveMeter
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📝 Usage

1.  Enter the **King's Name** 👑 in the first field.
2.  Enter the **Queen's Name** 👑 in the second field.
3.  Press **Enter** or click names to auto-capitalize.
4.  Click the **CALCULATE LOVE** button or press **Enter**.
5.  Enjoy the falling confetti, read your unique love quote, and share your score!

## 👨‍💻 Developer

Developed by **SENTHURAN JEIYACHANDIRAN**

---
*Note: This is a fun app for entertainment purposes only! Don't take the results too seriously.* 😉

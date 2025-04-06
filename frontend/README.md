# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

**React 18:** Leverage the latest React features and hooks.

**Vite:** Ultra-fast development server and build tool.

**Tailwind CSS:** Utility-first CSS framework for rapid UI development.

**React Router DOM:** Easy navigation with routing capabilities.

**Axios:** Simplified HTTP client for API interactions.

**Material UI:** Pre-designed components for an enhanced UI.

## Installation

1. Clone the repository:

  ```
  git clone <repository-url>
  cd <repository-directory>
  ```

2. Install dependencies:

 ```npm install```

## Scripts

- npm run dev: Start the development server with Vite.

- npm run build: Build the production-ready application.

- npm run preview: Preview the production build.

- npm run lint: Run ESLint to analyze code for potential issues.

## Development Tools

- Hot Module Replacement (HMR): Instant feedback on code changes.

- ESLint: Enforces consistent coding standards.

## Project Structure
```txt
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── App.jsx         # Main application component
├── index.css       # Global styles
├── main.jsx        # Application entry point
```
## Available Pages

- Configuration Page: Allows configuration of ticketing system parameters such as total tickets, ticket release rate, and more.

- Logs Page: Displays system logs for tracking operations.

## Components

**ConfigurationForm**

A form for setting up the ticketing system parameters with input validation.

**ControlPanel**

Provides buttons to start, stop, and reset the ticketing system.

**LogDisplay**

Displays logs with details such as Sale ID, date, and time.

**TicketDisplay**

Shows the current ticket availability and statuses.

**NavBar**

A navigation bar for switching between the configuration and logs pages.

**Loader**

A loading spinner displayed during API interactions.

## Dependencies

- **react:** Core library for building UI.

- **react-router-dom:** For client-side routing.

- **axios:** To handle API requests.

- **tailwindcss:** For CSS styling.

## Development Dependencies

- **vite:** Build tool for frontend projects.

- **eslint:** Linter for identifying and fixing problems in code.

- **postcss and autoprefixer:** For processing CSS.

## Getting Started

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:5173.

Building for Production

Build the app:

npm run build

Preview the production build:

npm run preview

## License

This project is licensed under the MIT License. Feel free to use and adapt it as needed.

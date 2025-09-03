# Prajval Portfolio

This is a personal portfolio website built with React and Tailwind CSS, bundled using Vite. The project showcases the hero section, about me section, projects, certifications, and contact information.

## Project Structure

- `src/components/`: Contains React components for different sections of the portfolio.
- `src/assets/`: Contains static assets like images.
- `public/`: Contains static files served directly.
- `PrajvalPortfolio/`: Root folder for the React project.
- `package.json`: Project dependencies and scripts.
- `vite.config.js`: Vite configuration file.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PrajvalPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

This will start the Vite dev server, usually accessible at `http://localhost:5173` or another port if 5173 is in use.

### Build for Production

Build the project for production deployment:

```bash
npm run build
```

The build output will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for linting errors:

```bash
npm run lint
```

### Deployment

This project uses `gh-pages` to deploy the production build to GitHub Pages.

To deploy:

```bash
npm run build
npx gh-pages -d dist
```

Alternatively, you can run the deploy script if configured:

```bash
npm run deploy
```

## Notes

- Images used in the hero section and other components are located in `src/components/Images/`.
- Tailwind CSS is used for styling, configured via `tailwind.config.js` and imported in CSS files.
- The About Me section background color and text colors can be customized in the component CSS or JSX.

## Troubleshooting

- If you encounter issues with ports being in use, Vite will try another port automatically.
- Ensure images are correctly imported with relative paths in components.
- For deployment issues, verify the `homepage` field in `package.json` matches your GitHub Pages URL.

## Contact

For any questions or contributions, please contact Prajval.

---

This README provides a comprehensive overview of the project setup, commands, and deployment instructions.

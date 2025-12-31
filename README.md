# Separate Money & State

## Advocating for Financial Sovereignty Through Bitcoin

This website promotes financial sovereignty through Bitcoin adoption and critiques government-controlled fiat money systems. Our mission is to educate individuals about the importance of separating money from state control and provide resources for adopting Bitcoin as an alternative to government-controlled fiat currencies.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) for optimal performance and developer experience.

## Quick Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd separate-money
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:4321`

## Technology Stack

- **[Astro 5](https://astro.build/)** - Static site generator for optimal performance
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **Modern JavaScript** - ES modules and contemporary web standards
- **[Swiper.js](https://swiperjs.com/)** - Touch-enabled carousels and sliders

## Updating the Site

### Content Updates
- Edit JSON data files in `src/data/` to update site content
- Modify Astro components in `src/components/` for layout changes
- Update page templates in `src/pages/` for new pages

### Adding New Content
- Case studies can be added to `src/data/case_studies.json`
- Home page content is managed in `src/data/home.json`
- Images should be placed in `public/` directory

### Building for Production
```bash
npm run build
npm run preview
```

## License

Content and code are available under appropriate open source licenses. Bitcoin-related educational content is provided for informational purposes.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow** (`.github/workflows/ci.yml`): Runs on every push to `main`/`master` and pull requests
  - Installs dependencies with pnpm
  - Runs type checking with Astro
  - Builds the project
  - Deploys to GitHub Pages on successful builds to main/master

- **Security Workflow** (`.github/workflows/security.yml`): Runs weekly security audits
  - Checks for vulnerable dependencies
  - Reports outdated packages

The site is automatically deployed to GitHub Pages when changes are merged to the main branch.


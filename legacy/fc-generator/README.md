# FC Generator - Instagram Post Generator

Instagram post generator for Fetish Chateau, featuring branded Instagram Stories (9:16) and Feed posts (1:1) with frosted glass panels over AI-generated backgrounds.

## Project Structure

```
fc-generator/
├── index.html              # Main HTML file
├── main.js                 # JavaScript application logic
├── style.css               # All styles
├── vite.config.js          # Vite bundler configuration
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
├── images/                 # Background images
│   ├── abstract/          # Abstract backgrounds
│   ├── figure/            # Figure backgrounds
│   └── material/          # Material backgrounds
├── fclogo/                # Logo variants
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── 4.png
├── dist/                  # Production build output (generated)
└── node_modules/          # Dependencies (generated)
```

## Tech Stack

- **Build Tool**: Vite
- **Styling**: Vanilla CSS
- **JavaScript**: ES6 Modules
- **Dependencies**: 
  - `html2canvas` - For PNG export functionality
  - Google Fonts CDN - Bebas Neue, Inter, Montserrat

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Single-page application with bundled assets
- ✅ Live preview with scaled poster
- ✅ Full-resolution PNG export (1080px width)
- ✅ 5 accent color palettes (Crimson, Magenta, Blue, Gold, Mono)
- ✅ 4 layout options (Left panel, Right panel, Center panel, Split)
- ✅ 2 format options (Story 9:16, Feed 1:1)
- ✅ 70+ pre-loaded background images in 3 categories
- ✅ Custom image upload support
- ✅ Quick preset templates
- ✅ Dynamic text with highlight word coloring
- ✅ Adjustable font scaling
- ✅ Blur control for glass panel effect

## Deployment

### Static Hosting (Recommended)

The built application is a static site and can be deployed to:
- **Netlify**: Drag & drop the `dist/` folder
- **Vercel**: Connect the repository and it will auto-build
- **GitHub Pages**: Push the `dist/` folder to `gh-pages` branch
- **Any static hosting service**

### Build and Deploy Example (Netlify)

```bash
npm run build
# Then drag the dist/ folder to Netlify
```

## Browser Compatibility

- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge (latest versions)
- Uses CSS backdrop-filter (may have limited support in older browsers)

## Files Explained

- **index.html** - Clean HTML structure with minimal inline styles
- **main.js** - All application logic including state management, event handlers, and export functionality
- **style.css** - Complete styling including responsive layouts
- **vite.config.js** - Vite configuration for development and production builds

## Migration Notes

The original single-file `index.html` has been backed up as `index-old.html`. The new structure:
- Separates concerns (HTML/CSS/JS)
- Uses proper dependency management with npm
- Enables code splitting and optimization through Vite
- Maintains all original functionality

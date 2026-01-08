const fs = require('fs');
const path = require('path');
const { minify: minifyHtml } = require('html-minifier-terser');
const { minify: minifyJs } = require('terser');
const CleanCSS = require('clean-css');

const SRC_DIR = path.join(__dirname, 'fc-generator');
const DIST_DIR = path.join(__dirname, 'dist');

async function build() {
    console.log('Building production version...\n');

    // Create dist directory
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    // Create images directory in dist
    const distImagesDir = path.join(DIST_DIR, 'images');
    if (!fs.existsSync(distImagesDir)) {
        fs.mkdirSync(distImagesDir, { recursive: true });
    }

    // Copy images folder recursively
    console.log('Copying images...');
    copyFolderRecursive(path.join(SRC_DIR, 'images'), distImagesDir);

    // Read source HTML
    console.log('Processing index.html...');
    let html = fs.readFileSync(path.join(SRC_DIR, 'index.html'), 'utf8');

    // Extract and process CSS
    const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
    if (cssMatch) {
        console.log('Minifying CSS...');
        const cssContent = cssMatch[1];
        const minifiedCss = new CleanCSS({
            level: 2
        }).minify(cssContent).styles;
        html = html.replace(cssMatch[0], `<style>${minifiedCss}</style>`);
    }

    // Extract and process JS
    const jsMatch = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
    if (jsMatch) {
        console.log('Obfuscating JavaScript...');
        const jsContent = jsMatch[1];

        const minifiedJs = await minifyJs(jsContent, {
            compress: {
                drop_console: false,
                drop_debugger: true,
                passes: 2
            },
            mangle: {
                toplevel: true,
                properties: {
                    regex: /^_/
                }
            },
            format: {
                comments: false
            }
        });

        if (minifiedJs.code) {
            html = html.replace(jsMatch[0], `<script>${minifiedJs.code}</script></body>`);
        }
    }

    // Minify HTML
    console.log('Minifying HTML...');
    const minifiedHtml = await minifyHtml(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: false, // Already minified
        minifyJS: false   // Already minified
    });

    // Write output
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), minifiedHtml);

    // Calculate sizes
    const srcSize = fs.statSync(path.join(SRC_DIR, 'index.html')).size;
    const distSize = fs.statSync(path.join(DIST_DIR, 'index.html')).size;
    const savings = ((1 - distSize / srcSize) * 100).toFixed(1);

    console.log('\nBuild complete!');
    console.log(`Source: ${(srcSize / 1024).toFixed(1)} KB`);
    console.log(`Output: ${(distSize / 1024).toFixed(1)} KB`);
    console.log(`Savings: ${savings}%`);
    console.log(`\nOutput directory: ${DIST_DIR}`);
}

function copyFolderRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFolderRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

build().catch(err => {
    console.error('Build failed:', err);
    process.exit(1);
});

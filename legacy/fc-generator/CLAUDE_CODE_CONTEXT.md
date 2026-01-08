FETISH CHATEAU POST GENERATOR — Project Context
Project Overview
A browser-based Instagram post generator for Fetish Chateau, a premium fetish venue. The tool allows clients to create branded Instagram Stories (9:16) and Feed posts (1:1) with consistent visual identity using frosted glass panels over AI-generated backgrounds.
Current State: Working Prototype v1.0
What's Done

Single-page HTML/CSS/JS application (no build step)
Live preview with scaled poster
Full-resolution PNG export via html2canvas
5 accent color palettes (Crimson, Magenta, Blue, Gold, Mono)
3 layout options (Left panel, Right panel, Center panel)
2 format options (Story 9:16, Feed 1:1)
7 pre-loaded background images
Custom image upload (converts to base64)
Quick preset templates (Dress Code, Event, Hiring, Announcement)
Text inputs with live update (subheader, header, body, highlight word, date, CTA)
Header line breaks via | character

Known Issues / Limitations

Fonts require internet — Google Fonts CDN dependency
html2canvas rendering — Sometimes minor differences from preview
Mobile UI — Works but cramped, needs responsive improvements
No persistence — Templates not saved between sessions

File Structure
fc-generator/
├── index.html          # Main application (single file, ~30KB)
└── images/
    ├── bg_red_swirl.png
    ├── bg_red_flow.png
    ├── bg_pink_silk.png
    ├── bg_purple_neon.png
    ├── bg_gold_glitter.png
    ├── bg_mono_waves.png
    └── bg_mono_folds.png
Technical Stack

Frontend: Vanilla HTML/CSS/JS (no framework)
Fonts: Google Fonts (Bebas Neue, Inter, Montserrat)
Screenshot: html2canvas v1.4.1 (CDN)
Image handling: FileReader API for uploads, base64 encoding

Design System
Color Palettes
javascriptconst colors = {
  crimson: { accent: '#DC143C', glow: 'rgba(220,20,60,0.2)' },
  magenta: { accent: '#FF0080', glow: 'rgba(255,0,128,0.2)' },
  blue:    { accent: '#0066FF', glow: 'rgba(0,102,255,0.2)' },
  gold:    { accent: '#FFD700', glow: 'rgba(255,215,0,0.15)' },
  mono:    { accent: '#FFFFFF', glow: 'rgba(255,255,255,0.1)' }
};
Typography
RoleFontWeightStyleHeadersBebas Neue400ALL CAPS, 120px (story) / 90px (feed)SubheadersMontserrat500ALL CAPS, letter-spacing 0.3em, 22pxBodyInter400Sentence case, 24px (story) / 20px (feed)CTAMontserrat600ALL CAPS, letter-spacing 0.25em
Layout Specs

Story: 1080×1920px, panel width 75%
Feed: 1080×1080px, panel width 85-88%
Glass panel: Semi-transparent dark gradient with accent-colored border glow
Preview scaling: 0.35 for story, 0.5 for feed

State Object
javascriptconst state = {
  format: 'story',      // 'story' | 'feed'
  layout: 'left',       // 'left' | 'right' | 'center'
  color: 'crimson',     // 'crimson' | 'magenta' | 'blue' | 'gold' | 'mono'
  image: 'images/bg_red_swirl.png',  // path or base64
  subheader: '',
  header: '',           // Use '|' for line breaks
  body: '',
  highlight: '',        // Word to color with accent
  date: '',
  cta: ''
};
Planned Improvements
Priority 1 — Polish

 Better mobile responsive layout
 Loading states during export
 Error handling for failed exports

Priority 2 — Features

 Save/load templates to localStorage
 Template library with thumbnails
 Export quality options (1x, 2x)
 Copy to clipboard option

Priority 3 — Advanced

 Offline font support (self-hosted)
 Drag-and-drop background upload
 Multiple highlight words
 Custom accent color picker
 Undo/redo functionality

Priority 4 — Infrastructure

 Convert to React/Svelte for better state management
 Add PWA support for offline use
 Set up deployment pipeline

Related Documentation
The project was built based on these specification documents (available in the original Claude Project):

fetish_chateau_instagram_system.md — Original v1.0 template system
fetish_chateau_instagram_system_v2.md — Enhanced frosted glass system
liquid_latex_v2_framework.md — Visual identity and FLUX 2 prompts
fetish_chateau_ai_context.md — AI image generation guidelines

Background Image Sources
All backgrounds generated with FLUX 2 Pro using prompts from the framework docs. Images are glossy black liquid latex aesthetics with colored rim lighting. Aspect ratio 9:16 for story backgrounds.
Client Requirements

Client needs simple interface to create posts without design skills
Must work in browser without installation
Export at Instagram-ready resolution (1080px width)
Support for Polish language text (UTF-8)
Consistent brand aesthetic across all posts

Hosting Target
Static site hosting (Netlify, Vercel, GitHub Pages, or similar). No backend required — all processing happens client-side.

Context document created: December 2024
For continuation in Claude Code

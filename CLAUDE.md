// You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Angular Material

- Use Angular Material components for UI elements (buttons, inputs, cards, dialogs, etc.)
- Follow Material Design 3 guidelines for styling and theming
- Use theming system to support multiple client color schemes
- Ensure Material components pass accessibility requirements (AXE, WCAG AA)
- Use `MatNativeDateModule` for date handling unless custom date picker is needed
- Custom form fields should follow Material design patterns
- Use `MatDialog` for modal dialogs and confirmations
- Use `MatSnackBar` for notifications and toasts
- Ensure proper density settings for responsive design
- Use built-in form validation features where possible

---

# SMVIT - Social Media Visual Identity Tool

## Project Overview
A full rewrite of the Fetish Chateau post generator into an Angular 20 + NgRx SaaS platform. This extensible white-label solution can be sold to multiple clients, each with unique configurations for style, templates, and AI image generation prompts.

## Architecture
- **Frontend**: Angular 20
- **State Management**: NgRx
- **Build**: Angular CLI / Vite

## Key Features

### State Management (NgRx)
- Undo/Redo functionality for all editor actions
- State rollback capabilities
- Persistent state management with localStorage/IndexedDB
- Time-travel debugging support

### Configuration System
- Client-specific configuration files
- Customizable color palettes, fonts, and layouts
- Template definitions per client
- AI image generation prompts per client

### Offline Support
- Service Worker for offline functionality
- Local storage for templates and configurations
- PWA capabilities

### Extensibility
- Plugin architecture for new features
- Dynamic component loading
- Theme system for branding

## Legacy System Reference
The original static HTML implementation (Vanilla JS + html2canvas) is preserved in `legacy/fc-generator/`. Key aspects to migrate:

### Original Features
- Live preview with scaled poster
- Full-resolution PNG export via html2canvas
- 5 accent color palettes
- 3 layout options
- 2 format options (Story 9:16, Feed 1:1)
- Custom image upload (base64)
- Quick preset templates
- Text inputs with live update

### Original State Structure
```typescript
interface PostState {
  format: 'story' | 'feed';
  layout: 'left' | 'right' | 'center';
  color: string;
  image: string; // path or base64
  subheader: string;
  header: string;  // Use '|' for line breaks
  body: string;
  highlight: string;
  date: string;
  cta: string;
}
```

### Original Design System
- **Fonts**: Bebas Neue, Montserrat, Inter (Google Fonts)
- **Colors**: Crimson, Magenta, Blue, Gold, Mono
- **Layouts**: Glass panel with accent-colored border glow
- **Output**: 1080×1920px (story), 1080×1080px (feed)

## Migration Plan

### Phase 1 - Core Architecture
- [ ] Set up Angular 20 project structure
- [ ] Configure NgRx store with actions, effects, reducers
- [ ] Implement basic editor UI components
- [ ] Migrate core state management

### Phase 2 - Feature Parity
- [ ] Implement image upload and handling
- [ ] Port html2canvas export functionality
- [ ] Migrate all color palettes
- [ ] Implement all layout options
- [ ] Port template presets

### Phase 3 - Advanced Features
- [ ] Implement undo/redo system
- [ ] Add configuration file system
- [ ] Implement offline mode with Service Worker
- [ ] Add template library with thumbnails
- [ ] Implement multi-client support

### Phase 4 - Enhancements
- [ ] Add export quality options
- [ ] Implement custom accent color picker
- [ ] Add drag-and-drop image upload
- [ ] Multiple highlight words
- [ ] Improve mobile responsive layout

## Development Notes
- All client configurations should be loaded dynamically
- State changes should be persisted for recovery
- Export functionality must maintain original quality
- Support Polish language text (UTF-8)
- Must work client-side without backend
- Reference `llms/` folder for Angular documentation and context (contains compact.txt and full.txt with comprehensive Angular guides)

## File Structure (Planned)
```
smvit/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── store/           # NgRx store
│   │   │   ├── services/        # Shared services
│   │   │   └── models/          # TypeScript interfaces
│   │   ├── features/
│   │   │   ├── editor/          # Main editor component
│   │   │   ├── templates/       # Template management
│   │   │   ├── export/          # Export functionality
│   │   │   └── settings/        # Client settings
│   │   └── shared/
│   │       ├── components/      # Reusable UI components
│   │       └── directives/      # Custom directives
│   └── assets/
│       ├── fonts/               # Self-hosted fonts
│       └── images/              # Default backgrounds
├── configs/                     # Client configuration files
└── legacy/                      # Original static implementation
```

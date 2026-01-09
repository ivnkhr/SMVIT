import { ColorDefinition } from './post-state.interface';

export const COLOR_DEFINITIONS: Record<string, ColorDefinition> = {
  crimson: {
    accent: '#DC143C',
    accent15: 'rgba(220,20,60,0.15)',
    accent25: 'rgba(220,20,60,0.25)',
    accent30: 'rgba(220,20,60,0.30)',
    accent40: 'rgba(220,20,60,0.40)',
    accent50: 'rgba(220,20,60,0.50)',
    glow: 'rgba(220,20,60,0.2)',
  },
  magenta: {
    accent: '#FF0080',
    accent15: 'rgba(255,0,128,0.15)',
    accent25: 'rgba(255,0,128,0.25)',
    accent30: 'rgba(255,0,128,0.30)',
    accent40: 'rgba(255,0,128,0.40)',
    accent50: 'rgba(255,0,128,0.50)',
    glow: 'rgba(255,0,128,0.2)',
  },
  blue: {
    accent: '#61e5ff',
    accent15: 'rgba(0,102,255,0.15)',
    accent25: 'rgba(0,102,255,0.25)',
    accent30: 'rgba(0,102,255,0.30)',
    accent40: 'rgba(0,102,255,0.40)',
    accent50: 'rgba(0,102,255,0.50)',
    glow: 'rgba(0,102,255,0.2)',
  },
  gold: {
    accent: '#FFD700',
    accent15: 'rgba(255,215,0,0.12)',
    accent25: 'rgba(255,215,0,0.20)',
    accent30: 'rgba(255,215,0,0.25)',
    accent40: 'rgba(255,215,0,0.35)',
    accent50: 'rgba(255,215,0,0.45)',
    glow: 'rgba(255,215,0,0.15)',
  },
  mono: {
    accent: '#FFFFFF',
    accent15: 'rgba(255,255,255,0.08)',
    accent25: 'rgba(255,255,255,0.15)',
    accent30: 'rgba(255,255,255,0.20)',
    accent40: 'rgba(255,255,255,0.30)',
    accent50: 'rgba(255,255,255,0.40)',
    glow: 'rgba(255,255,255,0.1)',
  },
};

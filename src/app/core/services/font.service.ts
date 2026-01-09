import { Injectable, signal, computed } from '@angular/core';
import { FontOption } from '../models';
import { DEFAULT_FONTS } from '../models/default-fonts';

@Injectable({ providedIn: 'root' })
export class FontService {
  private readonly loadedFonts = signal<Set<string>>(new Set());
  private readonly loadingFonts = signal<Set<string>>(new Set());

  readonly isLoading = computed(() => this.loadingFonts().size > 0);
  readonly defaultFonts: FontOption[] = DEFAULT_FONTS;

  isFontLoaded(fontName: string): boolean {
    return this.loadedFonts().has(fontName);
  }

  async loadFont(fontName: string): Promise<void> {
    if (this.loadedFonts().has(fontName)) {
      return;
    }

    this.loadingFonts.update((set) => new Set(set).add(fontName));

    try {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@400;500;600;700&display=swap`;
      link.rel = 'stylesheet';

      await new Promise<void>((resolve, reject) => {
        link.onload = () => resolve();
        link.onerror = () =>
          reject(new Error(`Failed to load font: ${fontName}`));
        document.head.appendChild(link);
      });

      await document.fonts.ready;

      this.loadedFonts.update((set) => new Set(set).add(fontName));
    } finally {
      this.loadingFonts.update((set) => {
        const newSet = new Set(set);
        newSet.delete(fontName);
        return newSet;
      });
    }
  }

  async preloadAllFonts(): Promise<void> {
    const fontNames = this.defaultFonts.map((f) => f.name);
    await Promise.all(fontNames.map((name) => this.loadFont(name)));
  }

  getFontValue(fontName: string): string {
    const font = this.defaultFonts.find((f) => f.name === fontName);
    return font?.value ?? `'${fontName}', sans-serif`;
  }
}

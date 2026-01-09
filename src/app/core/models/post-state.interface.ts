export type PostFormat = 'story' | 'feed';
export type PostLayout = 'left' | 'right' | 'center' | 'split' | 'splitTop' | 'none';
export type ColorPalette = 'crimson' | 'magenta' | 'blue' | 'gold' | 'mono';
export type BlurLevel = 0 | 16 | 32 | 64;

export interface ColorDefinition {
  accent: string;
  accent15: string;
  accent25: string;
  accent30: string;
  accent40: string;
  accent50: string;
  glow: string;
}

export interface FontOption {
  name: string;
  value: string;
}

export interface PostState {
  format: PostFormat;
  layout: PostLayout;
  color: ColorPalette;
  blur: BlurLevel;
  fontScaleHeader: number;
  fontScaleBody: number;
  fontScaleMisc: number;
  fontHeader: string;
  fontBody: string;
  fontMisc: string;
  image: string;
  logo: string;
  header: string;
  body: string;
  highlight: string;
  date: string;
  cta: string;
}

export interface ImageCategory {
  id: string;
  name: string;
  images: string[];
}

export interface Preset {
  id: string;
  name: string;
  header: string;
  body: string;
  highlight: string;
  date: string;
  cta: string;
}

export interface EditorState {
  post: PostState;
  history: PostState[];
  historyIndex: number;
  isDirty: boolean;
  isExporting: boolean;
  exportError: string | null;
}

export interface AssetsState {
  imageCategories: ImageCategory[];
  selectedCategory: string;
  logos: string[];
  fonts: FontOption[];
  loadedFonts: string[];
  isLoadingFonts: boolean;
}

export interface ClientConfig {
  clientId: string;
  clientName: string;
  theme: {
    primaryColor: string;
    accentColor: string;
  };
  colorPalettes: Record<string, ColorDefinition>;
  presets: Preset[];
  defaultState: Partial<PostState>;
  logos: string[];
  imageCategories: ImageCategory[];
  fonts: FontOption[];
  exportSettings: {
    storyWidth: number;
    storyHeight: number;
    feedWidth: number;
    feedHeight: number;
    fileNamePattern: string;
  };
}

export interface ConfigState {
  currentConfig: ClientConfig | null;
  isLoading: boolean;
  error: string | null;
}

export interface AppState {
  editor: EditorState;
  assets: AssetsState;
  config: ConfigState;
}

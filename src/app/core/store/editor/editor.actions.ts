import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  PostState,
  PostFormat,
  PostLayout,
  ColorPalette,
  BlurLevel,
} from '../../models';

export const EditorActions = createActionGroup({
  source: 'Editor',
  events: {
    // Format & Layout
    'Set Format': props<{ format: PostFormat }>(),
    'Set Layout': props<{ layout: PostLayout }>(),
    'Set Color': props<{ color: ColorPalette }>(),
    'Set Blur': props<{ blur: BlurLevel }>(),

    // Font Settings
    'Set Font Header': props<{ fontFamily: string }>(),
    'Set Font Body': props<{ fontFamily: string }>(),
    'Set Font Misc': props<{ fontFamily: string }>(),
    'Set Font Scale Header': props<{ scale: number }>(),
    'Set Font Scale Body': props<{ scale: number }>(),
    'Set Font Scale Misc': props<{ scale: number }>(),

    // Content
    'Set Image': props<{ image: string }>(),
    'Set Logo': props<{ logo: string }>(),
    'Set Header': props<{ header: string }>(),
    'Set Body': props<{ body: string }>(),
    'Set Highlight': props<{ highlight: string }>(),
    'Set Date': props<{ date: string }>(),
    'Set CTA': props<{ cta: string }>(),

    // Presets
    'Apply Preset': props<{ preset: Partial<PostState> }>(),

    // Bulk Update
    'Update Post': props<{ changes: Partial<PostState> }>(),

    // History (Undo/Redo)
    'Undo': emptyProps(),
    'Redo': emptyProps(),
    'Save History Snapshot': emptyProps(),
    'Clear History': emptyProps(),

    // State Management
    'Reset To Default': emptyProps(),
    'Load Saved State': props<{ state: PostState }>(),
    'Mark Clean': emptyProps(),
  },
});

export const ExportActions = createActionGroup({
  source: 'Export',
  events: {
    'Start Export': emptyProps(),
    'Export Success': props<{ dataUrl: string; filename: string }>(),
    'Export Failure': props<{ error: string }>(),
    'Download Image': props<{ dataUrl: string; filename: string }>(),
    'Clear Error': emptyProps(),
  },
});

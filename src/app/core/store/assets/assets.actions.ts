import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ImageCategory, FontOption } from '../../models';

export const AssetsActions = createActionGroup({
  source: 'Assets',
  events: {
    'Load Image Categories': emptyProps(),
    'Load Image Categories Success': props<{ categories: ImageCategory[] }>(),
    'Select Image Category': props<{ categoryId: string }>(),
    'Upload Custom Image': props<{ base64: string }>(),

    'Load Fonts': emptyProps(),
    'Load Fonts Success': props<{ fonts: FontOption[] }>(),
    'Load Google Font': props<{ fontName: string }>(),
    'Font Loaded': props<{ fontName: string }>(),
    'Font Load Failed': props<{ fontName: string; error: string }>(),
  },
});

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssetsState } from '../../models';

export const selectAssetsState = createFeatureSelector<AssetsState>('assets');

export const selectImageCategories = createSelector(
  selectAssetsState,
  (state) => state.imageCategories
);

export const selectSelectedCategory = createSelector(
  selectAssetsState,
  (state) => state.selectedCategory
);

export const selectCurrentCategoryImages = createSelector(
  selectImageCategories,
  selectSelectedCategory,
  (categories, selectedId) => {
    const category = categories.find((c) => c.id === selectedId);
    return category?.images ?? [];
  }
);

export const selectLogos = createSelector(
  selectAssetsState,
  (state) => state.logos
);

export const selectFonts = createSelector(
  selectAssetsState,
  (state) => state.fonts
);

export const selectLoadedFonts = createSelector(
  selectAssetsState,
  (state) => state.loadedFonts
);

export const selectIsLoadingFonts = createSelector(
  selectAssetsState,
  (state) => state.isLoadingFonts
);

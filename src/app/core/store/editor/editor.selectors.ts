import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditorState } from '../../models';
import { COLOR_DEFINITIONS } from '../../models/color-definitions';

export const selectEditorState = createFeatureSelector<EditorState>('editor');

export const selectPost = createSelector(
  selectEditorState,
  (state) => state.post
);

export const selectFormat = createSelector(selectPost, (post) => post.format);
export const selectLayout = createSelector(selectPost, (post) => post.layout);
export const selectColor = createSelector(selectPost, (post) => post.color);
export const selectBlur = createSelector(selectPost, (post) => post.blur);
export const selectImage = createSelector(selectPost, (post) => post.image);
export const selectLogo = createSelector(selectPost, (post) => post.logo);

export const selectColorDefinition = createSelector(selectColor, (color) =>
  COLOR_DEFINITIONS[color]
);

export const selectFontSettings = createSelector(selectPost, (post) => ({
  fontHeader: post.fontHeader,
  fontBody: post.fontBody,
  fontMisc: post.fontMisc,
  fontScaleHeader: post.fontScaleHeader,
  fontScaleBody: post.fontScaleBody,
  fontScaleMisc: post.fontScaleMisc,
}));

export const selectContent = createSelector(selectPost, (post) => ({
  header: post.header,
  body: post.body,
  highlight: post.highlight,
  date: post.date,
  cta: post.cta,
}));

export const selectCanUndo = createSelector(
  selectEditorState,
  (state) => state.historyIndex > 0
);

export const selectCanRedo = createSelector(
  selectEditorState,
  (state) => state.historyIndex < state.history.length - 1
);

export const selectHistoryInfo = createSelector(selectEditorState, (state) => ({
  current: state.historyIndex + 1,
  total: state.history.length,
}));

export const selectIsDirty = createSelector(
  selectEditorState,
  (state) => state.isDirty
);
export const selectIsExporting = createSelector(
  selectEditorState,
  (state) => state.isExporting
);
export const selectExportError = createSelector(
  selectEditorState,
  (state) => state.exportError
);

export const selectPosterDimensions = createSelector(selectFormat, (format) => ({
  width: 1080,
  height: format === 'story' ? 1920 : 1080,
}));

export const selectPreviewScale = createSelector(selectFormat, (format) =>
  format === 'story' ? 0.35 : 0.5
);

export const selectPosterCssVariables = createSelector(
  selectColorDefinition,
  selectPost,
  (colorDef, post) => ({
    '--accent-color': colorDef.accent,
    '--accent-15': colorDef.accent15,
    '--accent-25': colorDef.accent25,
    '--accent-30': colorDef.accent30,
    '--accent-40': colorDef.accent40,
    '--accent-50': colorDef.accent50,
    '--glow-color': colorDef.glow,
    '--blur-amount': `${post.blur}px`,
    '--panel-border-width': post.blur === 0 ? '0' : '2px',
    '--font-scale-header': post.fontScaleHeader.toString(),
    '--font-scale-body': post.fontScaleBody.toString(),
    '--font-scale-misc': post.fontScaleMisc.toString(),
    '--font-header': post.fontHeader,
    '--font-body': post.fontBody,
    '--font-misc': post.fontMisc,
  })
);

export const selectProcessedHeader = createSelector(selectPost, (post) =>
  post.header
    .split('|')
    .map((line) => line.trim())
    .join('<br>')
);

export const selectProcessedBody = createSelector(
  selectPost,
  selectColorDefinition,
  (post, colorDef) => {
    let bodyHtml = post.body
      .split('|')
      .map((line) => line.trim())
      .join('<br>');

    if (post.highlight?.trim()) {
      const escapedHighlight = post.highlight.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
      );
      const regex = new RegExp(`(${escapedHighlight})`, 'gi');
      bodyHtml = bodyHtml.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
    }

    return bodyHtml;
  }
);

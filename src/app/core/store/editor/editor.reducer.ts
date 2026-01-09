import { createReducer, on } from '@ngrx/store';
import { EditorActions, ExportActions } from './editor.actions';
import { EditorState, PostState } from '../../models';

const MAX_HISTORY_SIZE = 50;

export const defaultPostState: PostState = {
  format: 'story',
  layout: 'left',
  color: 'crimson',
  blur: 32,
  fontScaleHeader: -2,
  fontScaleBody: 2,
  fontScaleMisc: 4,
  fontHeader: "'Cormorant Garamond', serif",
  fontBody: "'Space Grotesk', sans-serif",
  fontMisc: "'Questrial', sans-serif",
  image: 'images/abstract/0add8ef1-86d6-47da-a9cd-4328f5f2d9ce.png',
  logo: 'logos/3.png',
  header: 'Dress|Code',
  body: 'Obowiązuje strój fetyszowy: latex, skóra, vinyl, bielizna, uprząż. Zakazane: jeansy, t-shirty, odzież codzienna.',
  highlight: 'latex',
  date: '',
  cta: 'Brak Wyjątków',
};

const initialState: EditorState = {
  post: defaultPostState,
  history: [defaultPostState],
  historyIndex: 0,
  isDirty: false,
  isExporting: false,
  exportError: null,
};

function saveSnapshot(state: EditorState, newPost: PostState): EditorState {
  const newHistory = state.history.slice(0, state.historyIndex + 1);
  newHistory.push(newPost);

  if (newHistory.length > MAX_HISTORY_SIZE) {
    newHistory.shift();
  }

  return {
    ...state,
    post: newPost,
    history: newHistory,
    historyIndex: newHistory.length - 1,
    isDirty: true,
  };
}

export const editorReducer = createReducer(
  initialState,

  // Format & Layout
  on(EditorActions.setFormat, (state, { format }) =>
    saveSnapshot(state, { ...state.post, format })
  ),
  on(EditorActions.setLayout, (state, { layout }) =>
    saveSnapshot(state, { ...state.post, layout })
  ),
  on(EditorActions.setColor, (state, { color }) =>
    saveSnapshot(state, { ...state.post, color })
  ),
  on(EditorActions.setBlur, (state, { blur }) =>
    saveSnapshot(state, { ...state.post, blur })
  ),

  // Font Settings
  on(EditorActions.setFontHeader, (state, { fontFamily }) =>
    saveSnapshot(state, { ...state.post, fontHeader: fontFamily })
  ),
  on(EditorActions.setFontBody, (state, { fontFamily }) =>
    saveSnapshot(state, { ...state.post, fontBody: fontFamily })
  ),
  on(EditorActions.setFontMisc, (state, { fontFamily }) =>
    saveSnapshot(state, { ...state.post, fontMisc: fontFamily })
  ),
  on(EditorActions.setFontScaleHeader, (state, { scale }) =>
    saveSnapshot(state, {
      ...state.post,
      fontScaleHeader: Math.max(-50, Math.min(50, scale)),
    })
  ),
  on(EditorActions.setFontScaleBody, (state, { scale }) =>
    saveSnapshot(state, {
      ...state.post,
      fontScaleBody: Math.max(-50, Math.min(50, scale)),
    })
  ),
  on(EditorActions.setFontScaleMisc, (state, { scale }) =>
    saveSnapshot(state, {
      ...state.post,
      fontScaleMisc: Math.max(-50, Math.min(50, scale)),
    })
  ),

  // Content - No history for text typing (too granular)
  on(EditorActions.setImage, (state, { image }) =>
    saveSnapshot(state, { ...state.post, image })
  ),
  on(EditorActions.setLogo, (state, { logo }) =>
    saveSnapshot(state, { ...state.post, logo })
  ),
  on(EditorActions.setHeader, (state, { header }) => ({
    ...state,
    post: { ...state.post, header },
    isDirty: true,
  })),
  on(EditorActions.setBody, (state, { body }) => ({
    ...state,
    post: { ...state.post, body },
    isDirty: true,
  })),
  on(EditorActions.setHighlight, (state, { highlight }) => ({
    ...state,
    post: { ...state.post, highlight },
    isDirty: true,
  })),
  on(EditorActions.setDate, (state, { date }) => ({
    ...state,
    post: { ...state.post, date },
    isDirty: true,
  })),
  on(EditorActions.setCTA, (state, { cta }) => ({
    ...state,
    post: { ...state.post, cta },
    isDirty: true,
  })),

  // Save snapshot for text fields (called on blur)
  on(EditorActions.saveHistorySnapshot, (state) => {
    const currentPost = state.post;
    const lastHistoryPost = state.history[state.historyIndex];

    if (JSON.stringify(currentPost) === JSON.stringify(lastHistoryPost)) {
      return state;
    }

    return saveSnapshot(state, currentPost);
  }),

  // Presets
  on(EditorActions.applyPreset, (state, { preset }) =>
    saveSnapshot(state, { ...state.post, ...preset })
  ),

  // Bulk Update
  on(EditorActions.updatePost, (state, { changes }) =>
    saveSnapshot(state, { ...state.post, ...changes })
  ),

  // Undo
  on(EditorActions.undo, (state) => {
    if (state.historyIndex <= 0) return state;
    const newIndex = state.historyIndex - 1;
    return {
      ...state,
      post: state.history[newIndex],
      historyIndex: newIndex,
      isDirty: true,
    };
  }),

  // Redo
  on(EditorActions.redo, (state) => {
    if (state.historyIndex >= state.history.length - 1) return state;
    const newIndex = state.historyIndex + 1;
    return {
      ...state,
      post: state.history[newIndex],
      historyIndex: newIndex,
      isDirty: true,
    };
  }),

  // Clear History
  on(EditorActions.clearHistory, (state) => ({
    ...state,
    history: [state.post],
    historyIndex: 0,
  })),

  // Reset
  on(EditorActions.resetToDefault, () => initialState),

  // Load Saved State
  on(EditorActions.loadSavedState, (state, { state: savedState }) => ({
    ...state,
    post: savedState,
    history: [savedState],
    historyIndex: 0,
    isDirty: false,
  })),

  // Mark Clean
  on(EditorActions.markClean, (state) => ({
    ...state,
    isDirty: false,
  })),

  // Export
  on(ExportActions.startExport, (state) => ({
    ...state,
    isExporting: true,
    exportError: null,
  })),
  on(ExportActions.exportSuccess, (state) => ({
    ...state,
    isExporting: false,
  })),
  on(ExportActions.exportFailure, (state, { error }) => ({
    ...state,
    isExporting: false,
    exportError: error,
  })),
  on(ExportActions.clearError, (state) => ({
    ...state,
    exportError: null,
  }))
);

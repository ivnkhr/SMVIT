import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { PreviewComponent } from './components/preview/preview.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { PosterComponent } from './components/preview/poster/poster.component';
import { EditorActions } from '../../core/store/editor/editor.actions';
import { StorageService } from '../../core/services/storage.service';
import { FontService } from '../../core/services/font.service';

@Component({
  selector: 'app-editor',
  template: `
    <div class="editor-layout">
      <app-left-sidebar class="left-sidebar" />
      <app-preview class="preview-area" />
      <app-right-sidebar class="right-sidebar" />
    </div>

    <!-- Hidden full-size poster for export -->
    <div id="exportPoster" class="export-container">
      <app-poster [isExport]="true" />
    </div>
  `,
  styles: [
    `
      .editor-layout {
        display: grid;
        grid-template-columns: 320px 1fr 340px;
        min-height: 100vh;
        background: #0a0a0a;
      }

      .left-sidebar,
      .right-sidebar {
        background: #111;
        padding: 24px;
        overflow-y: auto;
        max-height: 100vh;
      }

      .left-sidebar {
        border-right: 1px solid #222;
      }

      .right-sidebar {
        border-left: 1px solid #222;
      }

      .preview-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .export-container {
        position: fixed;
        left: -9999px;
        top: 0;
      }

      @media (max-width: 1400px) {
        .editor-layout {
          grid-template-columns: 300px 1fr 300px;
        }
      }

      @media (max-width: 1200px) {
        .editor-layout {
          grid-template-columns: 1fr;
        }

        .left-sidebar,
        .right-sidebar {
          max-height: none;
        }

        .left-sidebar {
          border-right: none;
          border-bottom: 1px solid #222;
        }

        .right-sidebar {
          border-left: none;
          border-top: 1px solid #222;
        }

        .preview-area {
          min-height: 80vh;
        }
      }
    `,
  ],
  imports: [
    LeftSidebarComponent,
    PreviewComponent,
    RightSidebarComponent,
    PosterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly storageService = inject(StorageService);
  private readonly fontService = inject(FontService);

  async ngOnInit(): Promise<void> {
    // Initialize storage
    await this.storageService.initDb();

    // Load saved state
    const savedState = await this.storageService.loadState();
    if (savedState) {
      this.store.dispatch(EditorActions.loadSavedState({ state: savedState }));
    }

    // Preload fonts
    this.fontService.preloadAllFonts();
  }
}

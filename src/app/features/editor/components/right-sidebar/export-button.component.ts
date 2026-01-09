import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExportActions } from '../../../../core/store/editor/editor.actions';
import {
  selectIsExporting,
  selectPost,
  selectPosterDimensions,
} from '../../../../core/store/editor/editor.selectors';
import { ExportService } from '../../../../core/services/export.service';

@Component({
  selector: 'app-export-button',
  template: `
    <button
      type="button"
      class="download-btn"
      [class.loading]="isExporting()"
      [disabled]="isExporting()"
      (click)="onExport()">
      {{ isExporting() ? 'Generowanie...' : 'Pobierz Posta' }}
    </button>
  `,
  styles: [
    `
      .download-btn {
        width: 100%;
        padding: 16px 24px;
        background: linear-gradient(135deg, #8b0000, #dc143c);
        border: none;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-top: 16px;

        &:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }

        &.loading {
          opacity: 0.7;
          cursor: wait;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportButtonComponent {
  private readonly store = inject(Store);
  private readonly exportService = inject(ExportService);

  isExporting = toSignal(this.store.select(selectIsExporting), {
    requireSync: true,
  });

  post = toSignal(this.store.select(selectPost), { requireSync: true });
  dimensions = toSignal(this.store.select(selectPosterDimensions), {
    requireSync: true,
  });

  async onExport(): Promise<void> {
    this.store.dispatch(ExportActions.startExport());

    try {
      const result = await this.exportService.exportPoster(
        this.post(),
        this.dimensions()
      );

      this.exportService.downloadImage(result.dataUrl, result.filename);
      this.store.dispatch(
        ExportActions.exportSuccess({
          dataUrl: result.dataUrl,
          filename: result.filename,
        })
      );
    } catch (error) {
      this.store.dispatch(
        ExportActions.exportFailure({
          error: error instanceof Error ? error.message : 'Export failed',
        })
      );
    }
  }
}

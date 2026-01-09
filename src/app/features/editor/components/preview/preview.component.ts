import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectFormat } from '../../../../core/store/editor/editor.selectors';
import { PosterComponent } from './poster/poster.component';

@Component({
  selector: 'app-preview',
  template: `
    <div class="preview-label">Podgląd</div>
    <div
      class="preview-container"
      [class.story-size]="format() === 'story'"
      [class.feed-size]="format() === 'feed'">
      <app-poster />
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        background: #0a0a0a;
        overflow: auto;
      }

      .preview-label {
        font-size: 11px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #444;
        margin-bottom: 16px;
      }

      .preview-container {
        position: relative;
        outline: 0px solid #333333;
      }

      .preview-container.story-size {
        width: 378px;
        height: 672px;
      }

      .preview-container.feed-size {
        width: 540px;
        height: 540px;
      }
    `,
  ],
  imports: [PosterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  private readonly store = inject(Store);

  format = toSignal(this.store.select(selectFormat), { requireSync: true });
}

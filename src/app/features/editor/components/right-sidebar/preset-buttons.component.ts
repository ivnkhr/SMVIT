import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { DEFAULT_PRESETS } from '../../../../core/models/default-presets';

@Component({
  selector: 'app-preset-buttons',
  template: `
    <div class="section">
      <div class="section-title">Szablony</div>
      <div class="preset-buttons">
        @for (preset of presets; track preset.id) {
          <button
            type="button"
            class="preset-btn"
            (click)="applyPreset(preset)">
            {{ preset.name }}
          </button>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .section {
        margin-bottom: 24px;
      }

      .section-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #666;
        margin-bottom: 12px;
      }

      .preset-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .preset-btn {
        padding: 8px 12px;
        background: #1a1a1a;
        border: 1px solid #333;
        color: #888;
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;

        &:hover {
          border-color: #555;
          color: #fff;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresetButtonsComponent {
  private readonly store = inject(Store);

  presets = DEFAULT_PRESETS;

  applyPreset(preset: (typeof DEFAULT_PRESETS)[0]): void {
    this.store.dispatch(
      EditorActions.applyPreset({
        preset: {
          header: preset.header,
          body: preset.body,
          highlight: preset.highlight,
          date: preset.date,
          cta: preset.cta,
        },
      })
    );
  }
}

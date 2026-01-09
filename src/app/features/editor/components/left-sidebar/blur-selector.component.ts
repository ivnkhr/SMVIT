import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectBlur } from '../../../../core/store/editor/editor.selectors';
import { BlurLevel } from '../../../../core/models';

@Component({
  selector: 'app-blur-selector',
  template: `
    <div class="section">
      <div class="section-title">Rozmycie</div>
      <div class="toggle-group">
        @for (option of blurOptions; track option.value) {
          <button
            type="button"
            class="toggle-btn"
            [class.active]="selectedBlur() === option.value"
            [attr.aria-pressed]="selectedBlur() === option.value"
            (click)="selectBlur(option.value)">
            {{ option.label }}
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

      .toggle-group {
        display: flex;
        gap: 8px;
      }

      .toggle-btn {
        flex: 1;
        padding: 12px 16px;
        background: #1a1a1a;
        border: 1px solid #333;
        color: #888;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border-color: #444;
          color: #aaa;
        }

        &.active {
          background: #222;
          border-color: #dc143c;
          color: #fff;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlurSelectorComponent {
  private readonly store = inject(Store);

  selectedBlur = toSignal(this.store.select(selectBlur), { requireSync: true });

  blurOptions: { value: BlurLevel; label: string }[] = [
    { value: 0, label: '-' },
    { value: 16, label: '16' },
    { value: 32, label: '32' },
    { value: 64, label: '64' },
  ];

  selectBlur(blur: BlurLevel): void {
    this.store.dispatch(EditorActions.setBlur({ blur }));
  }
}

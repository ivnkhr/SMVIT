import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectColor } from '../../../../core/store/editor/editor.selectors';
import { ColorPalette } from '../../../../core/models';

@Component({
  selector: 'app-color-selector',
  template: `
    <div class="section">
      <div class="section-title">Stylizacja</div>
      <div class="color-options">
        @for (color of colors; track color.id) {
          <button
            type="button"
            class="color-btn"
            [class]="color.id"
            [class.active]="selectedColor() === color.id"
            [attr.aria-label]="color.label"
            [attr.aria-pressed]="selectedColor() === color.id"
            [title]="color.label"
            (click)="selectColor(color.id)">
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

      .color-options {
        display: flex;
        gap: 10px;
      }

      .color-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 3px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }

        &.active {
          border-color: #fff;
        }

        &.crimson {
          background: linear-gradient(135deg, #8b0000, #dc143c);
        }

        &.magenta {
          background: linear-gradient(135deg, #99004d, #ff0080);
        }

        &.blue {
          background: linear-gradient(135deg, #003399, #0066ff);
        }

        &.gold {
          background: linear-gradient(135deg, #997a00, #ffd700);
        }

        &.mono {
          background: linear-gradient(135deg, #333, #666);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSelectorComponent {
  private readonly store = inject(Store);

  selectedColor = toSignal(this.store.select(selectColor), {
    requireSync: true,
  });

  colors: { id: ColorPalette; label: string }[] = [
    { id: 'crimson', label: 'Karmazyn' },
    { id: 'magenta', label: 'Magenta' },
    { id: 'blue', label: 'Niebieski' },
    { id: 'gold', label: 'Złoty' },
    { id: 'mono', label: 'Mono' },
  ];

  selectColor(color: ColorPalette): void {
    this.store.dispatch(EditorActions.setColor({ color }));
  }
}

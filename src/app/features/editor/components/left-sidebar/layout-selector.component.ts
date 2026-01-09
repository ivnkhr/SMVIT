import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectLayout } from '../../../../core/store/editor/editor.selectors';
import { PostLayout } from '../../../../core/models';

@Component({
  selector: 'app-layout-selector',
  template: `
    <div class="section">
      <div class="section-title">Układ</div>
      <div class="toggle-group layout-toggle-group">
        @for (option of layoutOptions; track option.value) {
          <button
            type="button"
            class="toggle-btn"
            [class.active]="selectedLayout() === option.value"
            [attr.aria-pressed]="selectedLayout() === option.value"
            [attr.aria-label]="option.label"
            [title]="option.label"
            (click)="selectLayout(option.value)">
            {{ option.icon }}
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

      .layout-toggle-group .toggle-btn {
        font-family: monospace;
        font-size: 22px;
        padding: 10px;
      }

      .toggle-btn {
        flex: 1;
        padding: 12px 16px;
        background: #1a1a1a;
        border: 1px solid #333;
        color: #888;
        font-weight: 500;
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
export class LayoutSelectorComponent {
  private readonly store = inject(Store);

  selectedLayout = toSignal(this.store.select(selectLayout), {
    requireSync: true,
  });

  layoutOptions: { value: PostLayout; icon: string; label: string }[] = [
    { value: 'left', icon: '←', label: 'Panel po lewej' },
    { value: 'right', icon: '→', label: 'Panel po prawej' },
    { value: 'center', icon: '+', label: 'Panel na środku' },
    { value: 'split', icon: '↓', label: 'Panel na dole' },
    { value: 'splitTop', icon: '↑', label: 'Panel na górze' },
    { value: 'none', icon: '×', label: 'Bez panelu' },
  ];

  selectLayout(layout: PostLayout): void {
    this.store.dispatch(EditorActions.setLayout({ layout }));
  }
}

import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectLogo } from '../../../../core/store/editor/editor.selectors';
import { selectLogos } from '../../../../core/store/assets/assets.selectors';

@Component({
  selector: 'app-logo-gallery',
  template: `
    <div class="section">
      <div class="logo-gallery">
        @for (logo of logos(); track logo) {
          <button
            type="button"
            class="logo-thumb"
            [class.active]="selectedLogo() === logo"
            [attr.aria-pressed]="selectedLogo() === logo"
            [style.background-image]="logo !== 'none' ? 'url(' + logo + ')' : 'none'"
            (click)="selectLogo(logo)">
            @if (logo === 'none') {
              <span class="no-logo-text">No Logo</span>
            }
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

      .logo-gallery {
        display: flex;
        gap: 8px;
      }

      .logo-thumb {
        width: 60px;
        height: 40px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #1a1a1a;
        border: 2px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          border-color: #444;
        }

        &.active {
          border-color: #dc143c;
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.4);
        }
      }

      .no-logo-text {
        color: #797979;
        font-size: 11px;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoGalleryComponent {
  private readonly store = inject(Store);

  selectedLogo = toSignal(this.store.select(selectLogo), { requireSync: true });
  logos = toSignal(this.store.select(selectLogos), { requireSync: true });

  selectLogo(logo: string): void {
    this.store.dispatch(EditorActions.setLogo({ logo }));
  }
}

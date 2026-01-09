import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectFontSettings } from '../../../../core/store/editor/editor.selectors';
import { selectFonts } from '../../../../core/store/assets/assets.selectors';
import { FontService } from '../../../../core/services/font.service';

@Component({
  selector: 'app-font-controls',
  template: `
    <!-- Header Font -->
    <div class="font-control-row">
      <div class="font-select-group">
        <label class="input-label">Czcionka nagłówka</label>
        <select
          class="input-field"
          [ngModel]="fontSettings().fontHeader"
          (ngModelChange)="onFontHeaderChange($event)">
          @for (font of fonts(); track font.value) {
            <option [value]="font.value" [style.font-family]="font.value">
              {{ font.name }}
            </option>
          }
        </select>
      </div>
      <div class="scale-group">
        <label class="input-label">Skala</label>
        <div class="font-scale-control">
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('header', -2)">
            -
          </button>
          <input
            type="number"
            class="input-field scale-input"
            [ngModel]="fontSettings().fontScaleHeader"
            (ngModelChange)="onFontScaleHeaderChange($event)"
            min="-50"
            max="50" />
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('header', 2)">
            +
          </button>
        </div>
      </div>
    </div>

    <!-- Body Font -->
    <div class="font-control-row">
      <div class="font-select-group">
        <label class="input-label">Czcionka treści</label>
        <select
          class="input-field"
          [ngModel]="fontSettings().fontBody"
          (ngModelChange)="onFontBodyChange($event)">
          @for (font of fonts(); track font.value) {
            <option [value]="font.value" [style.font-family]="font.value">
              {{ font.name }}
            </option>
          }
        </select>
      </div>
      <div class="scale-group">
        <label class="input-label">Skala</label>
        <div class="font-scale-control">
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('body', -2)">
            -
          </button>
          <input
            type="number"
            class="input-field scale-input"
            [ngModel]="fontSettings().fontScaleBody"
            (ngModelChange)="onFontScaleBodyChange($event)"
            min="-50"
            max="50" />
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('body', 2)">
            +
          </button>
        </div>
      </div>
    </div>

    <!-- Misc Font -->
    <div class="font-control-row">
      <div class="font-select-group">
        <label class="input-label">Czcionka podpisu</label>
        <select
          class="input-field"
          [ngModel]="fontSettings().fontMisc"
          (ngModelChange)="onFontMiscChange($event)">
          @for (font of fonts(); track font.value) {
            <option [value]="font.value" [style.font-family]="font.value">
              {{ font.name }}
            </option>
          }
        </select>
      </div>
      <div class="scale-group">
        <label class="input-label">Skala</label>
        <div class="font-scale-control">
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('misc', -2)">
            -
          </button>
          <input
            type="number"
            class="input-field scale-input"
            [ngModel]="fontSettings().fontScaleMisc"
            (ngModelChange)="onFontScaleMiscChange($event)"
            min="-50"
            max="50" />
          <button
            type="button"
            class="scale-btn"
            (click)="adjustScale('misc', 2)">
            +
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .font-control-row {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 16px;
      }

      .font-select-group {
        flex: 1;
      }

      .scale-group {
        flex-shrink: 0;
      }

      .input-label {
        font-size: 11px;
        font-weight: 500;
        color: #666;
        margin-bottom: 6px;
        display: block;
      }

      .input-field {
        width: 100%;
        padding: 12px 14px;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 4px;
        color: #fff;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        transition: border-color 0.2s ease;
        box-sizing: border-box;

        &:focus {
          outline: none;
          border-color: #dc143c;
        }
      }

      select.input-field {
        cursor: pointer;
      }

      .font-scale-control {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .scale-btn {
        width: 36px;
        height: 36px;
        background: #1a1a1a;
        border: 1px solid #333;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;

        &:hover {
          background: #222;
          border-color: #444;
        }
      }

      .scale-input {
        width: 50px;
        text-align: center;
        -moz-appearance: textfield;
        padding: 8px !important;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    `,
  ],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontControlsComponent {
  private readonly store = inject(Store);
  private readonly fontService = inject(FontService);

  fontSettings = toSignal(this.store.select(selectFontSettings), {
    requireSync: true,
  });
  fonts = toSignal(this.store.select(selectFonts), { requireSync: true });

  onFontHeaderChange(fontFamily: string): void {
    this.store.dispatch(EditorActions.setFontHeader({ fontFamily }));
  }

  onFontBodyChange(fontFamily: string): void {
    this.store.dispatch(EditorActions.setFontBody({ fontFamily }));
  }

  onFontMiscChange(fontFamily: string): void {
    this.store.dispatch(EditorActions.setFontMisc({ fontFamily }));
  }

  onFontScaleHeaderChange(scale: number): void {
    this.store.dispatch(EditorActions.setFontScaleHeader({ scale }));
  }

  onFontScaleBodyChange(scale: number): void {
    this.store.dispatch(EditorActions.setFontScaleBody({ scale }));
  }

  onFontScaleMiscChange(scale: number): void {
    this.store.dispatch(EditorActions.setFontScaleMisc({ scale }));
  }

  adjustScale(target: 'header' | 'body' | 'misc', increment: number): void {
    const settings = this.fontSettings();
    let newScale: number;

    switch (target) {
      case 'header':
        newScale = Math.max(-50, Math.min(50, settings.fontScaleHeader + increment));
        this.store.dispatch(EditorActions.setFontScaleHeader({ scale: newScale }));
        break;
      case 'body':
        newScale = Math.max(-50, Math.min(50, settings.fontScaleBody + increment));
        this.store.dispatch(EditorActions.setFontScaleBody({ scale: newScale }));
        break;
      case 'misc':
        newScale = Math.max(-50, Math.min(50, settings.fontScaleMisc + increment));
        this.store.dispatch(EditorActions.setFontScaleMisc({ scale: newScale }));
        break;
    }
  }
}

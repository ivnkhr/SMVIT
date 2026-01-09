import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectContent } from '../../../../core/store/editor/editor.selectors';

@Component({
  selector: 'app-text-inputs',
  template: `
    <div class="input-group">
      <label class="input-label" for="header">Nagłówek (użyj | dla nowej linii)</label>
      <input
        type="text"
        class="input-field"
        id="header"
        placeholder="TYTUŁ"
        [ngModel]="content().header"
        (ngModelChange)="onHeaderChange($event)"
        (blur)="saveSnapshot()" />
    </div>

    <div class="input-group">
      <label class="input-label" for="body">Tekst (użyj | dla nowej linii)</label>
      <textarea
        class="input-field"
        id="body"
        placeholder="Treść wiadomości..."
        [ngModel]="content().body"
        (ngModelChange)="onBodyChange($event)"
        (blur)="saveSnapshot()"></textarea>
    </div>

    <div class="input-group">
      <label class="input-label" for="highlight">Wyróżnienie (kolorowe)</label>
      <input
        type="text"
        class="input-field"
        id="highlight"
        placeholder="słowo"
        [ngModel]="content().highlight"
        (ngModelChange)="onHighlightChange($event)"
        (blur)="saveSnapshot()" />
    </div>

    <div class="input-group">
      <label class="input-label" for="date">Data / Godzina</label>
      <input
        type="text"
        class="input-field"
        id="date"
        placeholder="15.01.2025 | 22:00"
        [ngModel]="content().date"
        (ngModelChange)="onDateChange($event)"
        (blur)="saveSnapshot()" />
    </div>

    <div class="input-group">
      <label class="input-label" for="cta">CTA (Wezwanie do działania)</label>
      <input
        type="text"
        class="input-field"
        id="cta"
        placeholder="LINK W BIO"
        [ngModel]="content().cta"
        (ngModelChange)="onCtaChange($event)"
        (blur)="saveSnapshot()" />
    </div>
  `,
  styles: [
    `
      .input-group {
        margin-bottom: 16px;
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

        &::placeholder {
          color: #444;
        }
      }

      textarea.input-field {
        resize: vertical;
        min-height: 80px;
      }
    `,
  ],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputsComponent {
  private readonly store = inject(Store);

  content = toSignal(this.store.select(selectContent), { requireSync: true });

  onHeaderChange(header: string): void {
    this.store.dispatch(EditorActions.setHeader({ header }));
  }

  onBodyChange(body: string): void {
    this.store.dispatch(EditorActions.setBody({ body }));
  }

  onHighlightChange(highlight: string): void {
    this.store.dispatch(EditorActions.setHighlight({ highlight }));
  }

  onDateChange(date: string): void {
    this.store.dispatch(EditorActions.setDate({ date }));
  }

  onCtaChange(cta: string): void {
    this.store.dispatch(EditorActions.setCTA({ cta }));
  }

  saveSnapshot(): void {
    this.store.dispatch(EditorActions.saveHistorySnapshot());
  }
}

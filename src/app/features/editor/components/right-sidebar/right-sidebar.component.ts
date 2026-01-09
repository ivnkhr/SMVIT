import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PresetButtonsComponent } from './preset-buttons.component';
import { TextInputsComponent } from './text-inputs.component';
import { FontControlsComponent } from './font-controls.component';
import { ExportButtonComponent } from './export-button.component';

@Component({
  selector: 'app-right-sidebar',
  template: `
    <app-preset-buttons />
    <app-text-inputs />
    <hr class="divider" />
    <app-font-controls />
    <app-export-button />
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .divider {
        border: none;
        border-top: 1px solid #333;
        margin: 16px 0;
      }
    `,
  ],
  imports: [
    PresetButtonsComponent,
    TextInputsComponent,
    FontControlsComponent,
    ExportButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSidebarComponent {}

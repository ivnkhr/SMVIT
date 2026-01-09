import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormatSelectorComponent } from './format-selector.component';
import { LayoutSelectorComponent } from './layout-selector.component';
import { BlurSelectorComponent } from './blur-selector.component';
import { ColorSelectorComponent } from './color-selector.component';
import { LogoGalleryComponent } from './logo-gallery.component';
import { BackgroundGalleryComponent } from './background-gallery.component';

@Component({
  selector: 'app-left-sidebar',
  template: `
    <app-format-selector />
    <app-layout-selector />
    <app-blur-selector />
    <app-color-selector />
    <app-logo-gallery />
    <app-background-gallery />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [
    FormatSelectorComponent,
    LayoutSelectorComponent,
    BlurSelectorComponent,
    ColorSelectorComponent,
    LogoGalleryComponent,
    BackgroundGalleryComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSidebarComponent {}

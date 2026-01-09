import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  selectPost,
  selectPosterCssVariables,
  selectProcessedHeader,
  selectProcessedBody,
} from '../../../../../core/store/editor/editor.selectors';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
  imports: [SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosterComponent {
  private readonly store = inject(Store);

  isExport = input(false);

  post = toSignal(this.store.select(selectPost), { requireSync: true });
  cssVars = toSignal(this.store.select(selectPosterCssVariables), {
    requireSync: true,
  });
  processedHeader = toSignal(this.store.select(selectProcessedHeader), {
    requireSync: true,
  });
  processedBody = toSignal(this.store.select(selectProcessedBody), {
    requireSync: true,
  });

  posterStyles = computed(() => {
    const cssVars = this.cssVars();
    const post = this.post();
    const isExport = this.isExport();

    const baseStyles = Object.entries(cssVars)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');

    if (!isExport) {
      const scale = post.format === 'story' ? 0.35 : 0.5;
      return `${baseStyles}; transform: scale(${scale}); transform-origin: top left;`;
    }

    return baseStyles;
  });

  glowPosition = computed(() => {
    const layout = this.post().layout;
    return layout === 'left' ? 'right' : layout === 'right' ? 'left' : 'center';
  });

  showAccentLine = computed(() => {
    const layout = this.post().layout;
    return (
      layout !== 'center' &&
      layout !== 'split' &&
      layout !== 'splitTop' &&
      layout !== 'none'
    );
  });
}

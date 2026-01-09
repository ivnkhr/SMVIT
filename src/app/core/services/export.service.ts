import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { PostState } from '../models';

interface ExportDimensions {
  width: number;
  height: number;
}

interface ExportResult {
  dataUrl: string;
  filename: string;
}

@Injectable({ providedIn: 'root' })
export class ExportService {
  async exportPoster(post: PostState, dimensions: ExportDimensions): Promise<ExportResult> {
    const exportContainer = document.getElementById('exportPoster');
    if (!exportContainer) {
      throw new Error('Export container not found');
    }

    await this.waitForResources();

    const posterEl = exportContainer.querySelector('.poster') as HTMLElement;
    if (!posterEl) {
      throw new Error('Poster element not found');
    }

    const glassPanel = posterEl.querySelector('.glass-panel') as HTMLElement;
    if (glassPanel && post.blur > 0) {
      await this.applyPreBlurredBackground(posterEl, post, dimensions, glassPanel);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(posterEl, {
      width: dimensions.width,
      height: dimensions.height,
      scale: 1,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#000000',
    });

    const dataUrl = canvas.toDataURL('image/png');
    const filename = this.generateFilename(post);

    return { dataUrl, filename };
  }

  downloadImage(dataUrl: string, filename: string): void {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  }

  private async waitForResources(): Promise<void> {
    await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  private async applyPreBlurredBackground(
    posterEl: HTMLElement,
    post: PostState,
    dimensions: ExportDimensions,
    glassPanel: HTMLElement,
  ): Promise<void> {
    const blurredBgDataUrl = await this.createBlurredBackground(
      post.image,
      dimensions.width,
      dimensions.height,
      post.blur,
      post.layout,
      post.format,
      glassPanel,
    );

    const glassPanelBg = posterEl.querySelector('.glass-panel-bg') as HTMLElement;
    if (glassPanelBg) {
      glassPanelBg.style.backgroundImage = `url('${blurredBgDataUrl}')`;
      glassPanelBg.style.backgroundSize = '100% 100%';
      glassPanelBg.style.backgroundPosition = '0 0';
      glassPanelBg.style.backgroundRepeat = 'no-repeat';
      glassPanelBg.style.backdropFilter = 'none';
      (glassPanelBg.style as unknown as Record<string, string>)['webkitBackdropFilter'] = 'none';
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  private createBlurredBackground(
    imageSrc: string,
    width: number,
    height: number,
    blurAmount: number,
    layout: string,
    format: string,
    panelElement: HTMLElement,
  ): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        const panelDimensions = this.calculatePanelDimensions(
          width,
          height,
          layout,
          format,
          panelElement,
        );

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(panelDimensions.width, 1);
        canvas.height = Math.max(panelDimensions.height, 1);
        const ctx = canvas.getContext('2d')!;

        ctx.filter = `blur(${blurAmount}px)`;

        const scale = Math.max(width / img.width, height / img.height) * 1.1;
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const imgOffsetX = (width - scaledWidth) / 2;
        const imgOffsetY = (height - scaledHeight) / 2;

        const drawX = imgOffsetX - panelDimensions.x;
        const drawY = imgOffsetY - panelDimensions.y;

        ctx.drawImage(img, drawX, drawY, scaledWidth, scaledHeight);

        resolve(canvas.toDataURL('image/png'));
      };

      img.onerror = () => resolve(imageSrc);
      img.src = imageSrc;
    });
  }

  private calculatePanelDimensions(
    width: number,
    height: number,
    layout: string,
    format: string,
    _panelElement: HTMLElement,
  ): { width: number; height: number; x: number; y: number } {
    switch (layout) {
      case 'left':
        return { width: width * 0.75, height, x: 0, y: 0 };
      case 'right':
        return { width: width * 0.75, height, x: width * 0.25, y: 0 };
      case 'center': {
        const centerWidth = format === 'feed' ? width * 0.88 : width * 0.85;
        const centerHeight = format === 'feed' ? height * 0.7 : height * 0.6;
        return {
          width: centerWidth,
          height: centerHeight,
          x: (width - centerWidth) / 2,
          y: (height - centerHeight) / 2,
        };
      }
      case 'split':
        if (format === 'feed') {
          return { width, height, x: 0, y: 0 };
        }
        return { width, height: height * 0.5, x: 0, y: height * 0.5 };
      case 'splitTop':
        if (format === 'feed') {
          return { width, height, x: 0, y: 0 };
        }
        return { width, height: height * 0.5, x: 0, y: 0 };
      default:
        return { width, height, x: 0, y: 0 };
    }
  }

  private generateFilename(post: PostState): string {
    const colorName = post.color.toUpperCase();
    const formatName = post.format.toUpperCase();
    const timestamp = Date.now();
    return `FC_${colorName}_${formatName}_${timestamp}.png`;
  }
}

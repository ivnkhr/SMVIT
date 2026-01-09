import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { EditorActions } from '../../../../core/store/editor/editor.actions';
import { selectImage } from '../../../../core/store/editor/editor.selectors';
import { selectImageCategories } from '../../../../core/store/assets/assets.selectors';

@Component({
  selector: 'app-background-gallery',
  template: `
    <div class="section">
      <div class="bg-subcategories">
        @for (category of categories(); track category.id) {
          <button
            type="button"
            class="bg-subcategory-btn"
            [class.active]="selectedCategoryId() === category.id"
            (click)="selectCategory(category.id)">
            {{ category.name }}
          </button>
        }
      </div>

      <div class="gallery-container">
        <div class="image-gallery">
          @for (image of currentCategoryImages(); track image) {
            <button
              type="button"
              class="image-thumb"
              [class.active]="currentImage() === image"
              [style.background-image]="'url(' + image + ')'"
              [attr.aria-pressed]="currentImage() === image"
              (click)="selectImage(image)">
            </button>
          }
        </div>
      </div>

      <div class="upload-section">
        <label class="upload-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4" />
          </svg>
          Wgraj Własne
          <input
            type="file"
            accept="image/*"
            (change)="onFileSelected($event)" />
        </label>
      </div>
    </div>
  `,
  styles: [
    `
      .section {
        margin-bottom: 24px;
      }

      .bg-subcategories {
        display: flex;
        gap: 4px;
        margin-bottom: 12px;
      }

      .bg-subcategory-btn {
        flex: 1;
        padding: 8px 10px;
        background: #1a1a1a;
        border: 1px solid #333;
        color: #666;
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.03em;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;

        &:hover {
          border-color: #444;
          color: #888;
        }

        &.active {
          background: #222;
          border-color: #dc143c;
          color: #fff;
        }
      }

      .gallery-container {
        max-height: calc(100vh - 600px);
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
      }

      .image-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .image-thumb {
        aspect-ratio: 9/16;
        background-size: cover;
        background-position: center;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;

        &:hover {
          border-color: #444;
          transform: scale(1.02);
        }

        &.active {
          border-color: #dc143c;
        }
      }

      .upload-section {
        margin-top: 12px;
      }

      .upload-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        background: #1a1a1a;
        border: 2px dashed #333;
        border-radius: 4px;
        color: #555;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border-color: #555;
          color: #888;
        }

        svg {
          width: 20px;
          height: 20px;
        }

        input {
          display: none;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundGalleryComponent {
  private readonly store = inject(Store);

  selectedCategoryId = signal('abstract');

  categories = toSignal(this.store.select(selectImageCategories), {
    initialValue: [],
  });

  currentImage = toSignal(this.store.select(selectImage), {
    requireSync: true,
  });

  currentCategoryImages = computed(() => {
    const categoryId = this.selectedCategoryId();
    const allCategories = this.categories();
    const category = allCategories.find((c) => c.id === categoryId);
    return category?.images ?? [];
  });

  selectCategory(categoryId: string): void {
    this.selectedCategoryId.set(categoryId);
  }

  selectImage(image: string): void {
    this.store.dispatch(EditorActions.setImage({ image }));
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        this.store.dispatch(EditorActions.setImage({ image: base64 }));
      };
      reader.readAsDataURL(file);
    }
  }
}

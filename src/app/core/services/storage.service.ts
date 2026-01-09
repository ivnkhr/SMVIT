import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { PostState } from '../models';

const DB_NAME = 'smvit-db';
const DB_VERSION = 1;
const STORE_NAME = 'editor-state';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private db: IDBPDatabase | null = null;
  private readonly STORAGE_KEY = 'smvit_editor_state';

  async initDb(): Promise<void> {
    try {
      this.db = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        },
      });
    } catch (error) {
      console.warn('IndexedDB not available, using localStorage fallback', error);
    }
  }

  async saveState(state: PostState): Promise<void> {
    if (this.db) {
      try {
        await this.db.put(STORE_NAME, state, 'currentState');
        return;
      } catch (error) {
        console.warn(
          'IndexedDB save failed, falling back to localStorage',
          error
        );
      }
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state', error);
    }
  }

  async loadState(): Promise<PostState | null> {
    if (this.db) {
      try {
        const state = await this.db.get(STORE_NAME, 'currentState');
        if (state) return state as PostState;
      } catch (error) {
        console.warn(
          'IndexedDB load failed, falling back to localStorage',
          error
        );
      }
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as PostState;
      }
    } catch (error) {
      console.error('Failed to load state from localStorage', error);
    }

    return null;
  }

  async clearState(): Promise<void> {
    if (this.db) {
      try {
        await this.db.delete(STORE_NAME, 'currentState');
      } catch (error) {
        console.warn('IndexedDB clear failed', error);
      }
    }

    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear localStorage', error);
    }
  }
}

import storage from 'redux-persist/lib/storage';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/config.const';

export async function getAccessToken() {
  try {
    const token = await storage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    return token || 'default token';
  } catch (e) {
    return 'error token';
  }
}

export const Storage = storage;

import storage from 'redux-persist/lib/storage';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/config.const';

export async function getAccessToken() {
	try {
		return await storage.getItem(ACCESS_TOKEN_STORAGE_KEY);
	} catch (e) {
		return null;
	}
}

export const Storage = storage;

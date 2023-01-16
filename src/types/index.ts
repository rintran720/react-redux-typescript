export type APIResponse<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

export type ReduxAction<T> = {
  payload: T;
  type: string;
};

export interface Book {
  id: string;
  name: string;
  image_url: string;
  created_at: Date;
}

export interface BookState {
  list: Book[];
}

export type ThemeMode = 'dark' | 'light';
export interface ThemeState {
  mode: ThemeMode;
}

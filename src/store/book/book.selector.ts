import { RootState } from '../config';

export function listBookSelector(state: RootState) {
  return state.book.list;
}

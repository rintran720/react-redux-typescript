import { Book } from '~/types';
import Axios from '../axios';

export default async function getBooksAPI() {
  return Axios.get<Book[]>('book');
}

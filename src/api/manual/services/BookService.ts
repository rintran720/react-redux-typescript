import { Book } from '~/types';
import Axios from '../axios';

async function getBooks() {
  return Axios.get<Book[]>('book');
}

export const BookService = {
  getBooks,
};

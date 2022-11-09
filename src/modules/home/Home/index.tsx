import React, { useEffect } from 'react';
import { listBookSelector } from '~/store/book/book.selector';
import { useAppSelector } from '~/store/config';
import bookAPI from '../hooks/useBookAPI';
import HomeComponent from './component';

function Home() {
	const [getBooks, _books] = bookAPI.useGetBook();
	const books = useAppSelector(listBookSelector);

	useEffect(() => {
		getBooks();
	}, [getBooks]);

	console.log('render', _books, books);

	return <HomeComponent />;
}

export default Home;

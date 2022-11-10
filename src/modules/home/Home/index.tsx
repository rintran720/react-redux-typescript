import React, { useEffect } from 'react';
import bookAPI from '../hooks/useBookAPI';
import HomeComponent from './component';

function Home() {
	const [getBooks, _books, loading] = bookAPI.useGetBook();
	// const books = useAppSelector(listBookSelector);

	useEffect(() => {
		getBooks();
	}, [getBooks]);

	console.log('render', _books, loading);

	return <HomeComponent />;
}

export default Home;

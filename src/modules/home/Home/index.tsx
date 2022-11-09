import React, { useEffect } from 'react';
import bookAPI from '../hooks/useBookAPI';
import HomeComponent from './component';

function Home() {
	const [getBooks, _books] = bookAPI.useGetBook();
	// const books = useAppSelector(listBookSelector);

	useEffect(() => {
		// console.log(getBooks);
		getBooks();
	}, [getBooks]);

	console.log('render', _books);

	return <HomeComponent />;
}

export default Home;

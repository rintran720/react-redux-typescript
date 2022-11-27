import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect } from 'react';
import { axiosTransform } from '~/api/manual/axios';
import getBooksAPI from '~/api/manual/book/getBooksAPI';
import { Pet, PetService } from '~/api/swagger';
import useAPI from '~/hooks/useAPI';
import { Book } from '~/types';
import HomeComponent from './component';

function Home() {
	// const books = useAppSelector(listBookSelector);
	const transformPet = useCallback((pets: Pet[]): Pet[] => {
		return pets.map((pet) => ({ ...pet, name: `${pet.name}-mapped` }));
	}, []);

	const [findPetsByStatusCall, pets] = useAPI<Pet[], Pet[]>({
		request: PetService.findPetsByStatus,
		transform: transformPet,
	});

	const [getBooks, books] = useAPI<AxiosResponse<Book[]>, Book[]>({
		request: getBooksAPI,
		transform: axiosTransform<Book[]>,
	});

	useEffect(() => {
		findPetsByStatusCall(undefined, 'available');
		getBooks(undefined);
	}, [findPetsByStatusCall, getBooks]);

	console.log('render', pets, books);

	return <HomeComponent />;
}

export default Home;

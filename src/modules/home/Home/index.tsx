import React, { useCallback, useEffect } from 'react';
import { Pet, PetService } from '~/api/swagger';
import useAPI from '~/hooks/useAPI';
import HomeComponent from './component';

function Home() {
	// const books = useAppSelector(listBookSelector);
	const transformPet = useCallback((pets: Pet[]): Pet[] => {
		return pets.map((pet) => ({ ...pet, name: `${pet.name}-mapped` }));
	}, []);

	const [findPetsByStatusCall, pets, loading] = useAPI<Pet[], Pet[]>({
		request: PetService.findPetsByStatus,
		transform: transformPet,
	});

	useEffect(() => {
		findPetsByStatusCall(undefined, 'available');
	}, [findPetsByStatusCall]);

	console.log('render', pets, loading);

	return <HomeComponent />;
}

export default Home;

import React, { useCallback, useEffect, useMemo } from 'react';
import getBooksAPI from '~/api/manual/book/getBooksAPI';
import { Pet, PetService } from '~/api/swagger';
import useAPI from '~/hooks/useAPI';
import { Book } from '~/types';
import useAxiosAPI from '../../common/hooks/useAxiosAPI';
import HomeComponent from './component';

function Home() {
  // const books = useAppSelector(listBookSelector);

  // Start: Example 1 to use useAPI hook
  const petsTransform = useCallback((pets: Pet[]): Pet[] => {
    return pets.map((pet) => ({ ...pet, name: `${pet.name}-mapped` }));
  }, []);
  const findPetsByStatusPromise = useMemo(() => PetService.findPetsByStatus('available'), []); // must use useMemo, useCallback is bad choice
  const [findPetsByStatusFetch, pets] = useAPI<Pet[]>({
    request: findPetsByStatusPromise,
    transform: petsTransform, // optional
  });

  useEffect(() => {
    findPetsByStatusFetch();
  }, [findPetsByStatusFetch]);
  // End: Example 1 to use useAPI hook

  // Start: Example 2 to use simple useAxiosAPI hook with callback
  const getBooksPromise = useMemo(() => getBooksAPI(), []); // must use useMemo, useCallback is bad choice
  const [getBooksFetch, books] = useAxiosAPI<Book[]>({
    request: getBooksPromise,
  });

  useEffect(() => {
    getBooksFetch((r) => console.log('callback', r));
  }, [getBooksFetch]);
  // End: Example 2 to use useAPI hook

  console.log('render', pets, books);

  return <HomeComponent />;
}

export default Home;

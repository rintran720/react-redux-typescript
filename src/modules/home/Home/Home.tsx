import React, { useCallback, useEffect, useMemo } from 'react';
import { Pet } from '~/api/petstore';
import useAPI from '~/hooks/useAPI';
import { Book } from '~/types';
import useAxiosAPI from '~/hooks/useAxiosAPI';
import HomeComponent from './component';
import { BookService } from '~/api/manual';
import { PetStoreAPI } from '~/api/petstore/server';
// import { listBookSelector } from '~/store/theme/theme.selector';

function Home() {
  // Get data from REDUX
  // const books = useAppSelector(listBookSelector);

  // Start: Example 1 to use useAPI hook, openapi
  const petsTransform = useCallback((pets: Pet[]): Pet[] => {
    return pets.map((pet) => ({ ...pet, name: `${pet.name}-mapped` }));
  }, []);
  const findPetsByStatusPromise = useMemo(() => PetStoreAPI.pet.findPetsByStatus('available'), []); // must use useMemo, useCallback is bad choice
  const [findPetsByStatusFetch, pets] = useAPI<Pet[]>({
    request: findPetsByStatusPromise,
    transform: petsTransform, // optional
  });

  useEffect(() => {
    findPetsByStatusFetch();
  }, [findPetsByStatusFetch]);
  // End: Example 1 to use useAPI hook

  // Start: Example 2 to use simple useAxiosAPI hook with callback, manual api
  const getBooksPromise = useMemo(() => BookService.getBooks(), []); // must use useMemo, useCallback is bad choice
  const [getBooksFetch, books] = useAxiosAPI<Book[]>({
    request: getBooksPromise,
  });

  useEffect(() => {
    getBooksFetch();
  }, [getBooksFetch]);
  // End: Example 2 to use useAxiosAPI hook

  console.log('render', pets, books);

  return <HomeComponent name={'John Smith'} />;
}

export default Home;

import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { Book, BookState } from '~/types';

const initialState: BookState = {
	list: [],
};

const bookSlice = createSlice<BookState, SliceCaseReducers<BookState>, string>({
	name: 'book',
	initialState,
	reducers: {
		newPost: (state, action: { payload: Book; type: string }) => {
			state.list.push(action.payload);
		},
		setBooks: (state, action: { payload: Book[]; type: string }) => {
			state.list = [...action.payload];
		},
	},
});

export const bookActions = bookSlice.actions;
export const bookReducers = bookSlice.reducer;
export default bookSlice;

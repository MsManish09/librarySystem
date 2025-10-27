import { createSlice } from '@reduxjs/toolkit';
import booksData from '../utils/booksData';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookData: booksData
  },
  reducers: {
    //method to add new book from user, at the start
    addBook: (state, action) => {
      state.bookData.unshift(action.payload);
    },
  }
});

// Export actions
export const { addBook } = bookSlice.actions;

// Export reducer
export default bookSlice.reducer;

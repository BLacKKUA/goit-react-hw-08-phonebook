import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchNumbers } from "./operations";
  
const rootSlice = createSlice({
   name: 'contact',
   initialState: {
         contacts: {
      items: [],
      isLoading: false,
      error: null
   },
  filter: ""
   },
   reducers: {
      filterContact(state, action) {
         return {...state, filter: action.payload}
      },
   },
   extraReducers: {
      [fetchNumbers.pending](state) {
         state.contacts.isLoading = true;
      },
      [fetchNumbers.fulfilled](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         state.contacts.items = action.payload;
      },
      [fetchNumbers.rejected](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = action.payload;
      },
      [addContact.pending](state) {
         state.contacts.isLoading = true;
      },
      [addContact.fulfilled](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         state.contacts.items.push(action.payload);
      },
      [addContact.rejected](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = action.payload;
      },
      [deleteContact.pending](state) {
         state.contacts.isLoading = true;
      },
      [deleteContact.fulfilled](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = null;
         const idx = state.contacts.items.findIndex(item => item.id === action.payload.id)
         state.contacts.items.splice(idx, 1)
      },
      [deleteContact.rejected](state, action) {
         state.contacts.isLoading = false;
         state.contacts.error = action.payload;
      }
   }
})
export const { filterContact } = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
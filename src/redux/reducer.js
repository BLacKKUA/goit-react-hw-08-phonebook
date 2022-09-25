import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

export const initialState = {
  contacts: {
      items: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
}
  
const rootSlice = createSlice({
   name: 'contact',
   initialState: initialState,
   reducers: {
      addContact: {
         reducer(state, action) {
         return {...state, contacts: { items: [...state.contacts.items, action.payload] }}
         },
         prepare(name, number) {
            return {
               payload: {
                  name,
                  number,
                  id: nanoid()
               }
            }
         }
      },
      deleteContact(state, action) {
         return {...state, contacts: {items:state.contacts.items.filter(contact => contact.id !== action.payload)}}
      },
      filterContact(state, action) {
         return {...state, filter: action.payload}
      },
   }
})
export const { addContact, deleteContact, filterContact } = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
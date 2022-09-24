import { nanoid } from "nanoid"

export const addContact = (name,number) => {
   return {
      type: 'contact/addContact',
      payload: {
         name,
         number,
         id: nanoid()
      }
   }
}

export const deleteContact = (id) => {
   return {
      type: 'contact/deleteContact',
      payload: id
   }
}

export const filterContact = (value) => {
   return {
      type: 'contact/filterContact',
      payload: value
   }
}
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
  
export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "contact/addContact":
         return {
            ...state, contacts: {items:[...state.contacts.items, action.payload]}
         }
      case "contact/deleteContact":
         return {
            ...state, contacts: {items:state.contacts.items.filter(contact => contact.id !== action.payload)}
         }
      case "contact/filterContact":
         return {
            ...state, filter: action.payload
         }
      default:
         return state;
   }
}
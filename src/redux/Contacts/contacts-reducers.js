import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./contact-actions";

const initState = [
    { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
    { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
    { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
    { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
];

const contactsList = createReducer(initState, {
    [addContact]: (state, { payload }) => {
        if (state.find(contact => contact.name === payload.name)) {
            alert('this contact already exists');
            return state;
        } else {
            return [...state, payload];
        }
    },
    
    [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload)
});

const contactFilter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
    items: contactsList,
    filter: contactFilter,
})

// const contactsList = (state = initState, action) => {
//     switch (action.type) {
//         case ADD_CONTACT:
//             return [...state, action.payload];
//         case DELETE_CONTACT:
//             return state.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// }

// const contactFilter = (state = "", {payload}) => {
//     return payload;
// }

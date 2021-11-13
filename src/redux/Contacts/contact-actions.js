import { createAction } from "@reduxjs/toolkit";
// export const addContact = data => ({
//     type: 'contact/add',
//     payload: data,
// });

// export const deleteContact = id => ({
//     type: 'contact/delete',
//     payload: id,
// });

// export const filterContact = value => ({
//     type: 'filter/contact,
//     payload: value,
// });

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const filterContact = createAction('filter/contact');
import { configureStore} from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contacts-reducers';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "contacts",
    storage,
    blacklist: ['filter'],
};


export const store = configureStore({
    reducer: persistReducer(persistConfig, contactsReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)


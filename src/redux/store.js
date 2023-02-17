import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
//import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice.js';
import { authReducer } from './authSlice';

const persistSet ={
  key: 'root',
  storage: storage,
  whitelist: ['token']
};

const persistAuthReducer = persistReducer(persistSet, authReducer);


export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filtersReducer,
    auth:persistAuthReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    //devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
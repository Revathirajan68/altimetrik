import { configureStore } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import rootReducer from './combineReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
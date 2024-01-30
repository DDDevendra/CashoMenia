import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../reducers/index';

const persistConfig = {
 key: 'root',
 storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
 reducer: persistedReducer,
});

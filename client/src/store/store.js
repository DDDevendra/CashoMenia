// store.js

import { configureStore } from '@reduxjs/toolkit';
import index from '../reducers/index';

const store = configureStore({
  reducer: index,
  // Add other configurations if needed
});

export default store;

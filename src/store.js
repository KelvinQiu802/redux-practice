import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import animalSlice from './features/Animal/animalSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    animal: animalSlice,
  },
});

export default store;

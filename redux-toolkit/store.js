import { configureStore } from '@reduxjs/toolkit';
import CategoryData from './CategoryData';
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer: {
        value: CounterSlice,
        values: CategoryData,
    }
})

export default store;
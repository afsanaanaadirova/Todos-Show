import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from "./components/slices/slice"

const reducer = {
    slice: sliceReducer,
}

export const store = configureStore({
    reducer: reducer,
    devTools: true,
});
import { configureStore } from "@reduxjs/toolkit";
import loadedReducter from '../components/preloader/preloaderSlice' 

const rootReducer ={
    loaded:loadedReducter,
}
const store = configureStore({
    reducer:rootReducer,
})
export default store
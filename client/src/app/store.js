import { configureStore } from "@reduxjs/toolkit";
import loadedReducter from '../components/preloader/preloaderSlice' 
import productReducter from '../features/products/productSlice' 

const rootReducer ={
    loaded:loadedReducter,
    product:productReducter,
}
const store = configureStore({
    reducer:rootReducer,
})
export default store
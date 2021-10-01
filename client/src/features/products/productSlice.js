import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name:'product',
    initialState:"",
    reducers:{
        productApi:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const { reducer,actions } =product
export const { productApi } = actions
export default reducer;
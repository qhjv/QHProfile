import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name:'product',
    initialState:"",
    reducers:{
        setProductApi:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const { reducer,actions } =product
export const { setProductApi } = actions
export default reducer;
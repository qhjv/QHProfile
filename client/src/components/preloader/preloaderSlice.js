import { createSlice } from "@reduxjs/toolkit";

const loaded = createSlice({
    name:'loader',
    initialState:"",
    reducers:{
        loadedSet:(state,action)=>{
            state=action.payload
            return state
    },
    }
})
const {reducer,actions} =loaded
export const {loadedSet}=actions
export default reducer;
import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name:'theme',
    initialState:{
        theme:''
    },
    reducers:{
        setThemeData:(state,action)=>{
            return action.payload;
        }
    }
});

export const {setThemeData} = themeSlice.actions;

export default themeSlice.reducer;
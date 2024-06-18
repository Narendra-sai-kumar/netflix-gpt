import { createSlice } from "@reduxjs/toolkit";

const initialUser = null;

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers:{
        addUser : (state, action) => {
            console.log("action", action);
            return state = action.payload;

        },
        removeUser: (state, action) => {
            return state=null;
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
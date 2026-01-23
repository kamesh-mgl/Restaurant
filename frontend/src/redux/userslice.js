import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null
}

export const userslice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },

        getUser: (state) => {
            return state.user;
        }

    }
})

export const { setUser, getUser } = userslice.actions;
export default userslice.reducer

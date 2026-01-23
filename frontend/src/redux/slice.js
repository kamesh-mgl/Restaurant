import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    menuItems: null
}

export const menuSlice = createSlice({
    name: "menuItems",
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.menuItems = action.payload
        },
        deleteItem: (state, action) => {
            state.menuItems = state.menuItems.filter((ele, index) => {
                return index != action.payload
            })
        }
    }
})

export const { setItem, deleteItem } = menuSlice.actions;
export default menuSlice.reducer
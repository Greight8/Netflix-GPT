import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name: "gpt",
        initialState: {
            gptSearch: false
        },
        reducers: {
            toggleGptSearchView: (state, action) => {
                state.gptSearch = !state.gptSearch
            },
        }
    }
)

export const { toggleGptSearchView } = gptSlice.actions

export default gptSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name: "gpt",
        initialState: {
            gptSearch: false,
            searchMovies: null,
            tmdbSearchMovies: null
        },
        reducers: {
            toggleGptSearchView: (state, action) => {
                state.gptSearch = !state.gptSearch
            },

            addGpthMovieResult: (state, action) => {
                const { movieNames, movieResults } = action.payload
                state.searchMovies = movieNames
                state.tmdbSearchMovies = movieResults
            }
        }
    }
)

export const { toggleGptSearchView, addGpthMovieResult } = gptSlice.actions

export default gptSlice.reducer
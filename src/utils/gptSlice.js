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
            },

            clearCart: (state, action) => {
                state.searchMovies = action.payload
                state.tmdbSearchMovies = action.payload
            }
        }
    }
)

export const { toggleGptSearchView, addGpthMovieResult, clearCart } = gptSlice.actions

export default gptSlice.reducer
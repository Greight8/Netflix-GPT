import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailerVideo: null,
        },

        reducers: {
            addNowPlayingMovies: (state, acttion) => {
                // state.nowPlayingMovies.push(action.payload)
                // return action.payload
                state.nowPlayingMovies = acttion.payload
            },
            addTrailerVideo: (state, action) => {
                state.trailerVideo = action.payload
                // return action.payload
            }
        }
    }
)

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer
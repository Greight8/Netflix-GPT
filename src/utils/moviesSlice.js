import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            popularMovies: null,
            topRatedMovies: null,
            upcomingMovies: null,
            trailerVideo: null,
        },

        reducers: {
            addNowPlayingMovies: (state, acttion) => {
                // state.nowPlayingMovies.push(action.payload)
                // return action.payload
                state.nowPlayingMovies = acttion.payload
            },

            addPopularMovies: (state, acttion) => {
                state.popularMovies = acttion.payload
            },

            addTopRatedMovies: (state, acttion) => {
                state.topRatedMovies = acttion.payload
            },

            addUpcomingMovies: (state, acttion) => {
                state.upcomingMovies = acttion.payload
            },

            addTrailerVideo: (state, action) => {
                state.trailerVideo = action.payload
                // return action.payload
            }
        }
    }
)

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer
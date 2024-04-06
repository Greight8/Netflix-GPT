import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptSearchReducer from "./gptSlice"
import configReducer from "./configSlice"
import supportedLanguagesReducer from "./supportedLanguagesSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptSearchReducer,
        config: configReducer,
        supportedLanguages: supportedLanguagesReducer,
    }
})

export default appStore
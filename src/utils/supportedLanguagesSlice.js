import { createSlice } from "@reduxjs/toolkit";

const SupportedLanguagesSlice = createSlice(
    {
        name: "supportedLanguages",
        initialState: null,

        reducers: {
            addSupportedLanguages: (state, action) => {
                return action.payload
            }
        }
    }
)

export const { addSupportedLanguages } = SupportedLanguagesSlice.actions

export default SupportedLanguagesSlice.reducer
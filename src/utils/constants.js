export const netflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const Background_Img = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const MyphotoURL = "https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb-2HamFwKzPuJRxE5pQeGH0W5yeBHpMIiTJEAnVk2Z4V5YPL7H8oYzZAWespUtKFbFaGlE4TeN3AxQell2V03E6_XRmk_8.png?r=d8a"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [
    // identifier should be same as inside language constants
    { name: "English", identifier: "en" },
    { name: "हिंदी", identifier: "hindi" },
    { name: "española", identifier: "spanish" }
]

// export const OPENAI_KEY = "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"
// export const OPENAI_KEY = "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"
// export const OPENAI_KEY = "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"
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
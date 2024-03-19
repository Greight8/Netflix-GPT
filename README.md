# Netflix GPT

- create react app
- configured Tailwind
- Header (netflix logo)
- Routing of app (body.js)
- Sign Up form
- Login Form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app to firebase (still need to do it)
- Create SignUp user account (through firebase api)
- Create Login user account (through firebase api)
- Created Redux store with userSlice
- implemented Sign out (through firebase api)
- Update Profile of our user (through firebase api)
- BugFix : Sign up user displayName , Profile picture update
- BugFix : if the user is not loggedin redirect "/browse" page to "/" page (logged in page) and vice-versa
- Unsubscribed to the onAuthStateChanged api
- Added hardcoded values to the constant file

- Register to TMDB & get the access token
- Get now Playing movies data in the custom hook (through TMDB now playing movie api)
- Created  MovieSlice And saved the data in the store
- Planned MainContainer & SecondryContainer in browse.js
- Planned VideoTitle & VideoBackground inside MainContainer.js
- Get Movie trailer in a custom hook inside VideoBackground.js
- And update the store with Movie trailer data
- Embedded youtube video & make it autoplay & mute
- Used tailwindcss to make MainContainer.js like netflix

# Features

- Login / Sign Up 
     - Sign up / Sign In Form
     - Redirect to main browse page

- main browse page (only after login)
    - header
    - main movie 
           - Trailer in Background
           - Title & Description
           - Movie Sugesstions
                - MovieLists * N  ( with vertical scrollbar)

- NetflixGPT
        - Search Bar
        - Movie Sugestions 


# UI

- Main Container
     - Movie Background
     - Movie Title

- Secondry Container
     - Movie List * n
        - Cards * n
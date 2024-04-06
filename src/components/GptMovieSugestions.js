import { useSelector } from "react-redux"
import MovieLists from "./MovieLists"

const GptMovieSugestions = () => {
    const gpt = useSelector((store) => {
        return store.gpt
    })

    const { searchMovies, tmdbSearchMovies } = gpt

    if (!searchMovies && !tmdbSearchMovies) {
        return
    }

    // console.log("value of tmdbSearchMovies is", tmdbSearchMovies)

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            {searchMovies.map((movieNames, index) => {
                return <MovieLists key={movieNames} title={movieNames} movies={tmdbSearchMovies[index].value} />
            })}
        </div>
    )
}

export default GptMovieSugestions

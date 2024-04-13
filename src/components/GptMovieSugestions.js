import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/gptSlice";
import MovieLists from "./MovieLists"

const GptMovieSugestions = () => {
    const dispatch = useDispatch();

    // const gpt = useSelector((store) => {
    //     return store.gpt
    // })

    // const { searchMovies, tmdbSearchMovies } = gpt

    const { searchMovies, tmdbSearchMovies } = useSelector((store) => {
        return store.gpt
    })


    if (!searchMovies) {
        return null
    }

    // 3) func handleClearCart
    const handleClearCart = () => {
        dispatch(clearCart(null));
    }

    // console.log("value of tmdbSearchMovies is", tmdbSearchMovies)

    return (
        <>
            {searchMovies && <button className="flex justify-center align-middle w-[192px] mx-auto my-[48px] py-[7px] font-[20px] text-white bg-purple-800" onClick={handleClearCart}>Delete</button>}

            <div className="p-4 m-4 bg-black text-white bg-opacity-90">
                {searchMovies.map((movieNames, index) => {
                    return <MovieLists key={movieNames} title={movieNames} movies={tmdbSearchMovies[index].value} />
                })}
            </div>
        </>
    )
}

export default GptMovieSugestions

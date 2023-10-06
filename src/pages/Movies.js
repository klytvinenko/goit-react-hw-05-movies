import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import Form from "components/SearchForm/SearchForm";
import { fetchMovies } from "helpers/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //const visibleMovie = movie.filter(mov => mov.includes(movieId));
    useEffect(() => {
        const query = searchParams.get('query');
        if(!query) return;

        const fetchMovieByQuery = async () => {
            try {
                setError(null);
                setLoading(true);
                const data = await fetchMovies(query);
                setMovies(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovieByQuery();
    }, [searchParams]);

    if(error !== null) {
        return <p>Something went wrong. Error: {error}</p>;
    }


    return (
    <div>
        <Form setSearchParams={setSearchParams}/>

        {loading ? (<Loader/>) : (movies.length > 0 && <MovieList movies={movies}/>)}
     </div>
    );
};

export default Movies;
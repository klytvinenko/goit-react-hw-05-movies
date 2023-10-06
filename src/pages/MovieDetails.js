import Loader from "components/Loader/Loader";
import Movie from "components/Movie/Movie";
import { fetchMovieDetails } from "helpers/api";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId} = useParams();

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                setLoading(true);
                const { genres, id, overview, poster_path, title, vote_average } = await fetchMovieDetails(movieId);
                const genreList = genres.map(genre => genre.name);
                setMovieDetails({
                    genreList,
                    id,
                    overview,
                    poster_path,
                    title,
                    vote_average,
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [movieId]); 

    if (error !== null) {
        return <p>Something went wrong. Error: {error}</p>;
      }



return (
    <>
        {loading ? (<Loader/>) : (<Movie
            id={movieDetails.id}
          img={movieDetails.poster_path}
          title={movieDetails.title}
          genres={movieDetails.genresList}
          overview={movieDetails.overview}
          rating={movieDetails.vote_average}
        />)}
    </>
)

}

export default MovieDetails;
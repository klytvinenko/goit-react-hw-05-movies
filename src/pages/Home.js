import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import { fetchTrends } from "helpers/api";
import { useEffect, useState } from "react";

const Home = () => {

const [trends, setTrends] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

 useEffect(() => {
    const fetchTrendingList = async () => {
        try {
            setError(null);
            setLoading(true);
            const trendList = await fetchTrends();
            setTrends(trendList);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    };

    if(!trends.length) {
        fetchTrendingList();
    }
    }, [trends.length]);

    if(error !== null) {
        return <p>Something went wrong. Error: {error}</p>;
    }

    return (
        <div>
        <h1>Trending today: </h1>
        {loading ? <Loader/> : <MovieList movies = {trends}/>}
    </div>
    );
};

export default Home;
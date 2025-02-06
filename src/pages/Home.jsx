import MovieCard from '../components/MovieCard.jsx'
import React,{useState,useEffect} from 'react';
import "../css/Home.css"
import { searchMovies,getPopularMovies } from '../services/api.js';


function Home(){


    const [SearchQuery,setSearchQuery]=useState("");

    function handleSearchQuery(e){
        setSearchQuery(e.target.value);
    }

    const [movies, setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies= async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err);
                setError("Failed to load")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    },[])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(SearchQuery);
        setSearchQuery("");
    }

    return(
        <div className="home">

            <form action="POST" onSubmit={handleSearch} classname="search-form">
                <input value={SearchQuery} onChange={(e) => handleSearchQuery(e)} type="text" placeholder="Search for Movies....." className="search-input" />
                <button type="submit" className="search-button">Search 🔍</button>
            </form>

            <div className="movies-grid">

                {movies.map(movie =>
                ( movie.title.toLocaleLowerCase().startsWith(SearchQuery) &&
                <MovieCard movie={movie} key={movie.id}></MovieCard> 
            ))}

            </div>
        </div>
    );

}

export default Home;
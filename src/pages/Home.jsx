import MovieCard from '../components/MovieCard.jsx'
import React,{useState} from 'react';

function Home(){


    const [SearchQuery,setSearchQuery]=useState("");

    function handleSearchQuery(e){
        setSearchQuery(e.target.value);
    }

    const movies=[
        {id:1, title:"Jhon Wick", release_date:"2020"},
        {id:2, title:"Wild Robot", release_date:"2024"},
        {id:3, title:"Finding Nemo", release_date:"2018"},
        {id:4, title:"Krish", release_date:"2019"},
    ];

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

                {movies.map(movie =>( movie.title.toLocaleLowerCase().startsWith(SearchQuery) &&
                <MovieCard movie={movie} key={movie.id}></MovieCard> 
            
            ))}
            </div>
        </div>
    );

}

export default Home;
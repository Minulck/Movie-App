

function MovieCard({movie}){

    function onFavouriteClick(){
        alert("Clicked");
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
            </div>
            <div className="movie-overlay">
                <button className="favorit-btn" onClick={onFavouriteClick}>
                    🤍
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );

}

export default MovieCard
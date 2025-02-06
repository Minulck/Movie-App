const API_KEY = "31d46304607b5ae92cebbc72a998de2c"
const BASE_URL ="https://api.themoviedb.org/3"

export const getPopularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data =await response.json()
    return data.results
};

export const searchMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/search/movies?api_key=${API_KEY}&query={encodeURIComponent(
        query
        )}`
    );
    const data =await response.json()
    return data.results
};
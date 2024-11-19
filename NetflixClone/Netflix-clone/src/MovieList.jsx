
import "./MovieList.css";
import movies from "./movies";


const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie)=>(
        <div key={movie.id} className="movie-card">
            <img src={movie.image} className="movie-image" />
            <h1>Title:{movie.title}</h1>
            <h2>Language:{movie.language}</h2>
            <h3>Cost:{movie.cost}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList

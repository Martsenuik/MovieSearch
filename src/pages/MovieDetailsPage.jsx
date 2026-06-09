import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieDetails } from "../components/movieDetails/MovieDetails";

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const API_KEY = "3e6a8194f143f1b469a2a324282cb8d0";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => console.error("Помилка завантаження даних:", error));
  }, [movieId]);

  return (
    <section>
      {movieDetails ? (
        <MovieDetails movie={movieDetails} />
      ) : (
        <p>Завантаження інформації про фільм...</p>
      )}
    </section>
  );
};

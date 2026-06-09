import { useState, useEffect } from "react";
import { Home } from "../components/home/Home";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = "3e6a8194f143f1b469a2a324282cb8d0";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <section>
      <div>
        <Home movies={movies} />
      </div>
    </section>
  );
};

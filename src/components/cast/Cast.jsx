import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cast.css";

export const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();
  const API_KEY = "3e6a8194f143f1b469a2a324282cb8d0";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCastData(data.cast);
      })
      .catch((error) => console.error("Помилка завантаження даних:", error));
  }, [movieId]);

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";
  const PLACEHOLDER_IMAGE = "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <section className="cast">
      <ul className="cast-list">
        {castData.map((actor) => {
          const actorImage = actor.profile_path
            ? `${BASE_IMAGE_URL}${actor.profile_path}`
            : PLACEHOLDER_IMAGE;
          return (
            <li className="cast-item" key={actor.id}>
              <img className="cast-img" src={actorImage} alt="actor-img" />
              <p className="cast-name">{actor.name}</p>
              <p className="cast-character">Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

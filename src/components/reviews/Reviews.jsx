import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./reviews.css";

export const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const { movieId } = useParams();
  const API_KEY = "3e6a8194f143f1b469a2a324282cb8d0";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setReviewsData(data.results);
      })
      .catch((error) => console.error("Помилка завантаження даних:", error));
  }, [movieId]);

  return (
    <section className="reviews">
      {reviewsData.length > 0 ? (
        <ul className="reviews-list">
          {reviewsData.map(({ author, content, id }) => {
            return (
              <li className="reviews-item" key={id}>
                <h4 className="reviews-author">Author: {author}</h4>
                <p className="reviews-content">{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="reviews-error">
          We don't have any reviews for this movie.
        </p>
      )}
    </section>
  );
};

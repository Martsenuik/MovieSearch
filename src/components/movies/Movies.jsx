import { useState } from "react";
import { Link } from "react-router-dom";
import "./movies.css";
import { MovieDetails } from "../movieDetails/MovieDetails";

export const Movies = ({ searchData, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <section className="moviesSearch">
      <form className="moviesSearch-form" onSubmit={handleSubmit}>
        <input
          className="moviesSearch-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="moviesSearch-btn" type="submit">
          Search
        </button>
      </form>
      <ul className="moviesSearch-list">
        {searchData.map(({ title, id }) => {
          return (
            <li className="moviesSearch-item" key={id}>
              <Link to={`/movies/${id}`}>
                <p className="moviesSearch-item-title">{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

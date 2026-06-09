import { Outlet } from "react-router-dom";
import { Movies } from "../components/movies/Movies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MoviesPage = () => {
  const [searchData, setSearchData] = useState([]);
  const API_KEY = "3e6a8194f143f1b469a2a324282cb8d0";
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (text) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data.results);
      })
      .catch((error) => console.error("Помилка завантаження даних:", error));
  }, [searchQuery]);
  return (
    <section>
      <div>
        <Movies searchData={searchData} onSubmit={handleSearchSubmit} />
        <Outlet />
      </div>
    </section>
  );
};

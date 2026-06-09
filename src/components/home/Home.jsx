import { NavLink, Outlet } from "react-router-dom";
import "./home.css";

export const Home = ({ movies }) => {
  return (
    <section>
      <h3 className="home-title">Trending today</h3>
      <ul className="home-list">
        {movies.map((movie) => {
          return (
            <li className="home-item" key={movie.id}>
              <NavLink
                to={`/movies/${movie.id}`}
                className={({ isActive }) =>
                  `home-text ${isActive ? "active" : ""}`
                }
              >
                {movie.title || movie.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </section>
  );
};

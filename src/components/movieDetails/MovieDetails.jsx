import "./movieDetails.css";
import {
  NavLink,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

export const MovieDetails = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseDate = movie.release_date;
  const year = new Date(releaseDate).getFullYear();
  const rating = movie.vote_average;
  const userScore = rating ? (rating * 10).toFixed(0) : 0;
  const genresList =
    movie.genres && movie.genres.length > 0
      ? movie.genres.map((g) => g.name).join(", ")
      : "Жанри відсутні";

  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <section className="movieDetails">
      <button className="movieDetails-btn" onClick={() => navigate(-1)}>
        Go back
      </button>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to}>
            {" > "}
            <Link to={to}>{value}</Link>
          </span>
        );
      })}

      <div className="movieDetails-box">
        <img className="movie-img" src={posterUrl} alt="" />
        <div className="movie-info-box">
          <h1 className="movie-title">
            {movie.title} ({year})
          </h1>
          <p className="movie-user-score">User scorre: {userScore}%</p>
          <h3 className="movie-overview">Overview</h3>
          <p className="movie-overview-text">{movie.overview}</p>
          <h3 className="movie-genres">Genres</h3>
          <p className="movie-genres-text">{genresList}</p>
        </div>
        <div className="movie-additional-box">
          <h3 className="movie-additional">Additional information</h3>
          <div className="link-content">
            <Link className="movie-text-cast" to="cast">
              Cast
            </Link>
            <Link className="movie-text-reviews" to="reviews">
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { Header } from "./components/header/Header";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { Cast } from "./components/cast/Cast";
import { Reviews } from "./components/reviews/Reviews";
import "./App.css";

function App() {
  return (
    <>
      <section className="section">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;

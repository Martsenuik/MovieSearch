import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { HomePage } from "./pages/HomePage";
//import { MoviesPage } from "./pages/MoviesPage";
import { Header } from "./components/header/Header";
//import { MovieDetailsPage } from "./pages/MovieDetailsPage";
//import { Cast } from "./components/cast/Cast";
//import { Reviews } from "./components/reviews/Reviews";
import { lazy } from "react";
import "./App.css";
import { Suspense } from "react";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage").then((module) => ({
    default: module.MoviesPage,
  })),
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage").then((module) => ({
    default: module.MovieDetailsPage,
  })),
);
const Cast = lazy(() =>
  import("./components/cast/Cast").then((module) => ({ default: module.Cast })),
);
const Reviews = lazy(() =>
  import("./components/reviews/Reviews").then((module) => ({
    default: module.Reviews,
  })),
);

function App() {
  return (
    <>
      <section className="section">
        <BrowserRouter>
          <Header />
          <Suspense
            fallback={<div className="loading">Завантаження сторінки...</div>}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;

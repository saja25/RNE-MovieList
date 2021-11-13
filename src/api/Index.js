import { API_KEY } from "./Key";
const genres = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10752: "War",
  10770: "TV Movie",
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  try {
    const { results } = await fetch(API_URL).then((x) => x.json());
    const movies = results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }) => ({
        key: String(id),
        title: original_title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genre) => genres[genre]),
      })
    );

    return movies;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async (movie_id) => {
  const REVIEW_URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`;
  try {
    const { results } = await fetch(REVIEW_URL).then((x) => x.json());
    // console.log(results);
    const reviews = results.map(
      ({ author, content, created_at, id, author_details }) => ({
        author: author,
        review: content,
        time: created_at,
        key: id,
        author_details,
      })
    );
    // console.log(reviews);

    return reviews;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieSearch = async (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${query}`;
  try {
    const { results } = await fetch(URL).then((x) => x.json());
    // console.log(results);
    const movies = results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }) => ({
        key: String(id),
        title: original_title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genre) => genres[genre]),
      })
    );

    return movies;
  } catch (error) {
    console.log(error);
  }
};

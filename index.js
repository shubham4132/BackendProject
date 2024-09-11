const db = require("./db");
const fs = require("fs");
const Movie = require("./models/movies");
const mongoose = require("mongoose");

const jsonData = fs.readFileSync("movies.json", "utf8");
const moviesData = JSON.parse(jsonData);
async function seedDatabase() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.postedUrl,
        trailerUrl: movieData.trailerUrl,
      });

      await newMovie.save();
      console.log(`Movie "${newMovie.title}" seeded.`);
    }
    console.log("Database seeding complete.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();

//create a movie
const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Director Name",
  actors: ["Actor 1", "Actor 2"],
  language: "Hindi",
  country: "India",
  rating: 7.5,
  plot: "Plot of the movie",
  awards: "Awards received",
  posterUrl: "<https://example.com/poster.jpg>",
  trailerUrl: "<https://example.com/trailer.mp4>",
};
async function createMovie(movieData) {
  try {
    const movie = new Movie(movieData);
    const savedMovie = await movie.save();
    console.log("Created Movie", savedMovie);
  } catch (err) {
    throw err;
  }
}
createMovie(newMovie);

//READ A MOVIE
async function readMovie(movieTitle) {
  try {
    const foundMovie = await Movie.findOne({ title: movieTitle });
    console.log("Found Movie", foundMovie);
  } catch (err) {
    throw err;
  }
}
readMovie("Dilwale Dulhania Le Jayenge");

//Read All Movie

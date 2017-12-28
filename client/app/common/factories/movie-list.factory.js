import {Movie} from '../../model/movie.model';

export const MovieListFactory = ($q, $http, $log) => {
  // noinspection BadExpressionStatementJS
  'ngInject';

  let movieList = null;
  let movieListDeferred = null;
  let movieSearchDeferred = null;
  let addedToMovieListDeferred = null;

  const getMovieList = () => movieList;

  const fetchMovieList = (listName) => {
    movieListDeferred = $q.defer();

    $http.get('/rest/movielist/' + listName).then(response => {
      movieList = response.data;
      $log.info('Fetched single movie list', response.data);
      movieListDeferred.resolve(response);
    });

    return movieListDeferred.promise;
  };

  const searchMovies = (movieTitle) => {
    movieSearchDeferred = $q.defer();

    $http.get('/rest/search/' + movieTitle).then(response => {
      movieList = response.data;
      $log.info('Found movies in movie list factory', response.data);
      let movieSearchResults = [];
      response.data.Search.forEach(result => {
        // todo create converter method
        let movie = new Movie();
        movie.imdbId = result.imdbID;
        movie.name = result.Title;

        movieSearchResults.push(movie)
      });
      movieSearchDeferred.resolve(movieSearchResults);
    });

    return movieSearchDeferred.promise;
  };

  /**
   * Add to existing movie list.
   * @param {Movie} movie
   * @param {string} listName
   */
  const addToMovieList = (movie, listName) => {
    addedToMovieListDeferred = $q.defer();

    $http.post("/rest/movielist/" + listName, movie).then(response => {
      console.log('added to movie list in movie list factory', response.data);
      addedToMovieListDeferred.resolve(response.data);
    });

    return addedToMovieListDeferred.promise;
  };

  return {
    getMovieList,
    fetchMovieList,
    searchMovies,
    addToMovieList
  };
};


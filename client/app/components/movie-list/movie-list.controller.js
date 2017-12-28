export class MovieListController {
  /*@ngInject*/
  constructor($log, $state, MovieListFactory) {
    this.name = 'movieList';
    this.log = $log;
    this.state = $state;
    this.factory = MovieListFactory;

    this.movieTitleSearch = null;
    this.movieTitleSearchResults = [];

    this.movieList = null;
    this.moviesInMovieList = [];
  }

  $onInit() {
    this.movieList = this.factory.getMovieList();
    this.moviesInMovieList = this.movieList.movies;
    console.log('this.movieList', this.movieList);

  }

  search(movieTitle) {
    this.factory.searchMovies(movieTitle).then(resolvedResponse => {
      this.movieTitleSearchResults = resolvedResponse;
      console.log('resolvedResponse', resolvedResponse);
    })
  }

  /**
   *
   * @param {Movie} movie
   */
  addToMovieList(movie) {
    if (this._notInMoviesInMovieList(movie)) {
      this.factory.addToMovieList(movie, this.state.params.listName).then(resolvedResponse => {
        console.log('resolvedResponse', resolvedResponse);
        this.moviesInMovieList = resolvedResponse;
      });

    }
    this._removeMovieFromSearchResults(movie);
  }

  // region util

  /**
   * Determines if the movie is not in the movie list
   * @param {Movie} movie
   * @private
   * @return {boolean} true if the move is not in the movie list
   */
  _notInMoviesInMovieList(movie) {
    return !_.some(this.moviesInMovieList, (m) => m.imdbId === movie.imdbId);
  }

  _removeMovieFromSearchResults(movie) {
    this.movieTitleSearchResults = this.movieTitleSearchResults.filter(movieInList => movieInList.name !== movie.name);
  }

  // endregion util
}

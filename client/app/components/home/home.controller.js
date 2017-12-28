import * as _ from 'lodash';

export class HomeController {
  /*@ngInject*/
  constructor($log, $state, HomeFactory) {
    this.log = $log;
    this.state = $state;
    this.factory = HomeFactory;

    this.newMovieListName = null;
  }

  $onInit() {
    this._setMovieLists();
  }

  createNewMovieList(newMovieListName) {
    this.factory.createNewMovieList(newMovieListName).then(() => this._setMovieLists());
  }

  calculateAverageRating(listName) {
    const movieList = this.movieLists.find(movieList => movieList.name === listName);
    const sum = _.sumBy(movieList.movies, 'rating');
    if (movieList.movies) {
      return sum / movieList.movies.length;
    }

    return null;
  }

  hasInput(input) {
    return _.isString(input) && !_.isEmpty(input);
  }

  _setMovieLists() {
    this.movieLists = this.factory.getMovieLists();
    console.log('movieLists in home controller', this.movieLists);
  }
}

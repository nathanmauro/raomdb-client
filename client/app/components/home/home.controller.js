import {MovieList} from '../../model/movie-list.model';
import * as _ from 'lodash';

export class HomeController {
  /*@ngInject*/
  constructor($log, $state, HomeFactory) {
    this.log = $log;
    this.state = $state;
    this.factory = HomeFactory;

    this.newMovieListName = null;
    this.currentMovieList = null;
  }

  $onInit() {
    this.movieLists = this.factory.getMovieLists();
    console.log('movieLists in home controller', this.movieLists);
  }

  createNewMovieList(newMovieListName) {
    this.factory.createNewMovieList(new MovieList(newMovieListName))
      .then(response => {
        this.movieLists = response.data;
        console.log('movieLists', response.data);
      });
  }

  calculateAverageRating(listName) {
    const movieList = this.movieLists.find(movieList => movieList.name === listName);
    const sum = _.sumBy(movieList.movies, 'rating');
    if (movieList.movies) {
      console.log('sum', sum);
      console.log('average', sum / movieList.movies.length);

      return sum / movieList.movies.length;
    }

    return null;
  }

  setCurrentMovieList(list) {
    this.currentMovieList = list;
  }
}

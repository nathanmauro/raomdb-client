import template from './movie-list.html';
import {MovieListController} from './movie-list.controller';
import './movie-list.scss';

let movieListComponent = {
  restrict: 'E',
  bindings: {
    movieList: '=?',
  },
  template,
  controller: MovieListController
};

export default movieListComponent;

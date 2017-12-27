import template from './movie.html';
import {MovieController} from './movie.controller';
import './movie.scss';

let movieDetail = {
  restrict: 'E',
  bindings: {},
  template,
  controller: MovieController
};

export default movieDetail;

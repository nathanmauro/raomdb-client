import template from './home.html';
import {HomeController} from './home.controller';
import './home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {
    requirements: '<'
  },
  template,
  controller: HomeController
};

export default homeComponent;

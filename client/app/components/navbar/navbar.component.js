import template from './navbar.html';
import {NavbarController} from './navbar.controller';
import './navbar.scss';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: NavbarController
};

export default navbarComponent;

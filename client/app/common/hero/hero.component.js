import template from './hero.html';
import {HeroController} from './hero.controller';
import './hero.scss';

let heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: HeroController
};

export default heroComponent;

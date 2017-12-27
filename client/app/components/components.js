import angular from 'angular';
import Home from './home/home';
import Requirement from './movie-list/movie-list';
import RequirementDetail from './movie/movie';

const componentModule = angular.module('app.components', [
  Home, // list of movie lists
  Requirement, // single movie list
  RequirementDetail // single movie
]);

export default componentModule.name;

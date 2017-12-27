import angular from 'angular';
import Home from './home/home';
import MovieList from './movie-list/movie-list';
import Movie from './movie/movie';

const componentModule = angular.module('app.components', [
  Home, // list of movie lists
  MovieList, // single movie list
  Movie // single movie
]);

export default componentModule.name;

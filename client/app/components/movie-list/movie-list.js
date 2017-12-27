import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieListComponent from './movie-list.component';

const movieListModule = angular.module('movieList', [
  uiRouter
]);
movieListModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home.movieList', {
      url: 'movielist/{listName:string}',
      component: 'movieList',
      resolve: {
        movieList: (MovieListFactory, $stateParams) => MovieListFactory.fetchMovieList($stateParams.listName),
      }
    });
});
movieListModule.component('movieList', movieListComponent);

export default movieListModule.name;

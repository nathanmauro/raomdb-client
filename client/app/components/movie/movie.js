import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieComponent from './movie.component';

const movieModule = angular.module('movie', [
  uiRouter
]);
movieModule.config(($stateProvider) => {
  // noinspection BadExpressionStatementJS
  'ngInject';

  $stateProvider
    .state('home.movie', {
      url: 'movie/{imdbId:string}',
      params: {
        listName: null
      },
      component: 'movie',
      resolve: {
        movie: (MovieFactory, $stateParams) => {
          console.log($stateParams);
          return MovieFactory.fetchMovie($stateParams.imdbId);
        }
      }
    });
});
movieModule.component('movie', movieComponent);

export default movieModule.name;

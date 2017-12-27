import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('home', [
  uiRouter
]);
homeModule.config(($stateProvider, $urlRouterProvider) => {
  // noinspection BadExpressionStatementJS
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        movieLists: HomeFactory => HomeFactory.fetchMovieLists(),
      }
    });
});
homeModule.component('home', homeComponent);

export default homeModule.name;

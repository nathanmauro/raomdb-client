import angular from 'angular';
import {MovieListFactory} from './movie-list.factory';
import {HomeFactory} from './home.factory';
import {MovieFactory} from './movie.factory';

const factoriesModule = angular.module('factories', []);
factoriesModule.factory('HomeFactory', HomeFactory);
factoriesModule.factory('MovieListFactory', MovieListFactory);
factoriesModule.factory('MovieFactory', MovieFactory);

export default factoriesModule.name;

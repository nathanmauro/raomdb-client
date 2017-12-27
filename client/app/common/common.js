import angular from 'angular';
import Factories from './factories/factories';

let commonModule = angular.module('app.common', [
  Factories
])
.name;

export default commonModule;

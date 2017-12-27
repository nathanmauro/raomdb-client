import angular from 'angular';
import Navbar from '../components/navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Factories from './factories/factories';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Factories
])
.name;

export default commonModule;

import * as _ from 'lodash';
export const HomeFactory = ($q, $http, $log) => {
  // noinspection BadExpressionStatementJS
  'ngInject';

  let movieLists = [];
  let movieListsDeferred = null;
  let createdMovieListDeferred = null;

  const getMovieLists = () => movieLists;

  const fetchMovieLists = () => {
    movieListsDeferred = $q.defer();

    $http.get('/rest/movielist').then(response => {
      movieLists = _.uniqBy(response.data, 'name');
      console.log('Fetched movie lists in home factory', movieLists);
      movieListsDeferred.resolve(movieLists);
    });

    return movieListsDeferred.promise;
  };

  const createNewMovieList = (listName) => {
    createdMovieListDeferred =  $q.defer();

    $http.post('/rest/movielist/create/' + listName).then(response => {
      movieLists = _.uniqBy(response.data, 'name');
      console.log('Movie lists returned in home factory after creating new list', movieLists);
      createdMovieListDeferred.resolve(movieLists);
    });

    return createdMovieListDeferred.promise;
  };

  return {
    getMovieLists,
    fetchMovieLists,
    createNewMovieList
  };
};


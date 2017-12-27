export const HomeFactory = ($q, $http, $log) => {
  'ngInject';


  let movieLists = [];
  let movieListsDeferred = null;
  let createdMovieListDeferred = null;

  const getMovieLists = () => movieLists;

  const fetchMovieLists = () => {
    movieListsDeferred = $q.defer();

    $http.get('/rest/movielist').then(response => {
      movieLists = response.data;
      console.log('Fetched movie lists in home factory', response.data);
      movieListsDeferred.resolve(response);
    });

    return movieListsDeferred.promise;
  };

  const createNewMovieList = (newMovieListObject) => {
    return $http.post('/rest/movielist/create', newMovieListObject);
  };

  return {
    getMovieLists,
    fetchMovieLists,
    createNewMovieList
  };
};


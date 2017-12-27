export const MovieFactory = ($q, $http, $log) => {
  'ngInject';

  let requirements = [];
  let requirementDefer = null;

  const getMovie = () => requirements;

  /**
   * Find a single movie by imdbId.
   * @param {string} imdbId
   */
  const fetchMovie = (imdbId) => {
    requirementDefer = $q.defer();

    $http.get('/rest/movie/' + imdbId).then(response => {
      requirements = response.data;
      $log.info('Fetched movie lists', response.data);
      requirementDefer.resolve(response);
    });
    return requirementDefer.promise;
  };

  const saveMovie = (movie) => {
    return $http.put("/rest/movie", movie);
  };

  return {
    getMovie,
    fetchMovie,
    saveMovie
  };
};


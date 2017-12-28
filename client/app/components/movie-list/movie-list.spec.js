import MovieListModule from './movie-list';
import {MovieListController} from './movie-list.controller';
import MovieListComponent from './movie-list.component';
import MovieListTemplate from './movie-list.html';

describe('MovieList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller;

    beforeEach(() => {
      controller = makeController()
    });

    it('has a movieTitleSearch property', () => {
      expect(controller).to.have.property('movieTitleSearch');
    });
    it('has a movieTitleSearchResults property', () => {
      expect(controller).to.have.property('movieTitleSearchResults');
    });
    it('has a movieList property', () => {
      expect(controller).to.have.property('movieList');
    });
    it('has a moviesInMovieList property', () => {
      expect(controller).to.have.property('moviesInMovieList');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has $ctrl.movieList.name in template', () => {
      expect(MovieListTemplate).to.match(/{{\s?\$ctrl\.movieList\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MovieListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MovieListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MovieListController);
    });
  });
});

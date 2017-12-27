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
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('movieTitleSearch');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(MovieListTemplate).to.match(/{{\s?\$ctrl\.movieTitleSearch\s?}}/g);
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

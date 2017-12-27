import MovieModule from './movie'
import {MovieController} from './movie.controller';
import MovieComponent from './movie.component';
import MovieTemplate from './movie.html';

describe('Movie', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MovieModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MovieController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('properties', () => { // erase if removing this.name from the controller
      let controller = makeController();
      // expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('check template', () => {
      // expect(MovieTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MovieComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MovieTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MovieController);
      });
  });
});

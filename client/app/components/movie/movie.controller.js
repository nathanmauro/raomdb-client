export class MovieController {
  /*@ngInject*/
  constructor($state, MovieFactory) {
    this.name = 'movie';
    this.state = $state;
    this.factory = MovieFactory;
    console.log('this', this);
    this.movie = null;
  }

  //noinspection JSUnusedGlobalSymbols todo test
  $onInit() {
    this.movie = this.factory.getMovie();
    console.log('movie in movie controller', this.movie);
  }

  save() {
    this.factory.saveMovie(this.movie).then(response => {
      const movie = response.data;
      console.log('movie saved!!', movie);
      this.state.reload('home').then(() => {
        this.state.transitionTo('home.movieList', {listName: movie.listName});
      });
    });
  }

}

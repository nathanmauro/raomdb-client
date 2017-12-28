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
      this._reloadState();
    });
  }

  // region util

  _reloadState() {
    this.state.reload('home').then(() => {
      console.log('this.state.params.listName', this.state.params.listName);
      this.state.transitionTo('home.movieList', {listName: this.state.params.listName});
    });
  }

  // endregion util

}

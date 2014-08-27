import Ember from 'ember';
import MovieParser from '../utils/movie-parser';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      movie: $.getJSON('http://www.omdbapi.com/?tomatoes=true&i=' + params.id).then(this.parseMovie),
      poster: $.getJSON('https://api.themoviedb.org/3/find/' + params.id + '?api_key=' + process.env.MOVIE_DB_KEY + '&external_source=imdb_id').then(this.parsePoster),
    });
  },

  setupController: function(controller, models) {
    var movie = models.movie;
    var poster = models.poster;

    controller.set('content', movie);
    controller.set('poster', poster);
  },

  parsePoster: function(data) {
    if (data.movie_results.length > 0) {
      var results = data.movie_results[0];
      var imageLocation = 'http://image.tmdb.org/t/p/original' + results.poster_path;
      var obj = {imageLocation: imageLocation};
      return obj;
    } else if (data.tv_results.length > 0) {
      var results = data.tv_results[0];
      var imageLocation = 'http://image.tmdb.org/t/p/original' + results.poster_path;
      var obj = {imageLocation: imageLocation};
      return obj;
    } else if (data.tv_season_results.length > 0) {
      var results = data.tv_season_results[0];
      var imageLocation = 'http://image.tmdb.org/t/p/original' + results.poster_path;
      var obj = {imageLocation: imageLocation};
      return obj;
    } else if (data.tv_episode_results.length > 0) {
      var results = data.tv_episode_results[0];
      var imageLocation = 'http://image.tmdb.org/t/p/original' + results.poster_path;
      var obj = {imageLocation: imageLocation};
      return obj;
    }
  },

  parseMovie: function(data) {
    var parser = new MovieParser(data);
    return parser.parse();
  },
});

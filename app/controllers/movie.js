import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    moreInfo: function() {
      if (this.get('needMoreInfo') == false) {
        this.set('needMoreInfo', true);
      } else {
        this.set('needMoreInfo', false);
      }
    }
  },

  imdbImage: function() {
    var id = this.get('id');
    $.getJSON('https://api.themoviedb.org/3/find/' + id + '?api_key=227fe3bb4564a1ba35150061d97e905c&external_source=imdb_id').done(function(data) {
      if (data.movie_results) {
        var results = data.movie_results[0];
        var imageLocation = 'http://image.tmdb.org/t/p/original/' + results.poster;
        debugger;
        this.set('imageLocation', imageLocation);
      } else if (data.tv_results) {
        var results = data.tv_results[0];
        var imageLocation = 'http://image.tmdb.org/t/p/original/' + results.poster;
        this.set('imageLocation', imageLocation);
      }
    });
  },

  needMoreInfo: false,

  uncertainText: function() {
    if (this.get('totalScore') < 20) {
      return "A score under 20 generally indicates that there is not enough information to calculate with certainty.";
    } else {
      return '';
    }
  }.property('model.uncertainText'),

  imdbID: function() {
    var id = this.get('id');
    return 'http://imdb.com/title/' + id;
  }.property('model.imdbID'),

});

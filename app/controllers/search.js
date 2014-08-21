import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    search: function(query) {
      var self = this;
      $('.spinner').removeClass('hidden');
      $.getJSON('http://www.omdbapi.com/?s=' + query).done(function(data){
        self.set('model', data.Search);
        $('.spinner').addClass('hidden');
      });
      this.set('resultsToRender', true);
    },
  },

  resultsToRender: null,

  uncertainText: function() {
    if (this.get('totalScore') < 20) {
      return "A score under 20 generally indicates that there is not enough information to calculate with certainty.";
    } else {
      return '';
    }
  }.property('model.uncertainText')
});

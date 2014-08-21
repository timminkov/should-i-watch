import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function() {
      this.render('results', {outlet: 'results'});
    },

    movie: function(id) {
      $('.spinner').removeClass('hidden');
      this.transitionTo('movie', id);
    }
  }
});

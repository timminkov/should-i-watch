import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ShouldiwatchENV.locationType
});

Router.map(function() {
  this.route('search', { path: '/' });
  this.route('movie', { path: '/movie/:id' });
});

export default Router;

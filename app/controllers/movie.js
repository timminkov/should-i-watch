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

var MovieParser = {
  parse: function(data) {
    var parsedData = {
      title: data.Title
    }
    debugger;

    return parsedData;
  }
}

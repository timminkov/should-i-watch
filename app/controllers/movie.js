import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    moreInfo: function() {
      this.set('needMoreInfo', true);
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

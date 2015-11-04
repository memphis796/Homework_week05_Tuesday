var games = Backbone.Router.extend({
  routes: {
  "start": "start",
  "highscore": "highscore",
  "options": "options",
},
  start: function() {
    $(video).html();
  }
  highscore: function() {
    $(video).html(_.template($().html()));
  },

  options: function() {
    $(video).html(_.template($().html()));
  }
});


var games = new games();
Backbone.history.start

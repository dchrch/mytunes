// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  removeSong: function() {
    this.trigger('removeSong', this);
  }

});

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.first().dequeue();
    }, this);
  },

  playFirst: function() {
    this.first().play();
  }

});
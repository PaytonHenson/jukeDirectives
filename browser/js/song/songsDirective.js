juke.directive('songs', function (PlayerFactory) {
  return {
    restrict: 'E', // the 'E' is for 'element'
    templateUrl: '/js/song/songDirective.html',
    scope: {
      songs: '='
    },
    link: function (scope, element, attr) {

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };

      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
    }
  };
});

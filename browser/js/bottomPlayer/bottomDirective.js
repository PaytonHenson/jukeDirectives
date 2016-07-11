juke.directive('bottomPlayer', function (PlayerFactory) {
  return {
    restrict: 'E', // the 'E' is for 'element'
    templateUrl: '/js/bottomPlayer/bottom.html',
    link: function(scope, element, attr) {

      angular.extend(scope, PlayerFactory);

      scope.toggle = function () {
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };

      scope.handleProgressClick = function (evt) {
        PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
      };
    }
  };
});

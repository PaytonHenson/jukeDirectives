juke.directive('albumList', function () {
  return {
    restrict: 'E', // the 'E' is for 'element'
    templateUrl: '/js/album/albumDirectiveHTMLtemplate.html',
    scope: {
      albums: '='
    }
    // link: function (scope, element, attr) {

    // }
  };
});

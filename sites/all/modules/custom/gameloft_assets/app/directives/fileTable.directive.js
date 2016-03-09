app.directive('fileTable', [fileTableDirective]);

function fileTableDirective() {
  return {
    restrict: 'E',
    templateUrl: app_path + '/templates/file_table.html',
    controller: ['$scope', 'File', function($scope, File) {
      $scope.displayModes = [
        { title: 'Thumbnail', fa: 'fa-file-image-o', id: 'thumb' },
        { title: 'Expanded', fa: 'fa-television', id: 'expand' },
        { title: 'List View', fa: 'fa-bars', id: 'list'}
      ];

      $scope.activeDisplay = 'thumb';

      $scope.changeDisplay = function(displayId) {
        $scope.activeDisplay = displayId;
      }

    }]
  };
}

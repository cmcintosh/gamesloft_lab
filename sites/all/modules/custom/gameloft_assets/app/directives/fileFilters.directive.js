app.directive('fileFilters', fileFilters);

function fileFilters() {
  return {
    restrict: 'E',
    templateUrl: app_path + "/templates/filters.tpl.html",
    controller: ['Filter', '$scope', function(Filter, $scope){

    $scope.filters = Filter.get();
    $scope.activeFilter = {};
    $scope.filterChange = function(filter) { }

    }]
  }
}

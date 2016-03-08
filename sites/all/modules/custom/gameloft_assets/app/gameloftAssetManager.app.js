var app = angular.module('gameloftAssetManager', []);
app.controller('gameloftAssetsCTRL', ['$scope', 'File', gameloftAssetsCTRL])
  .directive('fileTable', [fileTableDirective])
  .service('File', ['$q', '$http', fileFactory]);


function gameloftAssetsCTRL($scope, File) {
  File.index().then(function(data){
    $scope.files = data;
  });
}

function fileTableDirective() {
  return {
    restrict: 'E',
    templateURL: '/sites/all/modules/custom/gameloft_assets/app/template/file_table.html',

  }
}

function fileFactory($q, $http) {
  var resource = {
    index: fileIndex,
    types: fileTypes,
    save: fileSave,
  };

  function fileIndex() {
    var defer = $q.defer();

    $http.get('/api/gameloft/file/index')
      .success(function(data) {
        defer.resolve(data.files);
      })
      .error(function(error){
        defer.reject(error);
      });

    return defer.promise;
  }

  function fileTypes() { }

  function fileSave(files) { }

  return resource;
}

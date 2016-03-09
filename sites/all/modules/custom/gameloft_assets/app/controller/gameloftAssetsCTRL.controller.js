app.controller('gameloftAssetsCTRL', ['$scope', 'File', gameloftAssetsCTRL]);

function gameloftAssetsCTRL($scope, File) {
  $scope.files = [];
  File.index().then(function(data){
    $scope.files = data;
  });
}

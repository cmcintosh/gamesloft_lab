var app = angular.module('gameloftAssetManager', ['ngRoute']);
var app_path = "/sites/all/modules/custom/gameloft_assets/app";

app.config(function($routeProvider) {
  $routeProvider
   .when('/explorer', {
       templateUrl: app_path + "/templates/file_explorer.view.html",
    })
    .when('/upload', {
      templateUrl: app_path + "/templates/file_upload.view.html",
    })
    .otherwise({
        redirectTo: '/explorer'
    });
});

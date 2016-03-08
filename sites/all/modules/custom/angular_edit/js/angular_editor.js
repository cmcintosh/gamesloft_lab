var app = angular.module('angularEditor', []);

app.controller('angularEditorCTRL', ['$scope', 'Entity', angularEditorCTRL])
   .directive('angularEditFilters', [angularEditFilters])
   .directive('angularEditList', [angularEditList])
   .factory('Entity', ['$http', '$q', entityFactory]);

/**
* Primary Controller for angular editor.
*/
function angularEditorCTRL($scope, Entity) { }

/**
* Directive for the Entity Filters.
*/
function angularEditFilters() { }

/**
* Directive for the Edit List.
*/
function angularEditList() { }

/**
* Factory for the angular editor.
*/
function entityFactory($http, $q) {
  var resource = {
    'index': entityLoad,
    'save': entitySave,
  };

  function entityLoad(entity_type) {
    
  }

  return resource;
}

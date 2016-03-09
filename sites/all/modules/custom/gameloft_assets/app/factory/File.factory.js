app.factory('File', ['$q', '$http', fileFactory]);

function fileFactory($q, $http) {
  var resource = {
    index: fileIndex,
    tags: fileTags,
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

  function fileTags(tagname) {
    var defer = $q.defer();

    $http.get('/api/gameloft/file/index?tag=' + tagname)
      .success(function(data) {
        var files =  $.map(data.files, function(value, index) {
          return [value];
        });
        defer.resolve(files);
      })
      .error(function(error){
        defer.reject(error);
      });

    return defer.promise;
  }

  function fileSave(files) {

  }

  return resource;
}
